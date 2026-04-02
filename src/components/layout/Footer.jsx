import StickyWhatsapp from "../ui/StickyWhatsapp";

const links = [
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Free Marketing Plan", href: "#cta" },
];

export default function Footer() {
  return (
    <footer className="relative border-t bg-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-base font-extrabold tracking-tight text-brand-ink">
            10XBIZZ
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Performance marketing and growth systems for brands that want
            predictable leads, better conversion, and clean reporting.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Quick links</p>
          <ul className="mt-3 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>Mon–Sun, 9:00 AM – 8:00 PM</p>
            <a
              href="mailto:hello@10xbizz.com"
              className="block hover:text-slate-900"
            >
              hello@10xbizz.com
            </a>
            <a href="tel:+910000000000" className="block hover:text-slate-900">
              +91 00000 00000
            </a>
          </div>
        </div>
      </div>

      <div className="border-t py-6">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} 10XBIZZ. All rights reserved.</p>
          <p>Performance marketing, done right.</p>
        </div>
      </div>
      <StickyWhatsapp />
    </footer>
  );
}
