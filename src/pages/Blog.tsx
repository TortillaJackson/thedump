
import { Navigation } from "@/components/Navigation";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard from "@/components/blog/BlogCard";
import CreatePostDialog from "@/components/blog/CreatePostDialog";
import LoginDialog from "@/components/blog/LoginDialog";
import { useBlog } from "@/hooks/useBlog";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
  const { t } = useLanguage();
  const {
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
  } = useBlog();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <BlogHeader />

          {/* Blog Posts Grid */}
          <div className="max-w-6xl mx-auto">
            {isAdmin && (
              <div className="mb-8">
                <CreatePostDialog
                  isOpen={showNewPostDialog}
                  onOpenChange={setShowNewPostDialog}
                  newPost={newPost}
                  onNewPostChange={setNewPost}
                  onSubmit={handleCreatePost}
                />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  isAdmin={isAdmin}
                  onDelete={handleDeletePost}
                />
              ))}
            </div>

            {posts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">{t('blog.noPosts')}</p>
                {isAdmin && (
                  <p className="text-gray-400 mt-2">{t('blog.adminHint')}</p>
                )}
              </div>
            )}
          </div>

          {/* Admin Login */}
          {!isAdmin && (
            <div className="mt-16 text-center">
              <LoginDialog
                isOpen={showLogin}
                onOpenChange={setShowLogin}
                loginData={loginData}
                onLoginDataChange={setLoginData}
                onSubmit={handleLogin}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;
