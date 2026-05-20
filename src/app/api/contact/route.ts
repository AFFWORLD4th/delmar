import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !message) {
      return NextResponse.json({ message: 'Missing required fields (name, message)' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: 'Info@delmarservice.com',
        pass: 'Valeri@2026',
      },
    });

    const mailOptions = {
      from: 'Info@delmarservice.com',
      to: 'Info@delmarservice.com', // Receive at the same address
      replyTo: email || 'Info@delmarservice.com',
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #cda152;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; color: #1e293b;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email || 'Not provided'}</p>
            <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject || 'No Subject'}</p>
            <p style="margin: 20px 0 10px 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; margin: 0; color: #334155;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
