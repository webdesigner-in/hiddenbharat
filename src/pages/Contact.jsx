import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ---------------- Topics ---------------- */
const TOPICS = [
  {
    value: "general",
    label: "General Inquiry",
    description: "Questions about HiddenBharat or our platform",
  },
  {
    value: "planning",
    label: "Travel Planning Help",
    description: "Need help planning your next trip",
  },
  {
    value: "issue",
    label: "Report an Issue",
    description: "Something not working as expected",
  },
  {
    value: "partner",
    label: "Partnership / Collaboration",
    description: "Work with HiddenBharat",
  },
  {
    value: "guide",
    label: "Become a Guide",
    description: "Request to join us as a local guide",
  },
];

export default function Contact() {
  const [topic, setTopic] = useState("general");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Later: Appwrite / Email integration
    setTimeout(() => {
      setLoading(false);
      alert("Your message has been sent successfully!");
    }, 1200);
  }

  return (
    <main>
      {/* ---------- HEADER ---------- */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-semibold md:text-5xl">
            Get in touch with HiddenBharat
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Whether you’re planning a journey, facing an issue, or want to
            work with us — we’re here to listen.
          </p>
        </div>
      </section>

      {/* ---------- FORM ---------- */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border bg-background p-6 md:p-8"
          >
            {/* Topic Selector */}
            <div className="mb-6">
              <label className="mb-3 block text-sm font-medium">
                What would you like to contact us about?
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                {TOPICS.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => setTopic(t.value)}
                    className={cn(
                      "rounded-xl border p-4 text-left transition",
                      topic === t.value
                        ? "border-primary bg-primary/5"
                        : "hover:bg-muted"
                    )}
                  >
                    <p className="text-sm font-medium">{t.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {t.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Basic Info */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm">Full Name</label>
                <input
                  required
                  className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Guide-specific fields */}
            {topic === "guide" && (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm">City / Region</label>
                  <input
                    className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                    placeholder="Where you operate"
                  />
                </div>

                <div>
                  <label className="text-sm">Years of Experience</label>
                  <input
                    className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                    placeholder="e.g. 3 years"
                  />
                </div>
              </div>
            )}

            {/* Message */}
            <div className="mt-6">
              <label className="text-sm">Message</label>
              <textarea
                required
                rows={5}
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                placeholder={
                  topic === "guide"
                    ? "Tell us about your experience and why you want to join HiddenBharat"
                    : "Write your message here…"
                }
              />
            </div>

            {/* Submit */}
            <div className="mt-8 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                We usually respond within 24–48 hours.
              </p>

              <Button disabled={loading}>
                {loading ? "Sending…" : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* ---------- FAQ SECTION ---------- */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 text-center text-3xl font-semibold">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How long does it take to get a response?
              </AccordionTrigger>
              <AccordionContent>
                We usually respond within 24–48 hours. For guide and
                partnership requests, it may take slightly longer due to
                verification.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                How can I become a guide on HiddenBharat?
              </AccordionTrigger>
              <AccordionContent>
                Select “Become a Guide” while filling the contact form and
                share details about your experience and region. Our team
                will review your request.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is HiddenBharat a travel booking platform?
              </AccordionTrigger>
              <AccordionContent>
                No. HiddenBharat focuses on discovery and meaningful travel
                experiences. We help travelers explore destinations rather
                than pushing bookings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                I found an issue on the website. What should I do?
              </AccordionTrigger>
              <AccordionContent>
                Please select “Report an Issue” in the contact form and
                describe the problem. Screenshots or steps to reproduce are
                very helpful.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}