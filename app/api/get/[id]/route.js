import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../utils/prisma";

export async function GET(req, { params }) {
    const id = params.id
    try {
        const res = await prisma.chat.findUnique(
            {
                where: {
                    id
                },
                include: {
                    messages: true
                }
            }
        )
            (res)
        return NextResponse.json(res, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "There was an error getting the user", error },
            { status: 500 }
        );
    }
}