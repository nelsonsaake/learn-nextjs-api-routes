import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export default function handler(req: NextApiRequest, res: NextApiResponse){
    res.status(200).json({name: "Blog Api Route"})
}