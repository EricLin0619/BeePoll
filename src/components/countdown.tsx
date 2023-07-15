export default function Countdown() {
  return (
    <span className="countdown font-mono text-2xl">
      <span style={{ "--value": 10 }}></span>:
      <span style={{ "--value": 24 }}></span>:
      <span style={{ "--value": 28 }}></span>
    </span>
  );
}
