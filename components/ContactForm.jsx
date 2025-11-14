"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function change(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    console.log(form);
    setSent(true);
  }

  if (sent) return <div className="p-6 bg-white rounded-xl shadow border-t-4 border-red-700 text-red-900 font-semibold">Thanks — we will reach out soon.</div>;

  return (
    <form onSubmit={submit} className="bg-white rounded-xl shadow border-t-4 border-red-700 p-6 max-w-lg mx-auto">
      <input
        name="name"
        required
        placeholder="Your name"
        value={form.name}
        onChange={change}
        className="w-full p-3 rounded-lg border border-red-300 mb-4 focus:ring-2 focus:ring-red-500 outline-none transition"
        aria-label="Your name"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={change}
        className="w-full p-3 rounded-lg border border-red-300 mb-4 focus:ring-2 focus:ring-red-500 outline-none transition"
        aria-label="Email"
      />
      <textarea
        name="message"
        required
        placeholder="Message"
        value={form.message}
        onChange={change}
        className="w-full p-3 rounded-lg border border-red-300 mb-4 focus:ring-2 focus:ring-red-500 outline-none transition resize-y"
        aria-label="Message"
        rows={5}
      />
      <button type="submit" className="w-full py-3 rounded-lg bg-red-700 text-white font-semibold hover:bg-red-800 transition">
        Send message
      </button>
    </form>
  );
}
