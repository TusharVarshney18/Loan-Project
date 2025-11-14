export default function Disclaimer() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-red-800">Disclaimer & Copyright Notice</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="bg-white rounded-xl shadow p-8 space-y-6 text-gray-700">
          {/* PROJECT PURPOSE DISCLAIMER */}
          <section className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
            <h2 className="text-2xl font-semibold mb-3 text-yellow-800">⚠️ Project Disclaimer</h2>
            <p className="mb-3 font-semibold text-yellow-900">
              This website is a <strong>project template and portfolio demonstration</strong> created for educational, learning, and showcase purposes only.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-yellow-900">
              <li>
                This is <strong>NOT</strong> a real financial institution or licensed lending company.
              </li>
              <li>No actual loan services, financial products, or credit facilities are offered.</li>
              <li>
                All company names, details, and loan information are <strong>fictional and for demonstration purposes only</strong>.
              </li>
              <li>Do not submit real personal, financial, or identity documents through this website.</li>
              <li>This project is intended to showcase web development skills, UI/UX design, and full-stack capabilities.</li>
            </ul>
            <p className="mt-4 font-semibold text-yellow-900">
              If you wish to use this template for a real business, you must obtain proper licensing, regulatory approvals (RBI, NBFC registration), and comply
              with all financial services laws in India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-red-800">General Disclaimer</h2>
            <p>
              The information provided on this website is for general informational and demonstration purposes only. While we strive to keep the information
              accurate in the context of a project template, we make no representations or warranties of any kind, express or implied, about the completeness,
              accuracy, reliability, or suitability of the information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-red-800">No Financial Advice or Services</h2>
            <p>
              This website does not provide actual financial services, loan products, or financial advice. All content is fictional and created for educational
              demonstration. Do not rely on this website for any real financial decisions or transactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-red-800">External Links</h2>
            <p>
              Any external links included are for demonstration purposes only. We have no control over the content and availability of those sites. The
              inclusion of any links does not constitute a recommendation or endorsement.
            </p>
          </section>

          <section className="border-t-2 border-red-700 pt-6">
            <h2 className="text-2xl font-semibold mb-3 text-red-800">⚖️ Copyright Notice & Design Protection</h2>
            <div className="bg-red-50 border-l-4 border-red-700 p-4 mb-4">
              <p className="font-semibold text-red-900 mb-2">© {new Date().getFullYear()} QuickLoan Project Template. All Rights Reserved.</p>
              <p className="text-sm">
                Website designed and developed by <strong>Tushar Varshney</strong> as a portfolio project.
              </p>
            </div>
            <p className="mb-3">
              All content, design elements, graphics, code, text, images, logos, and other materials on this website are the exclusive intellectual property of{" "}
              <strong>Tushar Varshney</strong> and are protected by Indian and international copyright laws, including the <strong>Copyright Act, 1957</strong>{" "}
              and the <strong>Information Technology Act, 2000</strong>.
            </p>
            <p className="mb-3">
              <strong>This is a project template created for:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Portfolio demonstration and skill showcase</li>
              <li>Educational and learning purposes</li>
              <li>Template reference for legitimate businesses (with proper licensing)</li>
              <li>Freelance/client project discussions</li>
            </ul>
            <p className="mb-3">
              <strong>
                Unauthorized use, reproduction, distribution, modification, or copying of any part of this website design or code, including but not limited to:
              </strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Design layout, visual elements, and UI/UX components</li>
              <li>Source code (HTML, CSS, JavaScript, React/Next.js code)</li>
              <li>Graphics, images, icons, and branding materials</li>
              <li>Content structure, text, and copywriting</li>
            </ul>
            <p className="mb-3">
              is <strong className="text-red-700">strictly prohibited</strong> without prior written permission from Tushar Varshney.
            </p>
          </section>

          <section className="bg-red-100 border border-red-300 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-red-900">🚨 Legal Action Against Design Theft</h3>
            <p className="mb-3">
              While this is a project template, the design, code, and creative work are original and copyrighted. Any unauthorized copying, cloning, or theft of
              this website design, code, or content will be considered a violation of intellectual property rights and will result in:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3 font-semibold">
              <li>DMCA takedown notices to hosting providers</li>
              <li>Civil legal action for damages under the Copyright Act, 1957</li>
              <li>Criminal prosecution under IT Act, 2000 (Sections 43, 66)</li>
              <li>Claims for financial compensation and statutory damages</li>
              <li>Public exposure of copyright violation</li>
            </ul>
            <p className="font-semibold text-red-900">
              We actively monitor for copyright infringement and will pursue all legal remedies available under Indian law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-red-800">Permitted Use</h2>
            <p className="mb-3">You may view this website for educational purposes, inspiration, or to evaluate the developer's skills. You may NOT:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Copy, clone, or reproduce the design or code without permission</li>
              <li>Use this template for commercial purposes without a license</li>
              <li>Remove or modify copyright notices and attribution</li>
              <li>Claim this work as your own</li>
            </ul>
            <p className="mt-3">
              <strong>For licensing inquiries or custom development:</strong> Contact Tushar Varshney for permission and pricing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-red-800">Attribution Required</h2>
            <p>
              If you use this template with permission, you must provide clear attribution to the original designer and developer:{" "}
              <strong>Tushar Varshney</strong>. Remove or modify attribution without consent is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-red-800">Contact & Licensing</h2>
            <p>For licensing, custom development, or to report copyright infringement, contact:</p>
            <p className="mt-3">
              <strong>Tushar Varshney</strong>
              <br />
              Email:{" "}
              <a href="mailto:tusharvarshney1810@gmail.com" className="text-red-700 hover:text-red-900 underline">
                tusharvarshney1810@gmail.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+918860916437" className="text-red-700 hover:text-red-900 underline">
                +91 8860916437
              </a>
              <br />
              Portfolio:{" "}
              <a
                href="https://portfolio-2-frontend-umber.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-700 hover:text-red-900 underline"
              >
                portfolio-2-frontend-umber.vercel.app
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-red-800">Changes to This Disclaimer</h2>
            <p>We reserve the right to update or modify this disclaimer and copyright notice at any time. Please review this page periodically for changes.</p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">This is a project template created by Tushar Varshney for portfolio and educational purposes.</p>
          <p className="text-sm text-gray-600 mt-2">Last reviewed and updated on {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
