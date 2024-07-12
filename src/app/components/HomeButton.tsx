"use client";
import { MdMoreHoriz, MdHistory } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import Image from "next/image";
import { useState } from "react";

interface SafeProps {
  setSafe: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home() {
  const [safe, setSafe] = useState(true);

  return safe ? <Safe setSafe={setSafe} /> : <Danger setSafe={setSafe} />;
}

function Danger({ setSafe }: SafeProps) {
  return (
    <div className="bg-ijo-muda/50 flex min-h-screen items-center justify-center">
      <div
        onClick={() => setSafe(true)}
        className="shadow-ijo-muda relative mt-4 flex aspect-square w-80 items-center justify-center self-center overflow-hidden rounded-full bg-white shadow-2xl"
      >
        <div className="shadow-ijo-muda flex aspect-square w-64 items-center justify-center self-center rounded-full bg-white shadow-lg">
          <div className="shadow-ijo-muda flex aspect-square w-48 items-center justify-center self-center rounded-full bg-white shadow-lg">
            <p>
              <strong>Stay Safe</strong>
            </p>
          </div>
        </div>
        {/* Circles for animation */}
        <div className="flex items-center justify-center">
          <div className="animate-expand border-ijo-muda absolute inset-0 aspect-square rounded-full border-4 opacity-75"></div>
          <div className="animate-expand animation-delay-1 border-ijo-muda absolute inset-0 aspect-square rounded-full border-4 opacity-75"></div>
          <div className="animate-expand animation-delay-2 border-ijo-muda absolute inset-0 aspect-square rounded-full border-4 opacity-75"></div>
        </div>
      </div>
    </div>
  );
}

function Safe({ setSafe }: SafeProps) {
  return (
    <div className="flex min-h-screen flex-col gap-8 bg-[url('/start-left.svg')] bg-no-repeat px-[10%] py-16">
      <div className="flex justify-between">
        <div className="border-biru w-fit rounded-full border bg-white p-3 shadow-md">
          <MdMoreHoriz className="text-2xl" />
        </div>
        <div className="border-biru w-fit rounded-full border bg-white p-3 shadow-md">
          <CgProfile className="text-2xl" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="border-biru flex w-fit gap-4 rounded-full border bg-white p-3 shadow-md">
          <CiSettings className="text-2xl" />
          <p>Settings</p>
        </div>
        <div className="border-biru w-fit rounded-full border bg-white p-3 shadow-md">
          <Image
            src={"/band-outline.svg"}
            alt="My Band"
            width={28}
            height={25}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="border-biru flex w-fit gap-4 rounded-full border bg-white p-3 shadow-md">
          <MdHistory className="text-2xl" />
          <p>History</p>
        </div>
      </div>

      {/* Button Section */}
      <div
        onClick={() => setSafe(false)}
        className="mt-4 flex aspect-square w-80 items-center justify-center self-center rounded-full bg-white shadow-md"
      >
        <div className="shadow-biru flex aspect-square w-48 items-center justify-center self-center rounded-full bg-white shadow-lg">
          <p>
            Hold to <strong>Start</strong>
          </p>
        </div>
      </div>

      {/* Foot Section */}
      <div className="flex items-center justify-end gap-2">
        <div className="border-secondary shadow-secondary w-fit rounded-lg border px-4 py-2 shadow-sm">
          <p>
            Hi, <strong>Gibeh</strong> 👋
          </p>
        </div>

        <Image src={"/chat-button.svg"} width={60} height={60} alt="chat-bot" />
      </div>
    </div>
  );
}
