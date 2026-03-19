"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")

  const createTree = () => {

    const handle = text.trim()   

    if (!handle) {
      alert("Please enter a handle")
      return
    }

    router.push(`/generate?handle=${handle}`)
  }

  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-1 md:grid-cols-2 pt-32 px-5">

        <div className="flex justify-center flex-col gap-3 text-center md:text-left">

          <p className="text-yellow-300 font-bold text-4xl md:text-7xl">
            Everything you
          </p>

          <p className="text-yellow-300 font-bold text-4xl md:text-7xl">
            are. In one,
          </p>

          <p className="text-yellow-300 font-bold text-4xl md:text-7xl">
            simple link in bio.
          </p>

          <p className="text-yellow-300 text-sm md:text-xl my-4">
            Join 50M+ people using Linktree...
          </p>

          <div className="flex flex-col md:flex-row gap-3 items-center md:items-start">

            <input
              value={text}
              onChange={(e)=> {
                console.log(e.target.value)  // ✅ DEBUG (check console)
                setText(e.target.value)
              }}
              className="w-full md:w-auto px-3 py-2 rounded-md text-black" // ✅ FIX: text visible
              placeholder="Enter your Handle"
            />

            <button 
              onClick={createTree}
              className="bg-pink-300 w-full md:w-auto px-4 py-2 rounded-full">
              Claim your Bittree
            </button>

          </div>

        </div>

        <div className="flex items-center justify-center mt-10 md:mt-0">
          <img className="w-64 md:w-full" src="/home.png" />
        </div>

      </section>
    </main>
  );
}