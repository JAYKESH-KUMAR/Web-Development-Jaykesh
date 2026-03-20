import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {

  
  const { handle } = await params;

  if (!handle) return notFound();

  const client = await clientPromise;

  const db = client.db();  
  const collection = db.collection("links");

  const item = await collection.findOne({
    handle: { $regex: `^${handle}$`, $options: "i" }
  });

  if (!item) return notFound();

  return (
    <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10 px-4">

      <div className="flex flex-col items-center gap-4 w-full max-w-md bg-white p-6 rounded-xl shadow-lg">

        <img
          className="rounded-full w-24 h-24 object-cover"
          src={item.pic}
          alt="profile"
        />

        <span className="font-bold text-xl">@{item.handle}</span>

        <span className="text-center text-sm">{item.desc}</span>

        <div className="w-full">

          {item.links?.map((link, index) => (
            <Link key={index} href={link.link} target="_blank">
              <div className="bg-purple-100 py-3 px-4 w-full flex justify-center rounded-md my-2 hover:bg-purple-200 transition">
                {link.linktext}
              </div>
            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}