import Link from "next/dist/client/link";
import { HtmlIcon } from "../app/assets/Icons";

export const CardTechnologies = () => {
  return (
    <Link
      href="/html"
      className="flex gap-4 min-w-lg items-center justify-start bg-gray-100 py-4 px-16 rounded-lg"
    >
      <HtmlIcon />
      <h2>HTML</h2>
    </Link>
  );
};
