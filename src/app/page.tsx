"use client";

import { Button } from "@/components/ui/button";
import { edtechData, socialMediaData, workedWithData } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [studentCounter, setStudentCounter] = useState(7500);
  useEffect(() => {
    const intervalID = setInterval(() => {
      if (studentCounter > 1300000) {
        clearInterval(intervalID);
        return;
      }
      setStudentCounter(studentCounter + 9865);
    }, 200);
    return () => {
      clearInterval(intervalID);
    };
  }, [studentCounter]);

  return (
    <main className="">
      {/* main section */}
      <section className="w-full h-[800px] bg-[url('/assets/mainBg.png')] bg-center bg-cover">
        <div className="float-end p-5 flex items-center gap-5">
          <Link href={"#socialMedia"}>
            <Button variant={"secondary"} className="font-semibold">
              Connect
            </Button>
          </Link>
          <Link href={""}>
            <Button variant={"secondary"} className="font-semibold">
              Blogs
            </Button>
          </Link>
        </div>
      </section>

      {/* teaching section */}
      <section className="p-10 bg-gradient-to-r from-gray-600 to-gray-700">
        <h1 className="text-3xl font-semibold text-center text-white">
          Loves Tech and Teaching 🧑‍💻
        </h1>
      </section>

      <section className="flex gap-10 py-20 space-y-10 px-5 md:px-10 bg-gray-50">
        <div className="w-[70%] space-y-10">
          {/* experience with section */}
          <div className="flex flex-col gap-5">
            <div className="space-y-5">
              <h1 className="text-3xl font-semibold">
                13+ Years of Experience
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-5 justify-center">
              {workedWithData.length &&
                workedWithData.map((company, index) => {
                  return (
                    <div
                      key={index}
                      className="relative w-40 h-14 bg-white rounded-md shadow-md"
                    >
                      <Image
                        className="object-cover px-5 py-2"
                        src={company?.image}
                        fill
                        alt={company.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>

          {/* worked with section */}
          <div className="flex flex-col gap-5">
            <div className="space-y-5">
              <h1 className="text-3xl font-semibold">
                {studentCounter}+ Students Impacted
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-5 justify-center">
              {edtechData.length &&
                edtechData.map((company, index) => {
                  return (
                    <div
                      key={index}
                      className="relative w-40 h-14 bg-white rounded-md shadow-md"
                    >
                      <Image
                        className="object-contain px-5 py-2"
                        src={company?.image}
                        fill
                        alt={company.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* tools and technology */}
        <div className="w-[30%] self-start space-y-5">
          <h1 className="text-3xl font-semibold">Tech Stack</h1>
          <ul className="space-y-5">
            <li className="px-4 py-2 rounded-md shadow-md font-medium text-lg bg-white">
              Full Stack Development
            </li>
            <li className="px-4 py-2 rounded-md shadow-md font-medium text-lg bg-white">
              Data Science
            </li>
            <li className="px-4 py-2 rounded-md shadow-md font-medium text-lg bg-white">
              System Design
            </li>
            <li className="px-4 py-2 rounded-md shadow-md font-medium text-lg bg-white">
              Cyber Security
            </li>
            <li className="px-4 py-2 rounded-md shadow-md font-medium text-lg bg-white">
              Dev Ops
            </li>
          </ul>
        </div>
      </section>

      {/* social media section */}
      <section className="py-10 space-y-10 px-5 md:px-10 bg-gray-50">
        <h1 className="text-3xl text-center font-semibold">Find Vishwa on</h1>

        <div
          id="socialMedia"
          className="flex flex-wrap items-center gap-14 justify-center"
        >
          {socialMediaData.length &&
            socialMediaData.map((media, index) => {
              return (
                <Link key={index} href={"#"}>
                  <div className="relative w-10 h-10 rounded-md shadow-md">
                    <Image
                      src={media?.image}
                      alt={media.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
              );
            })}
        </div>
      </section>
    </main>
  );
}
