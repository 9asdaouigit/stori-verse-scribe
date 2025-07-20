import { useState } from "react";
import { Book, User, Search, PlusCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Book className="h-8 w-8 text-primary" />
          <span className="text-2xl font-serif font-bold text-primary">WriteFlow</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="story-link text-sm font-medium text-foreground hover:text-primary transition-colors">
            Discover
          </a>
          <a href="#" className="story-link text-sm font-medium text-foreground hover:text-primary transition-colors">
            Categories
          </a>
          <a href="#" className="story-link text-sm font-medium text-foreground hover:text-primary transition-colors">
            Authors
          </a>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-sm mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search stories, authors..."
              className="pl-10 bg-muted/50 border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <PlusCircle className="h-4 w-4 mr-2" />
            Write
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4 mr-2" />
            Profile
          </Button>
          <Button size="sm" className="btn-literary">
            Sign In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search stories, authors..."
                className="pl-10 bg-muted/50 border-border"
              />
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary">Discover</a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary">Categories</a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary">Authors</a>
            </nav>

            {/* Mobile Actions */}
            <div className="flex flex-col space-y-2">
              <Button variant="outline" size="sm" className="border-primary text-primary">
                <PlusCircle className="h-4 w-4 mr-2" />
                Write Story
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button size="sm" className="btn-literary">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}