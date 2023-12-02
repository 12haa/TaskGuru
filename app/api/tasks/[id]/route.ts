import { NextResponse } from "next/server";

import { auth } from "@clerk/nextjs";
import prisma from "../../../utils/connectToDb";

export async function DELETE(
  res: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({
        err: "Unauthorized To Delete Task",
        status: 401,
      });
    }
    const task = await prisma.task.delete({
      where: {
        id,
      },
    });
  } catch (err) {
    return NextResponse.json({ err: "Error Deleting Your Task", status: 500 });
  }
}
