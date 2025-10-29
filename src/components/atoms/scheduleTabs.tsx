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
          className={`hover:no-underline hover:text-secondary p-2 text-center font-semibold text-base cursor-pointer mx-2 ${
            pathname === tab.href ? "active-tab text-secondary" : "text-primary-500"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}

export default ScheduleTabs;