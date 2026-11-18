import Link from "next/link";
import { ArrowRight, User, GraduationCap, Heart, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center space-y-6 max-w-2xl mx-auto">
      <div className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Hi, I&apos;m Jim Delos Santos
        </h1>
        <p className="text-lg text-muted-foreground">
          IT Student &amp; Aspiring Full-Stack Developer passionate about building modern web applications with Next.js and Tailwind CSS.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          href="/about"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
        >
          About Me <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <Mail className="mr-2 h-4 w-4" /> Contact Me
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-8">
        <Link
          href="/about"
          className="p-4 border rounded-lg hover:bg-accent transition-colors text-left space-y-1"
        >
          <User className="h-5 w-5 text-primary mb-2" />
          <h3 className="font-semibold">About</h3>
          <p className="text-xs text-muted-foreground">My story &amp; technical skills</p>
        </Link>

        <Link
          href="/education"
          className="p-4 border rounded-lg hover:bg-accent transition-colors text-left space-y-1"
        >
          <GraduationCap className="h-5 w-5 text-primary mb-2" />
          <h3 className="font-semibold">Education</h3>
          <p className="text-xs text-muted-foreground">Academic background &amp; awards</p>
        </Link>

        <Link
          href="/hobbies"
          className="p-4 border rounded-lg hover:bg-accent transition-colors text-left space-y-1"
        >
          <Heart className="h-5 w-5 text-primary mb-2" />
          <h3 className="font-semibold">Hobbies</h3>
          <p className="text-xs text-muted-foreground">Interests outside of coding</p>
        </Link>
      </div>
    </div>
  );
}