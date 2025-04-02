import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
    try {
        const { content } = await req.json();
        if (!content) {
            return NextResponse.json({ message: "Content is required" }, { status: 400 });
        }
        const filePath = path.join(process.cwd(), "public", "preview.html");
        await fs.writeFile(filePath, content, "utf-8");
        return NextResponse.json({ message: "HTML saved!", url: "/preview.html" });
    } catch (error) {
        return NextResponse.json({ message: "Error saving file", error }, { status: 500 });
    }
}

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), "public", "preview.html");
        const savedMail = await fs.readFile(filePath, "utf-8");

        return NextResponse.json({ savedMail }, { status: 200 });
    } catch (error) {
        console.error("Error reading file:", error);
        return NextResponse.json({ message: "Error reading file" }, { status: 500 }); 
    }
}
