export default function MarqueeHeader() {
  return (
    <div className="w-full bg-red-800 py-4 shadow-md relative overflow-hidden">
      <div className="flex items-center">
        {/* Static Logo/Brand Name */}
        <div className="absolute left-0 z-10 bg-red-800 px-6 py-2 border-r-2 border-red-600">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider drop-shadow-lg">FlexiPath</h1>
        </div>

        {/* Marquee Container */}
        <div className="ml-40 md:ml-48 flex">
          {/* First Set */}
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="text-white text-sm md:text-base font-medium mx-8">🔔 Special Offer: Get Personal Loans at 9.99% Interest Rate</span>
            <span className="text-white text-sm md:text-base font-medium mx-8">💰 Home Loans Starting from ₹5 Lakhs - No Hidden Charges</span>
            <span className="text-white text-sm md:text-base font-medium mx-8">📚 Education Loans Available - Flexible Repayment Options</span>
            <span className="text-white text-sm md:text-base font-medium mx-8">⚡ Business Loans up to ₹50 Lakhs - Quick Approval in 24 Hours</span>
          </div>

          {/* Duplicate Set for Seamless Loop */}
          <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
            <span className="text-white text-sm md:text-base font-medium mx-8">🔔 Special Offer: Get Personal Loans at 9.99% Interest Rate</span>
            <span className="text-white text-sm md:text-base font-medium mx-8">💰 Home Loans Starting from ₹5 Lakhs - No Hidden Charges</span>
            <span className="text-white text-sm md:text-base font-medium mx-8">📚 Education Loans Available - Flexible Repayment Options</span>
            <span className="text-white text-sm md:text-base font-medium mx-8">⚡ Business Loans up to ₹50 Lakhs - Quick Approval in 24 Hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
