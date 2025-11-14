import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <div className="container max-w-6xl mx-auto my-16 px-4">
      <h1 className="text-3xl font-semibold mb-4 text-red-800">Contact Us</h1>
      <p className="text-gray-700 mb-8">Call, WhatsApp or send us a message — we'll get back within 24 hours.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <div className="bg-white p-6 rounded-xl shadow border-t-4 border-red-700">
          <h2 className="font-semibold text-xl mb-4 text-red-900">Reach us</h2>
          <p className="mb-2">
            Phone:{" "}
            <a href="tel:+123465789" className="text-red-700 hover:text-red-900 font-medium underline">
              +123456789
            </a>
          </p>
          <p className="mb-4">
            Email:{" "}
            <a href="mailto:info@quickloan.com" className="text-red-700 hover:text-red-900 font-medium underline">
              info@quickloan.com
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-900 font-medium underline">
              Chat on WhatsApp
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}
