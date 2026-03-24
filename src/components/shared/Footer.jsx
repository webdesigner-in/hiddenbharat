import { Link } from "react-router-dom";
import { Compass, Instagram, Mail, MapPinned, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const exploreLinks = [
  { label: "Destinations", to: "/destinations" },
  { label: "Packages", to: "/packages" },
  { label: "Stories", to: "/stories" },
  { label: "Contact", to: "/contact" },
];

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "Travel Stories", to: "/stories" },
  { label: "Plan a Journey", to: "/contact" },
  { label: "Sign In", to: "/login" },
];

export default function Footer() {
  return (
    <footer className="border-t border-orange-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,247,237,0.9))]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 grid gap-4 rounded-[2rem] border border-orange-100/80 bg-white/80 p-5 shadow-sm backdrop-blur sm:grid-cols-[1.1fr_0.9fr] sm:p-6 lg:mb-14 lg:p-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-medium text-orange-700">
              <Sparkles className="size-4" />
              Travel inspiration for slower, richer journeys
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
              Stay close to HiddenBharat
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              Get destination ideas, seasonal suggestions, and new stories from
              overlooked corners of India.
            </p>
          </div>

          <div className="grid gap-3 sm:items-end">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Your email address"
                className="h-12 rounded-full bg-white"
              />
              <Button className="h-12 rounded-full px-6">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              No spam. Just thoughtful ideas for meaningful travel.
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                className="h-14 w-14 object-contain"
                src="/logo.png"
                alt="HiddenBharat Logo"
              />
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-stone-900">
                  HIDDENBHARAT
                </p>
                <p className="text-xs text-muted-foreground">
                  Premium discovery for mindful travelers
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              Connecting travelers with authentic, meaningful journeys across
              India while supporting local communities and slow, sustainable
              exploration.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-stone-700 sm:max-w-sm">
              <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white/70 px-4 py-3">
                <MapPinned className="size-4 text-orange-600" />
                Hidden destinations, local texture, calmer travel
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white/70 px-4 py-3">
                <Compass className="size-4 text-orange-600" />
                Curated for discovery, not crowded itineraries
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="mb-4 text-sm font-semibold text-stone-900">Explore</h4>
              <ul className="space-y-3 text-muted-foreground">
                {exploreLinks.map((link) => (
                  <li key={link.to}>
                    <Link className="transition hover:text-foreground" to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-stone-900">Company</h4>
              <ul className="space-y-3 text-muted-foreground">
                {companyLinks.map((link) => (
                  <li key={link.to}>
                    <Link className="transition hover:text-foreground" to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-stone-900">Reach Us</h4>
            <div className="mt-4 space-y-3">
              <Link
                to="/contact"
                className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white/75 px-4 py-3 text-sm text-muted-foreground transition hover:text-foreground"
              >
                <Mail className="size-4 text-orange-600" />
                Ask about a trip, partnership, or guide request
              </Link>

              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/75 px-4 py-2">
                  <Instagram className="size-4 text-orange-600" />
                  Instagram
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/75 px-4 py-2">
                  <Sparkles className="size-4 text-orange-600" />
                  Story-led brand
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 border-t border-orange-100" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} HiddenBharat. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link className="transition hover:text-foreground" to="/destinations">
              Browse destinations
            </Link>
            <Link className="transition hover:text-foreground" to="/stories">
              Read stories
            </Link>
            <Link className="transition hover:text-foreground" to="/contact">
              Plan a trip
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
