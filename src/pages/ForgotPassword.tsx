import { useState } from "react";
import { Book, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement password reset logic
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Book className="h-10 w-10 text-primary" />
            <span className="text-3xl font-serif font-bold text-primary">WriteFlow</span>
          </div>
          <h1 className="text-2xl font-serif text-foreground mb-2">
            {isSubmitted ? "Check Your Email" : "Forgot Password"}
          </h1>
          <p className="text-muted-foreground">
            {isSubmitted 
              ? "We've sent a password reset link to your email address"
              : "Enter your email to receive a password reset link"
            }
          </p>
        </div>

        {/* Form */}
        <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border p-6 shadow-elegant">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/50"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full btn-literary"
                size="lg"
              >
                Send Reset Link
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-muted-foreground">
                If an account with that email exists, you'll receive a password reset link shortly.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="w-full"
              >
                Try Another Email
              </Button>
            </div>
          )}

          {/* Back to Login */}
          <div className="text-center mt-6 pt-6 border-t border-border">
            <Link 
              to="/login" 
              className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}