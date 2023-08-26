import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("authorization");
  let url = req.url;

  //   if (!verify && url.includes("/frameworks")) {
  //     return NextResponse.redirect("http://localhost:3000/login/login");
  //   }

  //   if (verify && url === "http://localhost:3000/") {
  //     return NextResponse.redirect("http://localhost:3000/frameworks/react");
  //   }
}
