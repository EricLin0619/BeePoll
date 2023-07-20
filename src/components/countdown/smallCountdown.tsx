import { useState, useEffect } from "react";

export default function SmallCountdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    const target = new Date("8/31/2023 23:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const day = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(day);

      const hour = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hour);

      const min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMins(min);

      const sec = Math.floor((difference % (1000 * 60)) / 1000);
      setSecs(sec);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <span className="countdown font-mono text-base ml-auto">
      <span style={{ "--value": days } as any}></span>d
      <span style={{ "--value": hours } as any} className="ml-1"></span>h
      <span style={{ "--value": mins } as any} className="ml-1"></span>m
      <span style={{ "--value": secs } as any} className="ml-1"></span>s
    </span>
  );
}
