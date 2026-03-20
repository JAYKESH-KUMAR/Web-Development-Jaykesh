import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {

    const body = await request.json();
    console.log("BODY:", body); // 👈 DEBUG

    const client = await clientPromise;
    const db = client.db("bittree");
    const collection = db.collection("links");

    const doc = await collection.findOne({ handle: body.handle });

    if (doc) {
      return Response.json({
        success: false,
        message: "This Bittree already exists!",
      });
    }

    const result = await collection.insertOne(body);

    return Response.json({
      success: true,
      message: "Your Bittree has been generated!",
      result: result,
    });

  } catch (error) {

    console.log("ERROR:", error); // 👈 IMPORTANT

    return Response.json({
      success: false,
      message: "Server error",
    });

  }
}