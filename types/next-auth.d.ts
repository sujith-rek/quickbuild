import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    id: string;
    name: string;
    email: string;
    phone: string;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    email: string;
    phone: string;
  }
}