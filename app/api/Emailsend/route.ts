import { NextResponse, NextRequest } from "next/server";
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from "path";

// Define the Emailopt interface
interface Emailopt {
  from: string;
  to: string;
  bcc: string[];
  subject: string;
  content: string;
  AttachSignature: boolean;
}

export async function POST(req: NextRequest) {
  try {
    // Parse the email data from the request body
    const res = await req.json();
    const Email: Emailopt = res.Email
    
    let app_pas:string = '';
    if(Email.from === "rjsharmase@gmail.com"){
      app_pas = process.env.Email1 || '';
    }else{
      app_pas = process.env.Email2 || '';
    }

    // Create a transporter to send the email using Gmail's SMTP server
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: Email.from,
        pass: app_pas,
      },
    });

    // Read the signature file from the public folder
    const signaturePath = path.join(process.cwd(), "public", "signature.html");
    let signature = '';
    try {
      signature = fs.readFileSync(signaturePath, "utf-8");
    } catch (err) {
      console.error("Error reading signature file:", err);
      return NextResponse.json({ error: "Failed to read signature file" }, { status: 500 });
    }

    // Prepare the email options
    const { bcc } = Email;

    const mailOptions = {
      from: "rjsharmase@gmail.com",
      to: Email.to,
      subject: Email.subject,
      html: `
        <div style="font-size: 14px; font-family: Arial, sans-serif;">
          ${Email.content}
          <br>
          ${Email.AttachSignature && signature}
        </div>
      `,
      ...(bcc && { bcc }),
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
