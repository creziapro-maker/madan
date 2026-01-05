import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Shield, Code, ArrowRight, PlayCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>Now with Gemini 1.5 Pro & Llama 3.1</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Generate Production-Ready <br />
            <span className="text-blue-500">Flutter Apps</span> with AI
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            From idea to downloadable code in minutes. Clean Architecture, Riverpod state management, and Firebase integration—all built in.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold">
                Start Building for Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold group">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Zap className="h-6 w-6 text-yellow-500" />}
          title="Instant Generation"
          description="Transform your app idea into a complete multi-file project structure in under 3 minutes."
        />
        <FeatureCard 
          icon={<Code className="h-6 w-6 text-blue-500" />}
          title="Clean Architecture"
          description="Scalable, testable code following industry best practices and Riverpod state management."
        />
        <FeatureCard 
          icon={<Shield className="h-6 w-6 text-green-500" />}
          title="Production Ready"
          description="Firebase Auth, Firestore, and Storage pre-configured with secure rules and schemas."
        />
      </section>

      {/* Social Proof/Stats */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-4xl font-bold text-white mb-2">10k+</div>
            <div className="text-sm text-slate-500 uppercase tracking-widest">Apps Built</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-sm text-slate-500 uppercase tracking-widest">Build Success</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm text-slate-500 uppercase tracking-widest">AI Availability</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">5.0</div>
            <div className="text-sm text-slate-500 uppercase tracking-widest">User Rating</div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all group">
      <div className="mb-4 p-3 rounded-xl bg-slate-950 w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
