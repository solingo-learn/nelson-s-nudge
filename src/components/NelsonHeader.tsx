import nelsonImg from "@/assets/nelson.png";

export function NelsonHeader() {
  return (
    <div className="flex items-center gap-4 p-4 bg-card border-b-3 border-foreground">
      <div className="w-14 h-14 rounded-full border-3 border-foreground overflow-hidden cartoon-shadow-lg bg-primary animate-bounce-in">
        <img src={nelsonImg} alt="Nelson Trenches" className="w-full h-full object-cover" />
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl font-bangers text-foreground tracking-wide">
          NELSON-TRENCHES
        </h1>
        <p className="text-sm font-comic text-muted-foreground">
          Memecoin Roaster 🫵 • <span className="italic">"Ha-ha!"</span>
        </p>
      </div>
    </div>
  );
}
