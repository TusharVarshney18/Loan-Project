import Hero from "../components/Hero";
import LoanCard from "../components/LoanCard";
import ContactForm from "@/components/ContactForm";

const loans = [
  { id: "personal", title: "Personal Loan", desc: "Fast personal loans - unsecured for individuals." },
  { id: "business", title: "Business Loan", desc: "Working capital, MSME loans and more." },
  { id: "home", title: "Home Loan", desc: "Competitive interest rates on home loans." },
  { id: "auto", title: "Auto Loan", desc: "Buy your dream car with flexible EMIs." },
  { id: "education", title: "Education Loan", desc: "Support for domestic and international studies." },
  { id: "credit-card", title: "Credit Card", desc: "Get matched cards & offers." },
];

export default function Page() {
  return (
    <>
      <section className="bg-gray-50 min-h-screen">
        {/* Top Red Banner/Header */}
        <div className="w-full bg-red-800 py-4 shadow-md">
          <h1 className="text-center text-3xl font-bold text-white tracking-wider drop-shadow">QuickLoan Portal</h1>
        </div>

        {/* Main Hero */}
        <Hero />

        {/* Loan Products */}
        <div className="container max-w-6xl mx-auto my-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-800">Our Loan Products</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {loans.map((loan) => (
              <LoanCard key={loan.id} id={loan.id} title={loan.title} desc={loan.desc} className="border border-red-100 hover:shadow-red-200" />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="container max-w-6xl mx-auto my-16">
          <h3 className="text-2xl font-semibold mb-4 text-red-800">Why choose QuickLoan?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow border-t-4 border-red-700">
              <span className="text-lg font-semibold text-gray-700">Fast Approvals</span>
              <br />
              <span className="text-sm text-gray-500">Get a call within 24 hours</span>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow border-t-4 border-red-700">
              <span className="text-lg font-semibold text-gray-700">Transparent Fees</span>
              <br />
              <span className="text-sm text-gray-500">No hidden charges</span>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow border-t-4 border-red-700">
              <span className="text-lg font-semibold text-gray-700">Multiple Contact Options</span>
              <br />
              <span className="text-sm text-gray-500">Call, WhatsApp, Email</span>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
