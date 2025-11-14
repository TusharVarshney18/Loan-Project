"use client";
import { useState } from "react";

export default function ApplyPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    loan: "",
    income: "",
    message: "",
  });
  const [done, setDone] = useState(false);

  function onChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // TODO: wire up to backend or email service
    console.log("apply", form);
    setDone(true);
  }

  return (
    <div className="container max-w-4xl mx-auto my-16 px-4">
      <h1 className="text-3xl font-semibold mb-8 text-red-800">Apply Now</h1>

      {done ? (
        <div className="p-6 bg-white rounded-xl shadow border-t-4 border-red-700 text-red-900 font-semibold">
          Thanks! We received your request — we'll contact you within 24 hours.
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            name="name"
            required
            placeholder="Full name"
            value={form.name}
            onChange={onChange}
            className="p-3 rounded-lg border border-red-300 focus:ring-2 focus:ring-red-500 outline-none transition"
            aria-label="Full name"
          />
          <input
            name="phone"
            required
            placeholder="Mobile number"
            value={form.phone}
            onChange={onChange}
            className="p-3 rounded-lg border border-red-300 focus:ring-2 focus:ring-red-500 outline-none transition"
            aria-label="Mobile number"
          />
          <input
            name="email"
            type="email"
            placeholder="Email (optional)"
            value={form.email}
            onChange={onChange}
            className="p-3 rounded-lg border border-red-300 focus:ring-2 focus:ring-red-500 outline-none transition"
            aria-label="Email"
          />
          <select
            name="loan"
            value={form.loan}
            onChange={onChange}
            className="p-3 rounded-lg border border-red-300 focus:ring-2 focus:ring-red-500 outline-none transition"
            aria-label="Select loan type"
            required
          >
            <option value="">Select loan</option>
            <option value="personal">Personal Loan</option>
            <option value="business">Business Loan</option>
            <option value="home">Home Loan</option>
            <option value="auto">Auto Loan</option>
          </select>

          <input
            name="income"
            placeholder="Monthly income (optional)"
            value={form.income}
            onChange={onChange}
            className="p-3 rounded-lg border border-red-300 focus:ring-2 focus:ring-red-500 outline-none transition"
            aria-label="Monthly income"
          />

          <textarea
            name="message"
            placeholder="Additional message (optional)"
            value={form.message}
            onChange={onChange}
            className="p-3 rounded-lg border border-red-300 focus:ring-2 focus:ring-red-500 outline-none transition md:col-span-2 resize-y"
            aria-label="Additional message"
            rows={5}
          />

          <label className="md:col-span-2 flex items-center gap-3 text-gray-700">
            <input type="checkbox" required className="accent-red-600" />
            <span className="text-sm">I consent to be contacted regarding my application.</span>
          </label>

          <button type="submit" className="md:col-span-2 py-3 rounded-lg bg-red-700 text-white font-semibold hover:bg-red-800 transition">
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}
