import dbConnect from "@/utils/dbConnect";

dbConnect();

export default async = (req, res) => {
  res.json({ test: "test" });
  res.status(200).json({ test: "John test" });
};
