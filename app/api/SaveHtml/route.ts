import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { cache } from "react";
import { start } from "repl";

export async function POST(req: NextRequest) {
    try {
        const { content } = await req.json();
        if (!content) {
            return NextResponse.json({ message: "Content is required" }, { status: 400 });
        }
        const Path = path.join(process.cwd(), "public", "preview.html");
        await fs.writeFile(Path, content, "utf-8");
        return NextResponse.json({ message: "HTML saved!", url: "/preview.html" });
    }catch (error) {
        return NextResponse.json({ message: "Error saving file", error }, { status: 500 });
    }
}

export async function GET(req: NextRequest){
    try{
        const Path = path.join(process.cwd(), "public", "preview.html");
        const savedMail: string = await fs.readFile(Path,'utf-8');
        if(savedMail){
            NextResponse.json({savedMail},{status: 200});
        }
    }catch(err){
        console.log(err)
        NextResponse.json({status : 500});
    }
}
