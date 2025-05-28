import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Bookmark, Home, Search, PlusSquare, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Sample data for posts
const POSTS = [
  {
    id: 1,
    user: "janedoe",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1565378273553-0ecee40d1b95?w=500",
    likes: 142,
    caption: "Sunset vibes 🌅 #nature #photography",
    comments: 12,
    timeAgo: "2 hours ago"
  },
  {
    id: 2,
    user: "travel_addict",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=500",
    likes: 238,
    caption: "Beach day with friends! 🏖️ #summer #beach",
    comments: 24,
    timeAgo: "5 hours ago"
  },
  {
    id: 3,
    user: "foodie_chef",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
    likes: 89,
    caption: "Homemade pizza night! 🍕 #foodie #homecooking",
    comments: 8,
    timeAgo: "1 day ago"
  }
];

export default function Feed() {
  const [posts, setPosts] = useState(POSTS);
  const { toast } = useToast();

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 } 
        : post
    ));
    
    toast({
      description: "Post liked!",
      duration: 1500,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex max-w-screen-md items-center justify-between p-4">
          <h1 className="text-xl font-bold">Instagram</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <PlusSquare className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-screen-md pb-20">
        {/* Stories section */}
        <div className="mb-4 mt-4 flex overflow-x-auto p-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="mr-4 flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 p-[2px]">
                <Avatar className="h-full w-full">
                  <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 10}`} />
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
              </div>
              <span className="mt-1 text-xs">user{i + 1}</span>
            </div>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border-b border-gray-200 bg-white pb-4">
              {/* Post header */}
              <div className="flex items-center p-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.avatar} />
                  <AvatarFallback>{post.user[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <span className="ml-2 font-semibold">{post.user}</span>
              </div>

              {/* Post image */}
              <div className="relative">
                <img src={post.image} alt="Post" className="w-full" />
              </div>

              {/* Post actions */}
              <div className="flex items-center justify-between p-4">
                <div className="flex space-x-4">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleLike(post.id)}
                  >
                    <Heart className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircle className="h-6 w-6" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon">
                  <Bookmark className="h-6 w-6" />
                </Button>
              </div>

              {/* Likes */}
              <div className="px-4">
                <p className="font-semibold">{post.likes} likes</p>
              </div>

              {/* Caption */}
              <div className="px-4 pt-2">
                <p>
                  <span className="font-semibold">{post.user}</span>{" "}
                  {post.caption}
                </p>
              </div>

              {/* View comments */}
              <div className="px-4 pt-1">
                <p className="text-sm text-gray-500">
                  View all {post.comments} comments
                </p>
              </div>

              {/* Time */}
              <div className="px-4 pt-1">
                <p className="text-xs uppercase text-gray-400">{post.timeAgo}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 border-t bg-white">
        <div className="mx-auto flex max-w-screen-md justify-around p-3">
          <Button variant="ghost" size="icon">
            <Home className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <PlusSquare className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </div>
  );
}