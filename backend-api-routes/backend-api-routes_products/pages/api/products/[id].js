import { getProductById } from "@/services/productServices";

export default function handler(req, res) {
  const { id } = req.query; // destructure the `id` variable from `request.query`
  const product = getProductById(id);

  if (!product) return res.status(404).json({ status: "Product not found" });

  res.status(200).json(product);
}
