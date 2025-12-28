import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function WantToConnect() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          {/* Heading */}
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Want to connect?
          </h2>

          <p className="mt-4 text-muted-foreground">
            Have a destination in mind or just exploring ideas?
            Share a few details and we’ll help you plan — no pressure.
          </p>
        </div>

        {/* Form Card */}
        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border bg-background p-6 shadow-sm">
          <form className="space-y-5">
            {/* Name */}
            <Input
              placeholder="Your name"
              className="h-12"
            />

            {/* Email */}
            <Input
              type="email"
              placeholder="Email address"
              className="h-12"
            />

            {/* Message */}
            <Textarea
              placeholder="Tell us what kind of trip you’re thinking about (optional)"
              className="min-h-30"
            />

            {/* CTA */}
            <Button size="lg" className="w-full">
              Send Enquiry <Send/>
            </Button>
          </form>
        </div>

        {/* Reassurance */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          No spam. No sales calls. Just meaningful travel guidance.
        </p>
      </div>
    </section>
  );
}
