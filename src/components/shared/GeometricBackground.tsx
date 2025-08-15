"use client";

export default function GeometricBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="h-full w-full"
        style={{
          backgroundColor: "#0f0f0f",
          backgroundImage: `repeating-linear-gradient(-45deg,
            rgba(255, 0, 100, 0.2) 0px,
            rgba(255, 0, 100, 0) 2px,
            transparent 2px,
            transparent 25px
          )`,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
