import { createUser } from "@/services/users.services";
import { NextApiRequest, NextApiResponse } from "next";
import { hashSync } from "bcrypt";
import { PrimitiveUser } from "@/types/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const user: PrimitiveUser = req.body;
        user.password = hashSync(user.password, 10);
        try {
            const newUser = await createUser(user);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}