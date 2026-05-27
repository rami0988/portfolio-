export default function Particle({ style }) {
  return (
    <div style={{
      position: "absolute",
      borderRadius: "50%",
      background: `rgba(0,212,255,${Math.random() * 0.4 + 0.1})`,
      animation: `float ${Math.random() * 10 + 8}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 5}s`,
      ...style,
    }} />
  );
}
