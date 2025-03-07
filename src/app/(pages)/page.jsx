import HeaderNav from "@/components/navbar/headerNav";
import NavList from "@/components/navbar/navList";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/footer";
import Image from "next/image";

const Home = () => {
  return (
    <main className="bg-black min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
      <div className="absolute top-0 right-0 p-3 z-20">
        <HeaderNav />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 py-12 lg:py-0 lg:pl-16 lg:pr-0">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-4">
            Daniyal Musadiq
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
            I'm a passionate{" "}
            <span className="text-[#7BFC7C] underline">Web Developer</span> from Pakistan
          </p>

          <NavList />

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <div className="lg:hidden mt-12">
          <Footer />
        </div>
      </div>

      <div className="absolute inset-0 lg:relative lg:w-1/2 opacity-40">
        <div className="relative w-full h-full top-14">
          <Image
            src="/me.jpg"
            alt="Daniyal Musadiq"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 70vw, 50vw"
          />
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-0 left-0 w-full z-20">
        <Footer />
      </div>
    </main>
  );
};

export default Home;