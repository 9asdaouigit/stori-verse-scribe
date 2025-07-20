import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedStories } from "@/components/featured-stories";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturedStories />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
