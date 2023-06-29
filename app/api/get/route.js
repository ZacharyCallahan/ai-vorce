import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../utils/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../utils/auth";

export async function GET(req) {
    const session = await getServerSession(authOptions)
    const email = session.user.email;
    try {
        const res = await prisma.user.findUnique(
            {
                where: {
                    email
                },
                include: {
                    chat: {
                        include: {
                            messages: true
                        }
                    }
                }
            }
        )
        return NextResponse.json(res, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "There was an error getting the user", error },
            { status: 500 }
        );
    }
}