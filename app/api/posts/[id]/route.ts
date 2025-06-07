import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function DELETE(req: Request, {params}: {params: {id: string}}) {
    const id = params.id;

    const type = req.headers.get('Content-Type') || 'application/json';

    if (!type.includes('json')) {
      return NextResponse.json(
        { error: 'Unsupported Media Type' },
        { status: 415 }
      );
    }

    const cookiesList = await cookies();
    const coo2 = cookiesList.get('Cookie_2')?.value;
    
    if (!coo2) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }


    return NextResponse.json(
  { success: true, message: 'Post deleted', id, type, coo2 },
);
}