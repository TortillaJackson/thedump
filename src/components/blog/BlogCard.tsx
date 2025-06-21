
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Eye, Edit, Trash2, ExternalLink } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  isAdmin: boolean;
  onDelete: (id: string) => void;
}

const BlogCard = ({ post, isAdmin, onDelete }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      {post.image && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(post.createdAt)}</span>
          <User className="h-4 w-4 ml-2" />
          <span>Fabio Chiaramonte</span>
        </div>
        <CardTitle className="text-xl font-light line-clamp-2">
          {post.title}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">Venture Building</Badge>
          <div className="flex space-x-2">
            {post.externalUrl ? (
              <Button variant="ghost" size="sm" asChild>
                <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Ansehen
                </a>
              </Button>
            ) : (
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4 mr-1" />
                Lesen
              </Button>
            )}
            {isAdmin && (
              <>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onDelete(post.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
