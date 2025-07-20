import { Heart, MessageCircle, Bookmark, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface StoryCardProps {
  title: string;
  subtitle?: string;
  author: string;
  authorAvatar?: string;
  category: string;
  excerpt?: string;
  coverImage?: string;
  stats?: {
    views: number;
    likes: number;
    comments: number;
  };
  readTime?: string;
  publishDate?: string;
}

export function StoryCard({
  title,
  subtitle,
  author,
  authorAvatar,
  category,
  excerpt,
  coverImage,
  stats,
  readTime,
  publishDate
}: StoryCardProps) {
  return (
    <article className="story-card p-6 space-y-4 group">
      {/* Story Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <Badge variant="secondary" className="mb-2 text-xs font-medium">
            {category}
          </Badge>
          <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            <a href="#" className="story-link">
              {title}
            </a>
          </h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1 italic">
              {subtitle}
            </p>
          )}
          <div className="flex items-center mt-2">
            {authorAvatar && (
              <img 
                src={authorAvatar} 
                alt={author}
                className="w-5 h-5 rounded-full mr-2"
              />
            )}
            <p className="text-sm text-muted-foreground">
              by <span className="font-medium text-foreground hover:text-primary cursor-pointer">{author}</span>
            </p>
          </div>
        </div>
        {coverImage && (
          <div className="ml-4 w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
            <img 
              src={coverImage} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
      </div>

      {/* Story Excerpt */}
      {excerpt && (
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      )}

      {/* Story Meta */}
      {(publishDate || readTime || stats) && (
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          {(publishDate || readTime) && (
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              {publishDate && <span>{publishDate}</span>}
              {publishDate && readTime && <span>•</span>}
              {readTime && <span>{readTime}</span>}
            </div>
          )}
          
          {/* Story Stats & Actions */}
          <div className="flex items-center space-x-1">
            {stats && (
              <div className="flex items-center space-x-3 text-xs text-muted-foreground mr-3">
                <span className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {stats.views}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="h-3 w-3" />
                  {stats.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" />
                  {stats.comments}
                </span>
              </div>
            )}
            
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/10">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-accent/20">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </article>
  );
}