import { IoIosLock } from "react-icons/io";

export default function VerifyTruePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="shadow-merah bg-merah/50 relative mt-4 flex aspect-square w-80 items-center justify-center self-center overflow-hidden rounded-full shadow-2xl">
        <div className="shadow-merah bg-merah/30 flex aspect-square w-64 items-center justify-center self-center rounded-full shadow-lg">
          <div className="shadow-merah bg-merah/60 flex aspect-square w-48 items-center justify-center self-center rounded-full shadow-lg">
            <IoIosLock className="text-6xl text-white" />
          </div>
        </div>
        {/* Circles for animation */}
        <div className="flex items-center justify-center">
          <div className="animate-expand border-merah absolute inset-0 aspect-square rounded-full border-4 opacity-75"></div>
          <div className="animate-expand animation-delay-1 border-merah absolute inset-0 aspect-square rounded-full border-4 opacity-75"></div>
          <div className="animate-expand animation-delay-2 border-merah absolute inset-0 aspect-square rounded-full border-4 opacity-75"></div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-14">
        <h1 className="text-center text-4xl font-semibold">Danger Detected</h1>
        <p className="text-center">We'll be here until you're safe</p>
      </div>
    </div>
  );
}
