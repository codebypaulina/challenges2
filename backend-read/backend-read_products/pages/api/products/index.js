// import { products } from "../../../lib/products";
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  console.log("CONNECTING to database ..");
  await dbConnect();
  console.log("CONNECTED to database!");

  if (request.method === "GET") {
    const products = await Product.find();

    console.log("products: ", products);

    response.status(200).json(products);
  }
}
