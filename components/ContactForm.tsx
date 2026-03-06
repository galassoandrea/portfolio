"use client";
import { useState } from "react";
import { contactAction } from "@/lib/actions";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    const result = await contactAction(formData);
    if (result.success) {
        setStatus("success");
    } else {
        setStatus("idle");
        alert("Oops! Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
        <div className="text-center p-12 bg-green-500/10 border border-green-500/50 rounded-xl">
            <h3 className="text-2xl font-bold text-green-400">Message Sent!</h3>
            <p className="mt-2 text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
            <button onClick={() => setStatus("idle")} className="mt-6 text-sm underline cursor-pointer">Send another?</button>
        </div>
    );
  }

  return (
    <form action={handleSubmit} className="grid grid-cols-1 gap-6">
        <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input 
                type="text" name="name" id="name" required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                placeholder="Your Name"
            />
        </div>
        <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input 
                type="email" name="email" id="email" required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                placeholder="email@example.com"
            />
        </div>
        <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea 
                name="message" id="message" rows={4} required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                placeholder="How can I help you?"
            ></textarea>
        </div>
        <button 
            disabled={status === "loading"}
            className="w-full bg-blue-600 hover:bg-blue-500 font-bold py-4 rounded-lg shadow-lg shadow-blue-900/20 disabled:opacity-50 cursor-pointer"
        >
            {status === "loading" ? "Sending..." : "Send Message"}
        </button>
    </form>
  );
}