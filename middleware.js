import { NextResponse } from "next/server";

export function middleware(req){
     console.log("middleware File",req.nextUrl)
     return NextResponse.rewrite(new URL('/dashboard',req.nextUrl))



     //Eample funciton to validate auth
     
}

export const config = {
    matcher : ["/about/:path*","/dashboard/:path*"]
}