
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { genAIProjectDescriptionAssistant } from "@/ai/flows/gen-ai-description-assistant-flow";
import { useToast } from "@/hooks/use-toast";

export function AIDescriptionTool() {
  const [notes, setNotes] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!notes.trim()) return;
    setIsLoading(true);
    try {
      const output = await genAIProjectDescriptionAssistant({ projectNotes: notes });
      setResult(output.description);
    } catch (error) {
      console.error("Failed to generate description:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate description. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="glass-card border-none shadow-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent" />
          Project Description Assistant
        </CardTitle>
        <CardDescription>
          Paste your raw project notes below and let AI craft a professional portfolio summary.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Enter project notes (e.g., 'Built an animal detector using YOLOv8 and Arduino for highway safety...')"
          className="bg-white/5 border-white/10 min-h-[120px] focus:ring-accent"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <Button 
          onClick={handleGenerate} 
          disabled={isLoading || !notes.trim()}
          className="w-full bg-accent hover:bg-accent/80 text-white font-bold"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
          ) : (
            <Sparkles className="w-4 h-4 mr-2" />
          )}
          Generate Description
        </Button>
        
        {result && (
          <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 relative group animate-in fade-in slide-in-from-bottom-2">
            <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
              {result}
            </p>
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={copyToClipboard}
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
