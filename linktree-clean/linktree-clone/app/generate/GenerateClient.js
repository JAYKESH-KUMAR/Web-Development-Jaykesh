"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Generate = () => {

  const searchParams = useSearchParams();

  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, setHandle] = useState(searchParams.get("handle") || "");
  const [pic, setPic] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setLinks((links) =>
      links.map((item, i) => (i === index ? { link, linktext } : item))
    );
  };

  const addLink = () => {
    setLinks([...links, { link: "", linktext: "" }]);
  };

  const submitLinks = async () => {

    const res = await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        links,
        handle,
        pic,
        desc,
      }),
    });

    const result = await res.json();

    if (result.success) {
      toast.success(result.message);
      setLinks([{ link: "", linktext: "" }]);
      setPic("");
      setHandle("");
      setDesc("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-[#E9C0E9] min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="flex justify-center items-center flex-col px-4 py-8">

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Create your Bittree
        </h1>

        <input
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          className="p-2 rounded-full mb-4 w-full max-w-xs"
          placeholder="Choose Handle"
        />

        {links.map((item, index) => (

          <div key={index} className="flex flex-col md:flex-row gap-2 mb-2 w-full max-w-xs">

            <input
              value={item.linktext}
              onChange={(e) =>
                handleChange(index, item.link, e.target.value)
              }
              placeholder="Link text"
              className="p-2 rounded-full w-full"
            />

            <input
              value={item.link}
              onChange={(e) =>
                handleChange(index, e.target.value, item.linktext)
              }
              placeholder="Link"
              className="p-2 rounded-full w-full"
            />

          </div>

        ))}

        <button onClick={addLink} className="mt-4 bg-black text-white p-2 rounded-full w-full max-w-xs">
          + Add Link
        </button>

        <input
          value={pic}
          onChange={(e) => setPic(e.target.value)}
          placeholder="Picture URL"
          className="p-2 rounded-full mt-4 w-full max-w-xs"
        />

        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="p-2 rounded-full mt-2 w-full max-w-xs"
        />

        <button
          onClick={submitLinks}
          className="mt-4 bg-black text-white p-3 rounded-full w-full max-w-xs"
        >
          Create your BitTree
        </button>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:flex items-center justify-center">
        <img src="/generate.png" className="max-w-sm" />
      </div>

      <ToastContainer />

    </div>
  );
};

export default Generate;