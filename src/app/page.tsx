import { MdMoreHoriz, MdHistory } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import Image from "next/image";

export default function Page() {
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
      <div className="mt-4 flex aspect-square w-80 items-center justify-center self-center rounded-full bg-white shadow-md">
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
