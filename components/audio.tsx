"use client"

import { useEffect, useRef } from "react";



export default function AudioInput({ autoPlay="auto" }) {
  const audioRef: any = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error: any) => console.error(error));
      audioRef.current.volume = 0.02;
    }
  }, [audioRef]);

  

  return (
    <div>
      <audio ref={audioRef} preload={autoPlay}>
        <source src="/audio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
