import { prisma } from "../../../../utils/prisma";
import { NextResponse } from "next/server";


export async function DELETE(req, { params }) {
    try {
        const id = params.id

        await prisma.messages.deleteMany({
            where: {
                chatId: id,
            }
        })

        const res = await prisma.chat.delete({
            where: {
                id,
            }
        })
        return NextResponse.json(res, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "There was an error deleting the chat.", error },
            { status: 500 }
        );

    }
}