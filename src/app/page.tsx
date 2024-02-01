import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div className="text-center space-y-5 flex items-center flex-col">
        <div className="bg-gray-900 rounded-full relative w-fit">
          <Image
            className=""
            width={400}
            height={300}
            src={"/assets/profile.png"}
            alt="profile"
          />
        </div>

        <div className="space-y-2">
          <p className="text-4xl font-bold">Vishwa Mohan</p>
          <p className="font-medium">
            Website is under construction, will be live soon{" "}
            <span className="text-teal-500">:)</span>
          </p>
        </div>
      </div>
    </main>
  );
}
