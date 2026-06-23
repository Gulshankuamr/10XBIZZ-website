import { useState, useEffect } from "react";

const FALLBACK_BANNER = {
  badge: "Hot",
  message: "Limited Offer: Get Free CRM Setup Worth Rs 9,999",
  ctaLabel: "Claim Now",
  ctaLink: "/contact",
};

const BANNER_API_URL = "https://10x.fctesting.shop/api/banner";

// API response shape:
// { success: true, data: [{ banner_id, offer_type, offer_description }] }
//   offer_type        → badge label
//   offer_description → message text
//   ctaLabel / ctaLink → hardcoded (API does not return them)

function mapApiToBanner(data) {
  const item = data?.[0];
  if (!item) return FALLBACK_BANNER;
  return {
    badge:    item.offer_type        || FALLBACK_BANNER.badge,
    message:  item.offer_description || FALLBACK_BANNER.message,
    ctaLabel: "Claim Now",
    ctaLink:  "/contact",
  };
}

export default function PromoBanner({ onHide }) {
  const [banner, setBanner] = useState(null); // null = still loading

  useEffect(() => {
    let cancelled = false;

    const fetchBanner = async () => {
      try {
        const res = await fetch(BANNER_API_URL);
        if (!res.ok) throw new Error("Non-2xx response");
        const json = await res.json();

        if (!cancelled) {
          if (json?.success && Array.isArray(json?.data) && json.data.length > 0) {
            setBanner(mapApiToBanner(json.data));
          } else {
            // API returned success:false or empty data
            setBanner(FALLBACK_BANNER);
          }
        }
      } catch {
        // Network error or parse error → silent fallback
        if (!cancelled) setBanner(FALLBACK_BANNER);
      }
    };

    fetchBanner();
    return () => { cancelled = true; };
  }, []);

  // Hide banner while fetching (avoids layout shift)
  if (!banner) return null;

  return (
    <div className="promo-shimmer relative hidden md:flex items-center justify-center gap-4 overflow-hidden bg-[#0a0a0a] px-10 py-2.5">
      {/* Badge + Message */}
      <div className="relative z-10 flex items-center gap-2">
        {banner.badge && (
          <span className="bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
            {banner.badge}
          </span>
        )}
        <p className="m-0 text-[14px] font-semibold text-white">
          {banner.message}
        </p>
      </div>

      {/* CTA Link */}
      {banner.ctaLabel && banner.ctaLink && (
        <a
          href={banner.ctaLink}
          className="relative z-10 bg-[#6400A1] text-white text-[12px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full no-underline"
        >
          {banner.ctaLabel}
        </a>
      )}

      {/* Close Button */}
      <button
        onClick={onHide}
        className="absolute right-4 z-10 bg-transparent border-none cursor-pointer text-white/60 text-lg leading-none"
        aria-label="Close banner"
      >
        ✕
      </button>
    </div>
  );
}