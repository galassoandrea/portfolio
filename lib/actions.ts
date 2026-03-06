"use server";

import { Resend } from "resend";

export async function contactAction(formData: FormData) {

  // Create Resend instance
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Get form inputs
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Send the email
  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['galassoandrea99@gmail.com'],
      subject: `New Message from ${name}`,
      replyTo: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("System Error:", err);
    return { success: false, error: "Something went wrong." };
  }
}