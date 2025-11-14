import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center py-20 lg:py-32"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Headline + Actions */}
        <div className="text-white">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">Loans made simple — apply in minutes</h1>
          <p className="text-gray-200 mb-6 text-lg">Personal, business, home, and auto loans with fast turnaround and transparent terms.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/apply" className="py-3 px-8 rounded-xl bg-red-700 hover:bg-red-800 text-white font-semibold shadow-lg transition text-center">
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="py-3 px-8 rounded-xl border-2 border-white text-white font-semibold bg-transparent hover:bg-white hover:text-red-900 transition text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Quick Contact Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-t-4 border-red-700">
          <h3 className="font-semibold mb-3 text-red-900 text-xl">Quick Contact</h3>
          <p className="text-sm text-gray-700 mb-2">
            📞 Phone:{" "}
            <a href="tel:+919876543210" className="text-red-700 font-medium hover:underline">
              +123456789
            </a>
          </p>
          <p className="text-sm text-gray-700 mb-4">
            💬 WhatsApp:{" "}
            <a href="https://wa.me/123456789" className="text-red-700 font-medium hover:underline" target="_blank" rel="noopener noreferrer">
              Chat Now
            </a>
          </p>
          <p className="text-xs text-gray-600 border-t pt-3">⏱️ Get a call back within 24 hours. Fast approvals guaranteed.</p>
        </div>
      </div>
    </section>
  );
}
