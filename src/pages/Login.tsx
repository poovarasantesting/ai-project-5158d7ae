import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Instagram } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "Logged in successfully!",
      });
      navigate("/feed");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <Instagram className="h-12 w-12 text-pink-500" />
          <h1 className="mt-4 text-2xl font-bold tracking-tight">Instagram</h1>
          <p className="text-sm text-gray-500">Sign in to see photos and videos from your friends</p>
        </div>
        
        <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
          </form>
          
          <div className="mt-6 flex items-center justify-center">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="mx-2 text-xs text-gray-500">OR</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          
          <Button 
            variant="outline" 
            className="mt-6 w-full"
            onClick={() => navigate("/feed")}
          >
            Continue as guest
          </Button>
        </div>
        
        <div className="mt-4 text-center text-sm">
          <p>Don't have an account? <span className="cursor-pointer font-semibold text-blue-500">Sign up</span></p>
        </div>
      </div>
    </div>
  );
}