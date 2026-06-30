"use client";

import { useEffect, useState } from "react";

// Cycles through phrases with a typing / deleting effect
function Typewriter({
  phrases = [],
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1600,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // blinking cursor
  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (phrases.length === 0) return;
    const current = phrases[index % phrases.length];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, phrases, typingSpeed, deletingSpeed, pause]);

  const text = phrases.length ? phrases[index % phrases.length].substring(0, subIndex) : "";

  return (
    <span className={className}>
      {text}
      <span className={`${blink ? "opacity-100" : "opacity-0"} text-teal-600`}>|</span>
    </span>
  );
}

export default Typewriter;
