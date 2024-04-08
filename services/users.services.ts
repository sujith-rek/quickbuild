import db from "@/lib/prisma";
import { PrimitiveUser } from "@/types/types";

export async function createUser(user: PrimitiveUser) {
    return await db.user.create({ data: user });
}

export async function getUserByEmail(email: string) {
    return await db.user.findFirst({ where: { email } });
}

export async function getUserById(id: number) {
    return await db.user.findFirst({ where: { id } });
}

export async function fetchCredentials(email: string) {
    return await db.user.findFirst({
        where: { email },
    });
}
