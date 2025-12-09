import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Tech Education in Ghana",
      excerpt: "Exploring how digital skills training is transforming the lives of young Ghanaians and creating opportunities in the tech industry.",
      author: "Think Tech Team",
      date: "February 28, 2025",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    },
    {
      id: 2,
      title: "Building Inclusive Technology Solutions",
      excerpt: "How we're ensuring that people with disabilities have equal access to technology education and opportunities.",
      author: "Sarah Mensah",
      date: "February 15, 2025",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    },
    {
      id: 3,
      title: "Success Story: From Beginner to Web Developer",
      excerpt: "Meet Kwame, one of our graduates who landed his dream job as a web developer just 6 months after completing our program.",
      author: "Think Tech Team",
      date: "February 1, 2025",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Blog & News</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Stay updated with the latest news, stories, and insights from Think Tech Initiative.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-foreground hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
