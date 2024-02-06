import Navbar from "@/components/navbar";

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
    </main>
  );
}
