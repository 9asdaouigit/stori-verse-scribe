import { StoryCard } from "./story-card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Star } from "lucide-react";

const featuredStories = [
  {
    title: "The Last Library",
    author: "Elena Rodriguez",
    category: "Science Fiction",
    excerpt: "In a world where books are forbidden, one librarian fights to preserve the last collection of human knowledge. A dystopian tale of hope, resistance, and the power of stories to change the world.",
    stats: { views: 12500, likes: 890, comments: 156 },
    readTime: "15 min read",
    publishDate: "Dec 15, 2024"
  },
  {
    title: "Midnight Coffee Shop",
    author: "James Chen",
    category: "Romance",
    excerpt: "Two insomniacs meet at a 24-hour coffee shop and discover that sometimes the best conversations happen when the rest of the world is asleep. A heartwarming story about connection and finding love in unexpected places.",
    stats: { views: 8200, likes: 654, comments: 89 },
    readTime: "12 min read",
    publishDate: "Dec 14, 2024"
  },
  {
    title: "The Memory Thief",
    author: "Sarah Mitchell",
    category: "Fantasy",
    excerpt: "When memories become currency, a young thief must choose between stealing precious moments and saving her dying sister. An enchanting fantasy about sacrifice, family, and the true value of our experiences.",
    stats: { views: 15300, likes: 1200, comments: 234 },
    readTime: "18 min read",
    publishDate: "Dec 13, 2024"
  },
  {
    title: "Digital Detox",
    author: "Marcus Thompson",
    category: "Contemporary Fiction",
    excerpt: "A tech executive decides to disconnect from all digital devices for a month, only to discover what he's been missing in the real world. A thought-provoking exploration of modern life and authentic connection.",
    stats: { views: 6800, likes: 423, comments: 67 },
    readTime: "10 min read",
    publishDate: "Dec 12, 2024"
  },
  {
    title: "The Clockmaker's Daughter",
    author: "Isabella Wong",
    category: "Historical Fiction",
    excerpt: "Set in 1920s Paris, this story follows a young woman who inherits her father's clock shop and discovers a mysterious timepiece that holds the key to her family's past.",
    stats: { views: 9400, likes: 567, comments: 98 },
    readTime: "14 min read",
    publishDate: "Dec 11, 2024"
  },
  {
    title: "Echoes in the Dark",
    author: "David Park",
    category: "Mystery",
    excerpt: "A detective investigating a series of mysterious disappearances discovers that the victims all shared one thing in common: they claimed to hear voices from the past.",
    stats: { views: 11200, likes: 789, comments: 145 },
    readTime: "16 min read",
    publishDate: "Dec 10, 2024"
  }
];

export function FeaturedStories() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Featured Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most captivating stories from our community of writers
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button variant="default" size="sm" className="btn-literary">
            <TrendingUp className="h-4 w-4 mr-2" />
            Trending
          </Button>
          <Button variant="outline" size="sm">
            <Clock className="h-4 w-4 mr-2" />
            Latest
          </Button>
          <Button variant="outline" size="sm">
            <Star className="h-4 w-4 mr-2" />
            Top Rated
          </Button>
        </div>

        {/* Stories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {featuredStories.map((story, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <StoryCard {...story} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Load More Stories
          </Button>
        </div>
      </div>
    </section>
  );
}