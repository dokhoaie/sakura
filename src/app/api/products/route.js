import clientPromise from "../../lib/mongdb";




export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('shopdb');
    const collection = db.collection('products');




    const data = await collection.find({}).toArray();




    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}

// export async function GET(req) {
//   try {
//     const id = req.query.id;
//     if (!id) {
//       return Response.status(400).json({ error: 'id is required'});
//     }
//     const client = await clientPromise;
//     const db = client.db('shopdb');
//     const collection = db.collection.findOne(( _id = new objectId (id) ));
//     if (!product) {
//       return Response.status(404).json({ error: 'Product not found'});
//     }
//     return Response.json({  Products });
//   } catch (error) {
//     return Response.status(500).json({ error: error.message});
//   }   
// }