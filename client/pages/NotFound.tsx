import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <h1 className="text-9xl font-bold text-primary/20">404</h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Page not found</h2>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>
        <Button asChild className="rounded-full">
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
