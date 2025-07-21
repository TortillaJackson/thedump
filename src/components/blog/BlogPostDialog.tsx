import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ExternalLink } from "lucide-react";
import { BlogPost } from "@/types/blog";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

interface BlogPostDialogProps {
  post: BlogPost | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const BlogPostDialog = ({ post, isOpen, onOpenChange }: BlogPostDialogProps) => {
  const { t } = useLanguage();
  
  if (!post) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.createdAt)}</span>
            <User className="h-4 w-4 ml-2" />
            <span>{t('blog.author')}</span>
          </div>
          <DialogTitle className="text-2xl font-light text-left">
            {post.title}
          </DialogTitle>
          <DialogDescription asChild>
            <Badge variant="secondary" className="w-fit">{t('blog.category')}</Badge>
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {post.image && (
            <div className="aspect-video overflow-hidden rounded-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {post.content}
            </div>
          </div>
          
          {post.sources && (
            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-800 mb-2">Quellen:</h4>
              <div className="text-sm text-gray-600 whitespace-pre-wrap">
                {post.sources}
              </div>
            </div>
          )}
          
          {post.externalUrl && (
            <div className="border-t pt-4">
              <Button variant="default" asChild>
                <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Externe Quelle besuchen
                </a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogPostDialog;