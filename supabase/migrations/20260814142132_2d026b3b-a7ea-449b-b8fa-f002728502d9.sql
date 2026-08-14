CREATE TABLE public.sport_votes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  sport TEXT NOT NULL CHECK (char_length(sport) BETWEEN 1 AND 60),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT INSERT ON public.sport_votes TO anon, authenticated;
GRANT ALL ON public.sport_votes TO service_role;
ALTER TABLE public.sport_votes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a sport vote" ON public.sport_votes FOR INSERT TO anon, authenticated WITH CHECK (true);