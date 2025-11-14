export default function Services() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-800 to-red-600 text-white py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Loan Services</h1>
          <p className="text-xl text-red-100">Comprehensive lending solutions tailored to your personal and business financial needs.</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container max-w-6xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-semibold mb-8 text-red-800 text-center">What We Offer</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          QuickLoan provides a wide range of financial products designed to help you achieve your goals—whether it's buying a home, starting a business, funding
          education, or managing personal expenses. Our services are built on transparency, speed, and customer satisfaction.
        </p>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Personal Loan */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-700 hover:shadow-xl transition">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-2xl font-semibold mb-3 text-red-900">Personal Loan</h3>
            <p className="text-gray-700 mb-4">Quick, unsecured loans for weddings, medical emergencies, travel, debt consolidation, or any personal need.</p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>✓ Loan Amount: ₹50,000 - ₹25 Lakh</li>
              <li>✓ Tenure: 12 - 60 months</li>
              <li>✓ Interest: From 10.5% p.a.</li>
              <li>✓ No collateral required</li>
              <li>✓ Flexible EMI options</li>
            </ul>
            <a href="/apply" className="inline-block text-red-700 font-semibold hover:text-red-900 underline">
              Apply Now →
            </a>
          </div>

          {/* Business Loan */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-700 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-2xl font-semibold mb-3 text-red-900">Business Loan</h3>
            <p className="text-gray-700 mb-4">Working capital, equipment purchase, expansion, or MSME growth financing with minimal documentation.</p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>✓ Loan Amount: ₹1 Lakh - ₹50 Lakh</li>
              <li>✓ Tenure: 12 - 84 months</li>
              <li>✓ Interest: From 11% p.a.</li>
              <li>✓ MSME-friendly process</li>
              <li>✓ Quick approval in 24-48 hours</li>
            </ul>
            <a href="/apply" className="inline-block text-red-700 font-semibold hover:text-red-900 underline">
              Apply Now →
            </a>
          </div>

          {/* Home Loan */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-700 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-2xl font-semibold mb-3 text-red-900">Home Loan</h3>
            <p className="text-gray-700 mb-4">
              Purchase, construction, or renovation of residential property with competitive interest rates and tax benefits.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>✓ Loan Amount: Up to ₹5 Crore</li>
              <li>✓ Tenure: Up to 30 years</li>
              <li>✓ Interest: From 8.5% p.a.</li>
              <li>✓ Tax benefits under 80C & 24(b)</li>
              <li>✓ Flexible prepayment options</li>
            </ul>
            <a href="/apply" className="inline-block text-red-700 font-semibold hover:text-red-900 underline">
              Apply Now →
            </a>
          </div>

          {/* Auto Loan */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-700 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-2xl font-semibold mb-3 text-red-900">Auto Loan</h3>
            <p className="text-gray-700 mb-4">Finance your dream car or two-wheeler with easy EMIs, instant approvals, and flexible repayment terms.</p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>✓ Finance: Up to 90% of vehicle value</li>
              <li>✓ Tenure: 12 - 84 months</li>
              <li>✓ Interest: From 9% p.a.</li>
              <li>✓ New & used vehicles eligible</li>
              <li>✓ Instant approval for pre-qualified</li>
            </ul>
            <a href="/apply" className="inline-block text-red-700 font-semibold hover:text-red-900 underline">
              Apply Now →
            </a>
          </div>

          {/* Education Loan */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-700 hover:shadow-xl transition">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-2xl font-semibold mb-3 text-red-900">Education Loan</h3>
            <p className="text-gray-700 mb-4">Fund higher education in India or abroad. Cover tuition, accommodation, travel, and living expenses.</p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>✓ Loan Amount: Up to ₹50 Lakh</li>
              <li>✓ Tenure: Up to 15 years</li>
              <li>✓ Interest: From 9.5% p.a.</li>
              <li>✓ Moratorium period during studies</li>
              <li>✓ Covers all education expenses</li>
            </ul>
            <a href="/apply" className="inline-block text-red-700 font-semibold hover:text-red-900 underline">
              Apply Now →
            </a>
          </div>

          {/* Credit Card Offers */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-700 hover:shadow-xl transition">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-2xl font-semibold mb-3 text-red-900">Credit Card</h3>
            <p className="text-gray-700 mb-4">Get matched with the best credit card offers based on your profile. Cashback, rewards, travel benefits & more.</p>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>✓ Credit Limit: ₹50,000 - ₹10 Lakh</li>
              <li>✓ Rewards & cashback programs</li>
              <li>✓ Zero annual fee options</li>
              <li>✓ Instant digital approval</li>
              <li>✓ Travel & shopping benefits</li>
            </ul>
            <a href="/apply" className="inline-block text-red-700 font-semibold hover:text-red-900 underline">
              Apply Now →
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-white py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-red-800 text-center">Why Our Services Stand Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-red-50 rounded-xl border border-red-200">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2 text-red-900">Fast Approvals</h3>
              <p className="text-sm text-gray-700">Get a decision within 24 hours with minimal paperwork.</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-xl border border-red-200">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold mb-2 text-red-900">Competitive Rates</h3>
              <p className="text-sm text-gray-700">Industry-leading interest rates with flexible EMI options.</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-xl border border-red-200">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold mb-2 text-red-900">100% Secure</h3>
              <p className="text-sm text-gray-700">Your data is protected with bank-grade encryption.</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-xl border border-red-200">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold mb-2 text-red-900">24/7 Support</h3>
              <p className="text-sm text-gray-700">Call, WhatsApp, or email us anytime for assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Process */}
      <section className="container max-w-6xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-semibold mb-8 text-red-800 text-center">How to Apply</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
            <h3 className="font-semibold mb-2 text-red-900">Choose Your Loan</h3>
            <p className="text-sm text-gray-600">Select the loan type that best fits your needs from our services.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
            <h3 className="font-semibold mb-2 text-red-900">Fill Application</h3>
            <p className="text-sm text-gray-600">Complete our simple online form in under 5 minutes.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
            <h3 className="font-semibold mb-2 text-red-900">Get Approval</h3>
            <p className="text-sm text-gray-600">Receive approval within 24-48 hours with clear terms.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">4</div>
            <h3 className="font-semibold mb-2 text-red-900">Receive Funds</h3>
            <p className="text-sm text-gray-600">Money transferred directly to your bank account.</p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-red-50 py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-red-800 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-red-900">Loan Calculator</h3>
              <p className="text-gray-700 text-sm mb-3">Calculate your EMI, total interest, and repayment schedule instantly.</p>
              <a href="#calculator" className="text-red-700 font-medium hover:text-red-900 underline text-sm">
                Try Calculator →
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-red-900">Eligibility Check</h3>
              <p className="text-gray-700 text-sm mb-3">Check your loan eligibility in seconds without affecting credit score.</p>
              <a href="#eligibility" className="text-red-700 font-medium hover:text-red-900 underline text-sm">
                Check Now →
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-red-900">Documentation Help</h3>
              <p className="text-gray-700 text-sm mb-3">Get guidance on required documents and application process.</p>
              <a href="/contact" className="text-red-700 font-medium hover:text-red-900 underline text-sm">
                Get Help →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container max-w-6xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-semibold mb-8 text-red-800 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <details className="bg-white p-5 rounded-xl shadow border border-red-100">
            <summary className="font-semibold text-red-900 cursor-pointer">What documents do I need to apply?</summary>
            <p className="text-gray-700 text-sm mt-3">
              Typically: ID proof (Aadhaar/PAN), address proof, income proof (salary slips/ITR), and bank statements for the last 3-6 months. Specific
              requirements vary by loan type.
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl shadow border border-red-100">
            <summary className="font-semibold text-red-900 cursor-pointer">How long does approval take?</summary>
            <p className="text-gray-700 text-sm mt-3">
              Most applications are reviewed within 24-48 hours. Pre-qualified customers may receive instant approval.
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl shadow border border-red-100">
            <summary className="font-semibold text-red-900 cursor-pointer">Can I prepay my loan?</summary>
            <p className="text-gray-700 text-sm mt-3">
              Yes, we offer flexible prepayment and foreclosure options. Check your loan agreement for specific terms and any applicable charges.
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl shadow border border-red-100">
            <summary className="font-semibold text-red-900 cursor-pointer">What is the minimum credit score required?</summary>
            <p className="text-gray-700 text-sm mt-3">
              A credit score of 650+ is preferred for most loans. However, we evaluate applications holistically, considering income, employment, and other
              factors.
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl shadow border border-red-100">
            <summary className="font-semibold text-red-900 cursor-pointer">Are there any hidden charges?</summary>
            <p className="text-gray-700 text-sm mt-3">
              No. We believe in 100% transparency. All charges including processing fees, prepayment charges, and late payment penalties are disclosed upfront
              in your loan agreement.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-900 text-white py-16">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Get Your Loan?</h2>
          <p className="text-red-100 mb-6">Apply now and get a decision within 24 hours. No hidden charges. Fast approvals.</p>
          <a href="/apply" className="inline-block py-3 px-8 rounded-lg bg-white text-red-900 font-semibold hover:bg-red-100 transition">
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}
