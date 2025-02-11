import Link from "next/link";
import { NavigationItem } from "@/types/portfolio";

export default function Navigation({ items }: { items: NavigationItem[] }) {
  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max" id="nav-list">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              className="group flex items-center py-3 nav-link"
              href={item.href}
              data-section={item.section}
              title={`${item.label} section`}
              aria-label={`Navigate to ${item.label} section`}
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-slate-100 group-focus-visible:text-slate-100">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
