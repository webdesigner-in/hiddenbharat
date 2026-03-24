import { useState } from "react";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TOPICS = [
  {
    value: "general",
    label: "General Inquiry",
    description: "Questions about HiddenBharat or our platform",
  },
  {
    value: "planning",
    label: "Travel Planning Help",
    description: "Need help shaping your next trip",
  },
  {
    value: "issue",
    label: "Report an Issue",
    description: "Something is not working as expected",
  },
  {
    value: "partner",
    label: "Partnership / Collaboration",
    description: "Work with HiddenBharat",
  },
  {
    value: "guide",
    label: "Become a Guide",
    description: "Apply as a local guide",
  },
];

export default function Contact() {
  const [topic, setTopic] = useState("general");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Your message has been sent successfully!");
    }, 1200);
  }

  return (
    <main className="relative overflow-hidden pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-200/35 blur-3xl" />
      </div>

      <section className="px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-orange-100/80 bg-[linear-gradient(135deg,rgba(255,247,237,0.92),rgba(255,255,255,0.96))] p-6 shadow-sm sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-orange-700 shadow-sm">
            <Sparkles className="size-4" />
            Let's plan something thoughtful
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Get in touch with HiddenBharat
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Whether you're planning a journey, facing an issue, or hoping to
            collaborate, we're here to listen.
          </p>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[2rem] border border-orange-100/80 bg-stone-950 p-6 text-white shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold">Why reach out?</h2>
            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/75">
                Personalized travel planning and destination guidance
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/75">
                Partnership and local guide opportunities
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/75">
                Support for bugs, issues, and platform feedback
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-orange-100/80 bg-white/90 p-6 shadow-sm sm:p-8"
          >
            <div className="mb-6">
              <label className="mb-3 block text-sm font-medium text-stone-900">
                What would you like to contact us about?
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                {TOPICS.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setTopic(item.value)}
                    className={cn(
                      "rounded-[1.25rem] border p-4 text-left transition",
                      topic === item.value
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-orange-100 hover:bg-orange-50"
                    )}
                  >
                    <p className="text-sm font-medium text-stone-900">{item.label}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {item.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-stone-900">Full Name</label>
                <input
                  required
                  className="mt-2 w-full rounded-2xl border border-orange-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm text-stone-900">Email</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-orange-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {topic === "guide" && (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-stone-900">City / Region</label>
                  <input
                    className="mt-2 w-full rounded-2xl border border-orange-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Where you operate"
                  />
                </div>

                <div>
                  <label className="text-sm text-stone-900">Years of Experience</label>
                  <input
                    className="mt-2 w-full rounded-2xl border border-orange-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="e.g. 3 years"
                  />
                </div>
              </div>
            )}

            <div className="mt-6">
              <label className="text-sm text-stone-900">Message</label>
              <textarea
                required
                rows={5}
                className="mt-2 w-full rounded-[1.5rem] border border-orange-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                placeholder={
                  topic === "guide"
                    ? "Tell us about your experience and why you'd like to join HiddenBharat"
                    : "Write your message here..."
                }
              />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                We usually respond within 24-48 hours.
              </p>

              <Button disabled={loading} className="rounded-full px-6">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-orange-100/80 bg-white/90 p-6 shadow-sm sm:p-8">
          <h2 className="mb-6 text-center text-3xl font-semibold text-stone-900">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How long does it take to get a response?
              </AccordionTrigger>
              <AccordionContent>
                We usually respond within 24-48 hours. Guide and partnership
                requests may take slightly longer because of verification.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                How can I become a guide on HiddenBharat?
              </AccordionTrigger>
              <AccordionContent>
                Choose "Become a Guide" in the form and share your experience,
                region, and why you'd like to work with us.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is HiddenBharat a travel booking platform?
              </AccordionTrigger>
              <AccordionContent>
                HiddenBharat focuses on discovery and thoughtful travel
                experiences rather than pushing direct bookings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                I found an issue on the website. What should I do?
              </AccordionTrigger>
              <AccordionContent>
                Select "Report an Issue" in the form and describe what happened.
                Screenshots and reproduction steps are always helpful.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}
