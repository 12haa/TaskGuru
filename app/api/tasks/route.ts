import {NextResponse} from "next/server";
import {auth} from "@clerk/nextjs";
import prisma from "@/app/utils/connectToDb";

export async function POST(req: Request) {
    try {
        const {userId} = auth()
        if(!userId){
            return NextResponse.json({error: "Unauthorized", status: 401});
        }

        const {title , description , date , completed , important} = await req.json();

        if(!title ||!description ||!date ) {
            return NextResponse.json({error: "Missing Required Fields", status: 400});
        }

        if (title.length<3){
            return NextResponse.json({error: "Title must be at least 3 characters", status: 400});

        }

        const task = await prisma.task.create({
            data: {
                title,
                description,
                date,
                isCompleted: completed,
                isImportant: important,
                userId
            }
        });
        return NextResponse.json(task);



    } catch (error) {
        console.log(error, "Error creating Task");
        return NextResponse.json({error: "Error Creating Task", status: 500});
    }
}

export async function GET(req: Request) {
    try {

    } catch (error) {
        console.log(error, "Error Fetching Task");
        return NextResponse.json({error: "Error Fetching Task", status: 500});
    }
}

export async function PUT(req: Request) {
    try {

    } catch (error) {
        console.log(error, "Error Updating Task");
        return NextResponse.json({error: "Error Updating Task", status: 500});
    }
}

export async function DELETE(req: Request) {
    try {

    } catch (error) {
        console.log(error, "Error Deleting Task");
        return NextResponse.json({error: "Error Deleting Task", status: 500});
    }
}













