import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function WantToConnect() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-orange-100/80 bg-[linear-gradient(135deg,rgba(255,247,237,0.92),rgba(255,255,255,0.96))] p-5 shadow-sm sm:p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-xs font-medium text-orange-700">
                Start your next journey
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
                Planning something special or still exploring?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                Share what kind of trip you want and HiddenBharat can help you
                shape a travel direction that feels slower, clearer, and more
                personal.
              </p>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-stone-950 p-5 text-white shadow-sm">
              <p className="text-sm font-medium">Prefer a full conversation?</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Use the contact page for partnerships, guide applications, or
                detailed travel planning requests.
              </p>
              <Button asChild variant="secondary" className="mt-4 rounded-full">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Open Contact Page
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/70 bg-white/90 p-5 shadow-sm sm:p-6">
            <form className="space-y-5">
              <Input placeholder="Your name" className="h-12 rounded-2xl" />

              <Input
                type="email"
                placeholder="Email address"
                className="h-12 rounded-2xl"
              />

              <Textarea
                placeholder="Tell us what kind of trip you're dreaming about"
                className="min-h-36 rounded-2xl"
              />

              <Button size="lg" className="w-full rounded-full">
                Send Enquiry <Send />
              </Button>
            </form>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              No spam. No pushy calls. Just meaningful travel guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
