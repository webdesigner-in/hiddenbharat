import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <img className="w-14 h-14 object-contain" src="logo.png" alt="HiddenBharat Logo"/>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Connecting travelers with authentic, meaningful journeys across
              India — while supporting local communities and sustainable travel.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="mb-3 font-medium">Explore</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Destinations</li>
                <li>Packages</li>
                <li>Stories</li>
                <li>Must Visit Places</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-medium">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Why Choose Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium">Stay in the loop</h4>
            <p className="mt-3 text-sm text-muted-foreground">
              Get thoughtful travel ideas and destination insights.
            </p>

            <div className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="h-10"
              />
              <Button size="sm">Subscribe</Button>
            </div>

            <p className="mt-2 text-xs text-muted-foreground">
              No spam. Only meaningful travel inspiration.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} HiddenBharat. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
