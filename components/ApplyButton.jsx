import Link from "next/link";

export default function ApplyButton({ loan }) {
  return (
    <Link
      href="/apply"
      className="inline-block py-3 px-6 rounded-lg bg-red-700 text-white font-semibold hover:bg-red-800 transition"
      aria-label={`Apply for ${loan}`}
    >
      Apply for {loan}
    </Link>
  );
}
