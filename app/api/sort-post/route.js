import { NextResponse } from "next/server"

export async function POST(request){
    const res = await request.json()
    const result = await prisma.post.create({
        data:{
            title: res.title,
            content: res.content,
            published: true,
            author: {create:{
                name: 'Mustafa',
            }}
        }
    })
    return NextResponse.json({res})
}