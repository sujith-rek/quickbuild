import { NextApiRequest, NextApiResponse } from "next";
import { withSessionAPI } from "@/lib/auth";

export default withSessionAPI(handler);

async function handler(req: NextApiRequest, res: NextApiResponse, user: any) {

    if (req.method === "GET") {
        res.status(200).json({ user: user });
    }
}