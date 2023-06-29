import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../../../utils/auth";
import { prisma } from "../../../../../utils/prisma";


export async function POST(req, { params }) {
    const chatId = params.id
    const session = await getServerSession(authOptions)
    const user = session.user;
    try {
        const body = await req.text()
        const message = JSON.parse(body)
        console.log(message)

        const res = await prisma.messages.create(
            {
                data: {
                    userMessage: message.user,
                    botMessage: message.bot,
                    chat: { connect: { id: chatId } }
                }
            }
        )
        return NextResponse.json(res, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            message: "There was an error creating the messages."
        }, { status: 500 })
    }
}
