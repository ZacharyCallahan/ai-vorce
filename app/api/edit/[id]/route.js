import { NextResponse } from "next/server";
import { prisma } from "../../../../utils/prisma";


export async function PUT(req, { params }) {
    try {
        const id = params.id;
        const body = await req.text();
        ("", id, body);

        const res = await prisma.chat.update({
            where: {
                id: id,
            },
            data: {
                title: body,
            },
        });
        ("", res);
        return NextResponse.json(res, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "There was an error updating the chat.", error },
            { status: 500 }
        );
    }

}
