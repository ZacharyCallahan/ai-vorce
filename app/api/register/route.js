
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "../../../utils/prisma";

export async function POST(req) {
    try {
        const { name, email, password } = (await req.json())
        const hashed_password = await hash(password, 12);
        console.log(name, email, password)
        const user = await prisma.user.create({
            data: {
                name,
                email: email.toLowerCase(),
                password: hashed_password,
            },
        });
        console.log(user)

        return NextResponse.json({
            user: {
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: error.message,
            }),
            { status: 500 }
        );
    }
}
