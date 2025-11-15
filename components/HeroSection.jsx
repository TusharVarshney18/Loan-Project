export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-red-50 via-white to-red-50 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 space-y-6 lg:pr-8">
            {/* Heading */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700">WELCOME TO</h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-800 border-l-4 border-red-800 pl-4 leading-tight">
                FLEXIPATH FINANCIAL SERVICES
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-700">
              <p className="text-base md:text-lg leading-relaxed">
                We understand your financial worries so, have the best plans to suit your needs. With our outstanding features you will be left with no doubt
                but to apply for our loans!
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Apply for personal loan from FlexiPath Financial Services and you will get best offers and fast approvals for Home Loan, Business Loan, Personal
                Loan, Gold Loan or any other loan.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                We analyze your financial profile, repayment capacity, and credit score to finalize the loan amount, rate, and tenure.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+918700658150"
                className="inline-flex items-center justify-center px-8 py-3 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-900 transition-colors shadow-lg"
              >
                📞 Call Now: +91-8700658150
              </a>
              <a
                href="/apply"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-800 font-semibold rounded-lg hover:bg-red-50 transition-colors border-2 border-red-800"
              >
                Apply Now →
              </a>
            </div>
          </div>

          {/* Right Image Section - Different Images for Mobile/Desktop */}
          <div className="w-full lg:w-1/2 relative">
            {/* Mobile Image - Visible on screens smaller than lg */}
            <div className="relative z-10 block lg:hidden">
              <img src="/clients.png" alt="FlexiPath Financial Services - Mobile" className="w-full h-auto object-contain drop-shadow-2xl" />
            </div>

            {/* Desktop Image - Visible on lg screens and larger */}
            <div className="relative z-10 hidden lg:block">
              <img src="/girl1.png" alt="FlexiPath Financial Services - Professional Consultant" className="w-full h-auto object-contain drop-shadow-2xl" />
            </div>

            {/* Decorative Background Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-200 rounded-full opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
