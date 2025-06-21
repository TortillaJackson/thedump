
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  loginData: { username: string; password: string };
  onLoginDataChange: (data: { username: string; password: string }) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const LoginDialog = ({ 
  isOpen, 
  onOpenChange, 
  loginData, 
  onLoginDataChange, 
  onSubmit 
}: LoginDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
          Admin Login
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Admin Login</DialogTitle>
          <DialogDescription>
            Melden Sie sich an, um Blog-Posts zu verwalten.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            placeholder="Benutzername"
            value={loginData.username}
            onChange={(e) => onLoginDataChange({...loginData, username: e.target.value})}
            required
          />
          <Input
            type="password"
            placeholder="Passwort"
            value={loginData.password}
            onChange={(e) => onLoginDataChange({...loginData, password: e.target.value})}
            required
          />
          <Button type="submit" className="w-full bg-[#f0511e] text-white hover:bg-[#d4430f]">
            Anmelden
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
