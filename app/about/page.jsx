export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-800 to-red-600 text-white py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About FlexiPath</h1>
          <p className="text-xl text-red-100">Empowering individuals and businesses with simple, transparent, and accessible financial solutions since 2020.</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="container max-w-6xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-red-800">Our Story</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          FlexiPath was founded in 2020 with a simple mission: to make lending accessible to everyone. We understand that life's important moments—buying a
          home, starting a business, funding education, or handling emergencies—often require financial support. Traditional lending can be slow, complex, and
          intimidating. That's why we created FlexiPath.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Today, we serve thousands of customers across India, offering personal, business, home, auto, and education loans with competitive rates, minimal
          paperwork, and fast approvals. Our team of financial experts works tirelessly to ensure every customer receives personalized service and support
          throughout their loan journey.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Headquartered in Mumbai, Maharashtra, we operate with a network of branch offices and digital channels, making our services accessible to customers
          nationwide. We are committed to financial inclusion and believe everyone deserves access to fair, transparent credit.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="bg-white py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-red-800 text-center">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-xl border border-red-200">
              <h3 className="text-xl font-semibold mb-3 text-red-900">Transparency</h3>
              <p className="text-gray-700">No hidden charges. Clear terms. Honest communication at every step.</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-xl border border-red-200">
              <h3 className="text-xl font-semibold mb-3 text-red-900">Speed</h3>
              <p className="text-gray-700">Quick approvals within 24-48 hours. Instant pre-qualification. Fast disbursal.</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-xl border border-red-200">
              <h3 className="text-xl font-semibold mb-3 text-red-900">Customer First</h3>
              <p className="text-gray-700">Personalized service. Dedicated support. Your financial success is our priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - DEMO DATA */}
      <section className="container max-w-6xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-semibold mb-8 text-red-800 text-center">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Founder & CEO */}
          <div className="bg-white p-6 rounded-xl shadow border-t-4 border-red-700 text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-3xl text-red-800 font-bold">AS</span>
            </div>
            <h3 className="text-xl font-semibold mb-1 text-red-900">Aarav Singh</h3>
            <p className="text-sm text-red-700 mb-3">Founder & CEO</p>
            <p className="text-gray-700 text-sm">
              15+ years of experience in banking and financial services. Previously worked with leading private banks. Holds an MBA in Finance from top business
              school.
            </p>
          </div>

          {/* COO */}
          <div className="bg-white p-6 rounded-xl shadow border-t-4 border-red-700 text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-3xl text-red-800 font-bold">NP</span>
            </div>
            <h3 className="text-xl font-semibold mb-1 text-red-900">Neha Patel</h3>
            <p className="text-sm text-red-700 mb-3">Chief Operating Officer</p>
            <p className="text-gray-700 text-sm">
              12+ years in operations and risk management. Expert in credit underwriting and compliance. Professional qualification in finance and accounting.
            </p>
          </div>

          {/* CTO */}
          <div className="bg-white p-6 rounded-xl shadow border-t-4 border-red-700 text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-3xl text-red-800 font-bold">VK</span>
            </div>
            <h3 className="text-xl font-semibold mb-1 text-red-900">Vikram Khanna</h3>
            <p className="text-sm text-red-700 mb-3">Chief Technology Officer</p>
            <p className="text-gray-700 text-sm">
              10+ years in fintech development. Built secure, scalable lending platforms. Engineering degree with expertise in digital financial services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Info & Location - PLACEHOLDER DATA */}
      <section className="bg-white py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-red-800 text-center">Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Registered Office - DEMO */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="text-xl font-semibold mb-4 text-red-900">Registered Office</h3>
              <p className="text-gray-700 mb-2">
                <strong>FlexiPath Financial Services Private Limited</strong>
              </p>
              <p className="text-gray-700 mb-2">
                Suite 456, Business Tower, <br />
                Andheri East, Mumbai - 400069, <br />
                Maharashtra, India
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Email:</strong> contact@flexipath-demo.com
              </p>
              <p className="text-gray-700">
                <strong>CIN:</strong> U65999MH2020PTC000000
              </p>
              <p className="text-xs text-gray-500 mt-3 italic">* Demo placeholder information for portfolio project</p>
            </div>

            {/* Regulatory Info - DEMO */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="text-xl font-semibold mb-4 text-red-900">Regulatory & Compliance</h3>
              <p className="text-gray-700 mb-3">
                <strong>RBI Registration:</strong> B-XX.XXXXX <br />
                <span className="text-sm text-gray-600">NBFC registration placeholder</span>
              </p>
              <p className="text-gray-700 mb-3">
                <strong>GST Number:</strong> 27XXXXX0000X0X0
              </p>
              <p className="text-gray-700 mb-3">
                <strong>ISO Certified:</strong> ISO 9001:2015 <br />
                <span className="text-sm text-gray-600">Quality Management Systems</span>
              </p>
              <p className="text-gray-700">
                <strong>Data Security:</strong> ISO 27001:2013 <br />
                <span className="text-sm text-gray-600">Information Security Management</span>
              </p>
              <p className="text-xs text-gray-500 mt-3 italic">* Demo placeholder information for portfolio project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - SAMPLE STATS */}
      <section className="bg-red-900 text-white py-16">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Trusted by Thousands</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-red-300 mb-2">25,000+</div>
              <p className="text-red-100">Loans Disbursed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-300 mb-2">₹250 Cr+</div>
              <p className="text-red-100">Total Loan Amount</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-300 mb-2">95%</div>
              <p className="text-red-100">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-300 mb-2">24-48 Hrs</div>
              <p className="text-red-100">Average Approval Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition - DEMO */}
      <section className="container max-w-6xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-semibold mb-8 text-red-800 text-center">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center border-t-4 border-red-700">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-semibold mb-2 text-red-900">Best NBFC Award</h3>
            <p className="text-sm text-gray-700">Recognition for customer service excellence and innovation in lending.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center border-t-4 border-red-700">
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="font-semibold mb-2 text-red-900">Top Fintech Platform</h3>
            <p className="text-sm text-gray-700">Recognized for innovation in digital lending solutions and technology.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center border-t-4 border-red-700">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-semibold mb-2 text-red-900">Secure & Certified</h3>
            <p className="text-sm text-gray-700">ISO 27001 certified for data security and privacy protection.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container max-w-6xl mx-auto my-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-red-800">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-6">Apply now and get a decision within 24-48 hours.</p>
        <a href="/apply" className="inline-block py-3 px-8 rounded-lg bg-red-700 text-white font-semibold hover:bg-red-800 transition">
          Apply Now
        </a>
      </section>
    </div>
  );
}
