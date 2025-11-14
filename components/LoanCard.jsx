import Link from "next/link";

export default function LoanCard({ id, title, desc }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow border border-red-100 hover:shadow-red-200 hover:border-red-800 transition">
      <h3 className="text-xl font-semibold mb-2 text-red-900">{title}</h3>
      <p className="text-gray-700 mb-4">{desc}</p>
      <Link
        href={`/${id}`}
        className="inline-block py-2 px-5 rounded-lg bg-red-700 text-white font-semibold border border-red-700 hover:bg-red-800 hover:border-red-900 transition"
      >
        Learn more
      </Link>
    </div>
  );
}
