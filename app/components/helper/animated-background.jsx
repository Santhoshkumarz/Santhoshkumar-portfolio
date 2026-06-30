// Lightweight static light background — pure CSS, no JS animation (smooth, no lag)
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#f7f8fd]">
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e22350a 1px, transparent 1px), linear-gradient(to bottom, #1e22350a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #000 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #000 50%, transparent 100%)",
        }}
      />
      {/* soft accent glows (static) */}
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-violet-300/30 blur-[100px]" />
      <div className="absolute top-1/4 -right-24 h-[26rem] w-[26rem] rounded-full bg-pink-300/25 blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-teal-200/25 blur-[100px]" />
    </div>
  );
}

export default AnimatedBackground;
