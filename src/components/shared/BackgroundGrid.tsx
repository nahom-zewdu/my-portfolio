export default function BackgroundGrid() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(180,132,40,0.12),transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(120,113,108,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,113,108,0.35)_1px,transparent_1px)] [background-size:32px_32px]" />
    </div>
  );
}
