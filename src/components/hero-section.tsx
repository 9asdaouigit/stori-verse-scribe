import { PenTool, Users, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="hero-section text-white py-20 px-4">
      <div className="container mx-auto text-center space-y-8">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
            Where Stories
            <span className="block text-accent">Come to Life</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
            Join a community of passionate writers and readers. Share your stories, discover amazing content, and connect with fellow storytellers.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="btn-accent text-lg px-8 py-3">
            <PenTool className="mr-2 h-5 w-5" />
            Start Writing
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Explore Stories
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-6 w-6 text-accent mr-2" />
              <span className="text-3xl font-bold">10K+</span>
            </div>
            <p className="text-primary-foreground/80">Writers</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <BookOpen className="h-6 w-6 text-accent mr-2" />
              <span className="text-3xl font-bold">50K+</span>
            </div>
            <p className="text-primary-foreground/80">Stories</p>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="h-6 w-6 text-accent mr-2" />
              <span className="text-3xl font-bold">1M+</span>
            </div>
            <p className="text-primary-foreground/80">Readers</p>
          </div>
        </div>
      </div>
    </section>
  );
}