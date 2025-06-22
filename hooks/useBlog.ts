
import { useState, useEffect } from "react";
import { BlogPost, NewPost } from "@/types/blog";
import { useToast } from "@/hooks/use-toast";

export const useBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [showLogin, setShowLogin] = useState(false);
  const [newPost, setNewPost] = useState<NewPost>({
    title: "",
    content: "",
    image: "",
    sources: ""
  });
  const [showNewPostDialog, setShowNewPostDialog] = useState(false);
  const { toast } = useToast();

  // Sample posts data
  const getSamplePosts = (): BlogPost[] => [
    {
      id: "1",
      title: "AI Revolution Podcast",
      content: "Ein tiefgehender Einblick in die AI Revolution und wie sie verschiedene Industrien transformiert. In diesem Podcast diskutieren wir die neuesten Entwicklungen in der künstlichen Intelligenz und deren Auswirkungen auf das Venture Building.",
      excerpt: "Entdecken Sie die neuesten Trends in der AI Revolution und deren Impact auf Innovation.",
      createdAt: new Date().toISOString(),
      externalUrl: "https://www.youtube.com/watch?v=lnRSOG9daiQ"
    },
    {
      id: "2",
      title: "Responsible Enterprise Decisions with Knowledge-Enriched Generative AI",
      content: "Warum es für Generative AI auf Unternehmensebene essentiell ist, Knowledge Graphs zu integrieren. Verantwortungsvolle Unternehmensentscheidungen erfordern eine solide Wissensbasis, die durch moderne AI-Technologien erweitert wird.",
      excerpt: "Die Bedeutung von Knowledge Graphs für verantwortungsvolle AI-Entscheidungen in Unternehmen.",
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      externalUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7127258042504503297/"
    },
    {
      id: "3",
      title: "DataBorg auf StartupRadar Podcast 'Junge Startups'",
      content: "DataBorg war zu Gast im StartupRadar Podcast 'Junge Startups' und hat über die Zukunft der Wissensverwaltung und AI-gestützten Datenverarbeitung gesprochen. Ein spannender Einblick in unser Portfolio-Unternehmen.",
      excerpt: "DataBorg im Gespräch über Innovation in der Wissensverwaltung und AI-Technologie.",
      createdAt: new Date(Date.now() - 172800000).toISOString(),
      externalUrl: "https://www.startup-insider.com/podcast/junge-startups-arcneo-panos-ai-databorg-ai"
    },
    {
      id: "4",
      title: "G-Cars bei Sat.1 Frühstücksfernsehen",
      content: "G-Cars, unser innovativer Mobility Service 'Frauen fahren Frauen', wurde im Sat.1 Frühstücksfernsehen vorgestellt. Die Sendung zeigt, wie G-Cars Frauen in Berlin eine sichere Transportalternative bietet.",
      excerpt: "G-Cars im TV: Wie unser Mobility Service Frauen sichere Fahrten ermöglicht.",
      createdAt: new Date(Date.now() - 259200000).toISOString(),
      externalUrl: "https://www.joyn.de/play/compilation/sat1-fruehstuecksfernsehen/g-cars-frauen-fahren-frauen"
    }
  ];

  // Load posts from localStorage on component mount
  useEffect(() => {
    console.log("Loading blog posts...");
    const savedPosts = localStorage.getItem('blog-posts');
    if (savedPosts) {
      console.log("Found saved posts:", savedPosts);
      const parsedPosts = JSON.parse(savedPosts);
      setPosts(parsedPosts);
    } else {
      console.log("No saved posts found, using sample posts");
      const samplePosts = getSamplePosts();
      console.log("Sample posts:", samplePosts);
      setPosts(samplePosts);
      localStorage.setItem('blog-posts', JSON.stringify(samplePosts));
    }
  }, []);

  // Debug: Log posts when they change
  useEffect(() => {
    console.log("Posts state updated:", posts);
  }, [posts]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === "fabio" && loginData.password === "5monti4tw") {
      setIsAdmin(true);
      setShowLogin(false);
      toast({
        title: "Erfolgreich eingeloggt",
        description: "Sie können jetzt Blog-Posts verwalten."
      });
    } else {
      toast({
        title: "Anmeldung fehlgeschlagen",
        description: "Benutzername oder Passwort sind falsch.",
        variant: "destructive"
      });
    }
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    const post: BlogPost = {
      id: Date.now().toString(),
      title: newPost.title,
      content: newPost.content,
      image: newPost.image,
      sources: newPost.sources,
      createdAt: new Date().toISOString(),
      excerpt: newPost.content.substring(0, 150) + "..."
    };

    const updatedPosts = [post, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('blog-posts', JSON.stringify(updatedPosts));
    
    setNewPost({ title: "", content: "", image: "", sources: "" });
    setShowNewPostDialog(false);
    
    toast({
      title: "Blog-Post erstellt",
      description: "Der neue Blog-Post wurde erfolgreich veröffentlicht."
    });
  };

  const handleDeletePost = (id: string) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('blog-posts', JSON.stringify(updatedPosts));
    
    toast({
      title: "Blog-Post gelöscht",
      description: "Der Blog-Post wurde erfolgreich entfernt."
    });
  };

  return {
    posts,
    isAdmin,
    loginData,
    setLoginData,
    showLogin,
    setShowLogin,
    newPost,
    setNewPost,
    showNewPostDialog,
    setShowNewPostDialog,
    handleLogin,
    handleCreatePost,
    handleDeletePost
  };
};
