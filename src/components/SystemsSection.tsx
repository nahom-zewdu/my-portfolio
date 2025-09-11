"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Globe, CheckCircle } from "lucide-react";
import { projects, toSlug } from "@/data/projects";

type ProjectLink = { label: string; url: string };
type Project = {
  title: string;
  overview: string;
  stack: string[];
  decisions: string[];
  links?: ProjectLink[];
  diagramUrl?: string;
};

// Projects data moved to src/data/projects.ts

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function SystemsSection() {
  return (
    <section id="projects" className="relative z-0 max-w-5xl mx-auto py-20 px-4">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((proj) => (
          <motion.div key={proj.title} variants={cardVariants}>
            <Card className="rounded-xl h-full border bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{proj.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{proj.overview}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {proj.stack.map((s) => (
                    <div
                      key={s}
                      className="px-3 h-8 rounded-md bg-accent/40 text-foreground/80 flex items-center justify-center text-xs"
                      title={s}
                    >
                      {s}
                    </div>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="px-0 text-primary hover:text-primary/90 hover:bg-transparent inline-flex items-center gap-2">
                      View More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-xl md:max-w-2xl bg-background/75 backdrop-blur-xl border-border/50 shadow-xl p-0 overflow-hidden">
                    <div className="h-[80vh] grid grid-rows-[auto,1fr,auto]">
                      <div className="px-6 pt-6">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">{proj.title}</DialogTitle>
                          <DialogDescription className="text-muted-foreground">{proj.overview}</DialogDescription>
                        </DialogHeader>
                      </div>

                      <div className="overflow-y-auto px-6 pb-4 mt-2 grid gap-6">
                        <div className="aspect-video w-full rounded-xl border bg-muted/40 shadow-sm flex items-center justify-center text-sm text-muted-foreground">
                          Architecture Diagram
                        </div>

                        <div className="space-y-2">
                          {proj.decisions.slice(0, 6).map((d, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 mt-0.5 text-primary/80" />
                              <span className="text-foreground/90">{d}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {proj.stack.map((s) => (
                            <div
                              key={s}
                              className="px-3 h-9 rounded-md bg-accent/40 text-foreground/80 flex items-center justify-center text-xs transition shadow-xs ring-1 ring-transparent hover:ring-ring/50 hover:shadow-md"
                            >
                              {s}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="row-start-3 w-full border-t bg-background/90 backdrop-blur px-6 py-4">
                        <div className="flex items-center justify-between gap-3">
                          {proj.links && proj.links.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {proj.links
                                .slice()
                                .sort((a, b) => {
                                  const order = (l: string) =>
                                    l.toLowerCase().includes("git") ? 0 : l.toLowerCase().includes("docs") ? 1 : 2;
                                  return order(a.label) - order(b.label);
                                })
                                .map((link) => {
                                  const label = link.label.toLowerCase();
                                  const isGit = label.includes("git");
                                  const isDocs = label.includes("doc");
                                  const Icon = isGit ? Github : label.includes("live") ? Globe : FileText;
                                  return (
                                    <Button
                                      key={link.url}
                                      asChild
                                      variant={isGit ? "default" : "outline"}
                                      className="h-9"
                                    >
                                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                                        <Icon className="w-4 h-4" /> {isGit ? "GitHub" : isDocs ? "Docs" : "Live Demo"}
                                      </a>
                                    </Button>
                                  );
                                })}
                            </div>
                          )}
                          <a
                            href={`/projects/${toSlug(proj.title)}`}
                            className="ml-auto text-xs text-muted-foreground hover:text-primary transition-colors"
                          >
                            Read Full Case Study →
                          </a>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 