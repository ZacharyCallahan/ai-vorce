import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../../utils/auth";
import { prisma } from "../../../../utils/prisma";

export async function POST(req) {
    const session = await getServerSession(authOptions)
    const user = session.user.email;

    try {
        const body = await req.json();

        const userData = await prisma.user.findUnique({
            where: {
                email: user,
            },
        });

        const res = await prisma.therapistQuestion.create(
            {
                data: {
                    answers: body.answers,
                    user: {
                        connect: {
                            id: userData.id
                        }
                    }
                }
            }
        )
        return NextResponse.json(res, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            message: "There was an error submitting the answers."
        }, { status: 500 })
    }
}
