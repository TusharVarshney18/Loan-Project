import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white py-10 mt-12">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div>
          <h4 className="font-bold text-lg text-red-300">FlexiPath</h4>
          <p className="text-sm text-red-100">Simple lending — trusted by thousands. Fast approvals, transparent terms, and customer-first service.</p>
        </div>

        <div>
          <h5 className="font-semibold text-red-300 mb-2">Contact</h5>
          <p className="text-sm text-red-100">
            Phone:{" "}
            <a href="tel:+12345679" className="hover:text-white underline">
              +123456789
            </a>
          </p>
          <p className="text-sm text-red-100">
            Email:{" "}
            <a href="mailto:info@FlexiPath.com" className="hover:text-white underline">
              info@FlexiPath.com
            </a>
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-red-300 mb-2">Legal</h5>
          <ul className="text-sm text-red-100 space-y-1">
            <li>
              <Link href="/privacy" className="hover:text-white hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-white hover:underline">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto text-center text-sm text-red-200 mt-8 px-4">
        © {new Date().getFullYear()} FlexiPath. All rights reserved. | Made by Tushar Varshney
      </div>
    </footer>
  );
}
