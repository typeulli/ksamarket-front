import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
    const accessToken = req.cookies.get("token")?.value;

    if (!accessToken) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (req.nextUrl.pathname == "/app") {
        return NextResponse.redirect(new URL("/app/home", req.url));
    }
    return NextResponse.next();
}

// 보호할 경로
export const config = {
    matcher: ["/app/:path*", "/app"],
};
