import { useState } from "react";
import { useParams } from "react-router-dom";
import { Settings, Users, BookOpen, Heart, Eye, MessageCircle } from "lucide-react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StoryCard } from "@/components/story-card";

// Mock data - replace with real data fetching
const mockUser = {
  id: "1",
  username: "literary_dreamer",
  bio: "Passionate storyteller weaving tales of mystery and adventure. Published author of 'The Whispering Woods' series.",
  profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  followers: 2847,
  following: 156,
  totalStories: 23,
  isFollowing: false
};

const mockStories = [
  {
    id: "1",
    title: "The Midnight Library",
    subtitle: "A tale of books that come alive",
    category: "Fantasy",
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    views: 15420,
    likes: 892,
    comments: 156,
    publishedAt: "2024-01-15"
  },
  {
    id: "2", 
    title: "City of Echoes",
    subtitle: "Urban mystery in the heart of downtown",
    category: "Mystery",
    coverImage: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=400&fit=crop",
    views: 8765,
    likes: 432,
    comments: 89,
    publishedAt: "2024-01-08"
  }
];

export default function Profile() {
  const { username } = useParams();
  const [isFollowing, setIsFollowing] = useState(mockUser.isFollowing);
  const [activeTab, setActiveTab] = useState("stories");
  
  // In a real app, determine if this is the current user's profile
  const isOwnProfile = username === "literary_dreamer"; // Mock check

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    // TODO: Implement follow/unfollow logic
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Profile Picture */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20">
              <img 
                src={mockUser.profilePicture} 
                alt={mockUser.username}
                className="w-full h-full object-cover"
              />
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                    @{mockUser.username}
                  </h1>
                  <p className="text-muted-foreground mt-2 max-w-2xl">
                    {mockUser.bio}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {isOwnProfile ? (
                    <Button variant="outline" className="border-primary text-primary">
                      <Settings className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleFollow}
                      variant={isFollowing ? "outline" : "default"}
                      className={isFollowing ? "border-primary text-primary" : "btn-literary"}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      {isFollowing ? "Following" : "Follow"}
                    </Button>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-6 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-lg text-foreground">{mockUser.totalStories}</div>
                  <div className="text-muted-foreground">Stories</div>
                </div>
                <div className="text-center cursor-pointer hover:text-primary transition-colors">
                  <div className="font-semibold text-lg text-foreground">{mockUser.followers}</div>
                  <div className="text-muted-foreground">Followers</div>
                </div>
                <div className="text-center cursor-pointer hover:text-primary transition-colors">
                  <div className="font-semibold text-lg text-foreground">{mockUser.following}</div>
                  <div className="text-muted-foreground">Following</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-4 mb-8">
            <TabsTrigger value="stories" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Stories
            </TabsTrigger>
            {isOwnProfile && (
              <TabsTrigger value="saved" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Saved
              </TabsTrigger>
            )}
            <TabsTrigger value="followers" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Followers
            </TabsTrigger>
            <TabsTrigger value="following" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Following
            </TabsTrigger>
          </TabsList>

          {/* Stories Tab */}
          <TabsContent value="stories">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockStories.map((story) => (
                <div key={story.id} className="group">
                  <StoryCard
                    title={story.title}
                    subtitle={story.subtitle}
                    category={story.category}
                    coverImage={story.coverImage}
                    author={mockUser.username}
                    authorAvatar={mockUser.profilePicture}
                  />
                  {/* Story Stats */}
                  <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {story.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {story.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      {story.comments}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Saved Stories Tab */}
          {isOwnProfile && (
            <TabsContent value="saved">
              <div className="text-center py-12">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No saved stories yet</h3>
                <p className="text-muted-foreground">Stories you save will appear here</p>
              </div>
            </TabsContent>
          )}

          {/* Followers Tab */}
          <TabsContent value="followers">
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">Followers</h3>
              <p className="text-muted-foreground">
                {mockUser.followers} followers • Feature coming soon
              </p>
            </div>
          </TabsContent>

          {/* Following Tab */}
          <TabsContent value="following">
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">Following</h3>
              <p className="text-muted-foreground">
                Following {mockUser.following} writers • Feature coming soon
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}