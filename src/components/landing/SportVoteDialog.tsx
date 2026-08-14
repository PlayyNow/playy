import { useState } from "react";
import { Check, Loader2, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const suggestions = [
  "Volleyball",
  "Running",
  "Cricket",
  "Swimming",
  "Cycling",
  "Table Tennis",
];

interface SportVoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SportVoteDialog = ({ open, onOpenChange }: SportVoteDialogProps) => {
  const [sport, setSport] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleOpenChange = (next: boolean) => {
    onOpenChange(next);
    if (!next) {
      setTimeout(() => {
        setSport("");
        setDone(false);
        setLoading(false);
      }, 200);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = sport.trim();
    if (!value) return;

    setLoading(true);
    const { error } = await supabase.from("sport_votes").insert({ sport: value });
    setLoading(false);

    if (error) {
      toast({
        title: "Something went wrong",
        description: "Couldn't send your vote. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setDone(true);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {done ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-7 w-7 text-primary" />
            </div>
            <DialogTitle className="mb-2 text-xl">Vote counted</DialogTitle>
            <DialogDescription className="mb-6">
              Thanks — we'll let the community decide what lands next.
            </DialogDescription>
            <Button className="w-full" onClick={() => handleOpenChange(false)}>
              Done
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Plus className="h-5 w-5 text-primary" />
              </div>
              <DialogTitle className="text-xl">What should we add next?</DialogTitle>
              <DialogDescription>
                Tell us the sport you want on Playy. One tap, no forms to fill.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSport(s)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                      sport === s
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <Input
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                placeholder="Or type any sport…"
                maxLength={60}
                autoFocus
              />

              <Button type="submit" className="w-full" disabled={!sport.trim() || loading}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Submit vote"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SportVoteDialog;