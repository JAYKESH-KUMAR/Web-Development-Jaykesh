import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-[calc(100vh-64px)]">
      <section className="grid md:grid-cols-2 grid-cols-1 items-center max-w-7xl mx-auto px-6 py-16">

        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className={`text-4xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </h1>

          <p className="text-gray-700 max-w-lg">
            We are the most straightforward URL Shortener in the world. 
            Most URL shorteners track you or ask you to log in. 
            We respect your privacy and provide a simple and fast way 
            to shorten your URLs.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="/shorten">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-bold shadow">
                Try Now
              </button>
            </Link>

            <a
              href="https://github.com/JAYKESH-KUMAR/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg font-bold shadow">
                GitHub
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[300px] md:h-[400px] mt-10 md:mt-0">
          <Image
            src="/vector.jpg"
            alt="URL shortener illustration"
            fill
            className="object-contain mix-blend-darken"
          />
        </div>

      </section>
    </main>
  );
}