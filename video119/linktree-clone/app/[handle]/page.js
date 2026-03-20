import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {

  
  const { handle } = await params;

  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("links");

  
  const item = await collection.findOne({
    handle: { $regex: `^${handle}$`, $options: "i" }
  });

  if (!item) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">

      <div className="flex flex-col items-center gap-4">

        <img className="rounded-full w-24" src={item.pic} />

        <span className="font-bold text-xl">@{item.handle}</span>

        <span className="w-80 text-center">{item.desc}</span>

        <div>

          
          
          {item.links.map((link, index) => (
            <Link key={index} href={link.link}>

              <div className="bg-purple-100 py-4 shadow-lg px-6 min-w-96 flex justify-center rounded-md my-3">

                {link.linktext}

              </div>

            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}