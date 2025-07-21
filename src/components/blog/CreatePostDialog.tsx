
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { NewPost } from "@/types/blog";

interface CreatePostDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  newPost: NewPost;
  onNewPostChange: (post: NewPost) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const CreatePostDialog = ({ 
  isOpen, 
  onOpenChange, 
  newPost, 
  onNewPostChange, 
  onSubmit 
}: CreatePostDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-[#f0511e] text-white hover:bg-[#d4430f]">
          <Plus className="h-4 w-4 mr-2" />
          Neuer Blog-Post
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Neuen Blog-Post erstellen</DialogTitle>
          <DialogDescription>
            Erstellen Sie einen neuen Blog-Post für Ihre Website.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            placeholder="Titel"
            value={newPost.title}
            onChange={(e) => onNewPostChange({...newPost, title: e.target.value})}
            required
          />
          <Input
            placeholder="Bild URL (optional)"
            value={newPost.image}
            onChange={(e) => onNewPostChange({...newPost, image: e.target.value})}
          />
          <Textarea
            placeholder="Inhalt"
            value={newPost.content}
            onChange={(e) => onNewPostChange({...newPost, content: e.target.value})}
            rows={10}
            required
          />
          <Textarea
            placeholder="Quellen (optional)"
            value={newPost.sources}
            onChange={(e) => onNewPostChange({...newPost, sources: e.target.value})}
            rows={3}
          />
          <Input
            placeholder="Externer Link (optional)"
            value={newPost.externalUrl}
            onChange={(e) => onNewPostChange({...newPost, externalUrl: e.target.value})}
          />
          <Button type="submit" className="w-full bg-[#f0511e] text-white hover:bg-[#d4430f]">
            Blog-Post veröffentlichen
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;
