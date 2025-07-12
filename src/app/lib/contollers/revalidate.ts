import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

export async function revalidatePost(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");

  if (path) {
    revalidatePath(path);
    return NextResponse.json({
      revalidated: true,
      path,
      timestamp: new Date().toISOString(),
    });
  }

  return NextResponse.json(
    { message: "Path parameter is required" },
    { status: 400 }
  );
}
