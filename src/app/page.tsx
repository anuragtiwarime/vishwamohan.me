import Navbar from "@/components/navbar";
import { featuredCompanyData, workedWithData } from "@/utils/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      {/* main section */}
      <section className="h-[90vh] flex items-center md:py-5 md:px-10 px-5 py-2 bg-[url('/assets/mainBg.jpg')] bg-center bg-cover text-black">
        <div className="w-96 space-y-3">
          <h4 className="text-2xl font-medium">Lorem ipsum dolor sit amet.</h4>
          <h1 className="text-6xl font-bold">Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            cumque officia temporibus, accusamus nulla recusandae laudantium quo
            consectetur possimus deleniti atque ratione id quisquam cum aut
            quibusdam. Debitis, placeat nesciunt?
          </p>
        </div>
      </section>

      {/* featured on section */}
      <section className="my-10 space-y-10 px-5 md:px-10">
        <div className="space-y-5">
          <h1 className="text-3xl text-center font-semibold">Featured on</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            obcaecati natus consectetur consequuntur maxime deleniti sapiente
            deserunt, nostrum magni commodi aspernatur vitae nulla, iure
            voluptates?
          </p>
        </div>
        <div className="flex items-center gap-20 justify-center">
          {featuredCompanyData.length &&
            featuredCompanyData.map((company, index) => {
              return (
                <div
                  key={index}
                  className="relative w-40 h-40 bg-white rounded-full shadow-lg shadow-gray-700"
                >
                  <Image
                    className="object-contain p-2"
                    src={company?.image}
                    fill
                    alt={company.name}
                  />
                </div>
              );
            })}
        </div>
      </section>

      {/* worked with section */}
      <section className="my-10 space-y-10 px-5 md:px-10">
        <div className="space-y-5">
          <h1 className="text-3xl text-center font-semibold">Worked with</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            obcaecati natus consectetur consequuntur maxime deleniti sapiente
            deserunt, nostrum magni commodi aspernatur vitae nulla, iure
            voluptates?
          </p>
        </div>
        <div className="flex items-center gap-14 justify-center">
          {workedWithData.length &&
            workedWithData.map((company, index) => {
              return (
                <div
                  key={index}
                  className="relative w-40 h-14 bg-white rounded-md shadow-md shadow-gray-700"
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
      </section>
    </main>
  );
}
