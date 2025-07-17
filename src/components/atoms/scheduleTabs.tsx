"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/helper";

const tabs = [
  { label: "Program", href: routes.topics },
  { label: "Authors", href: routes.authors },
  { label: "Keywords", href: routes.keywords },
];

const ScheduleTabs = () => {
  const pathname = usePathname();
  return (
    <div className="flex">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`hover:no-underline hover:text-primary-500 p-2 text-center font-semibold text-base cursor-pointer mx-2 ${
            pathname === tab.href ? "active-tab text-primary-500" : "text-primary-300"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}

export default ScheduleTabs;