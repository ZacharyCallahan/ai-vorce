import { mongooseConnect } from "@/utils/mongoose";
export async function GET() {
    await mongooseConnect()
    return new Response("Hello World!");
}

