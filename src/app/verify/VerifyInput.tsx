"use client";
import React, { useRef } from "react";

export default function VerifyInput() {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    if (value.length === 1) {
      if (index < inputRefs.current.length - 1) {
        inputRefs?.current[index + 1]?.focus();
      }
    }
  };

  return (
    <div>
      <div className="mt-6 flex justify-center gap-2">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="aspect-square w-12 rounded-lg border border-slate-300 text-center  font-bold focus:outline-none"
              onChange={(event) => handleChange(index, event)}
              ref={(element) => {
                if (element) inputRefs.current[index] = element;
              }}
            />
          ))}
      </div>

      <button className="bg-secondary mt-6 w-full rounded-lg py-2 text-white">
        Verify
      </button>
    </div>
  );
}
