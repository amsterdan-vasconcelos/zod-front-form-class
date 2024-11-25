"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const paths = [
  "basic-form",
  "age-form",
  "email-form",
  "password-form",
  "gender-form",
  "url-form",
  "phone-form",
  "agreement-form",
  "tags-form",
  "address-form",
];

function Navlink() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="flex items-center justify-center gap-2 py-10 px-16">
      {paths.map((path) => (
        <Link
          href={path}
          key={path}
          className={`text-white underline underline-offset-4 ${
            pathname === `/${path}` && "text-orange-500"
          }`}
        >
          {path}
        </Link>
      ))}
    </div>
  );
}

export default Navlink;
