import Link from "next/link";
import { ReactNode } from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { DashboardItems } from "../components/Dashboard/DashboardItems";
import Home from "../page";
import { DollarSign, DollarSignIcon, Globe, GlobeIcon } from "lucide-react";
export const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Sites",
    href: "/dashboard/sites",
    icon: Globe,
  },
  {
    name: "Pricing",
    href: "/dashboard/pricing",
    icon: DollarSignIcon,
  },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section
      className="        display-grid 
        min-height-screen 
        width-full 
        md-display-grid 
        md-grid-template-columns-[220px_1fr] 
        lg-grid-template-columns-[280px_1fr]"
    >
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src={logo} alt="logo" className="size-8" />
              <h3 className="text-2xl">
                Hello<span className="text-primary">morning</span>
              </h3>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 font-medium lg:px-4">
              <DashboardItems />
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
