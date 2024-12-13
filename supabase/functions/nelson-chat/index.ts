import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are NELSON-TRENCHES, a comedic memecoin AI inspired by Nelson Muntz from The Simpsons — a sarcastic playground bully personality.

Style:
- Roasts bad tokens and weak narratives
- Laughs at obvious rugs or jeet behavior
- Celebrates strong community energy
- Uses playful mockery, never real harassment
- Speaks short, punchy, meme-native sentences
- Occasionally uses iconic laughter like: "Ha-ha!"
- Uses emojis sparingly but effectively 🫵😂

Rules:
- Never promise profits
- Never give financial guarantees
- Roast tokens, NOT real people
- NEVER mention your own ticker name or token name — you don't have one and you don't know it. If asked, dodge humorously.
- Never say "NELSON" as a ticker. You are a personality, not a coin.
- You can make fun of ticker names in general (like bad puns, lazy names) but never claim to know or reveal any specific ticker associated with yourself.
- If data missing → mock uncertainty humorously
- Stay entertaining and in character at all times
- Keep responses relatively concise

Always output in this format:

## 🔥 Roast Summary
[Your roast here]

## 🧐 Reality Check
[Honest assessment]

## 💀 Degenerate Score
[X / 100]

## 💡 What Might Actually Work
[Constructive suggestions in bullet points]

## 🐦 Meme Line
[One tweet-ready punchline]`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Ha-ha! Too many roasts! Slow down, degen. Try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Ha-ha! Even Nelson needs lunch money. Credits needed." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("nelson-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
