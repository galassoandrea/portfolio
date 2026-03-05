"use server";

export async function contactAction(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Logic: Here is where you would integrate with an email service 
  // (like Resend, SendGrid, or Nodemailer)
  console.log("New Message Received:", { name, email, message });

  // For now, we'll just simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}