"use client";

import { Link } from "react-router-dom";
import { KeyRound, MailCheck, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function ForgotPassword() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("Reset link sent to:", data.email);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-200/45 blur-3xl" />
        <div className="absolute bottom-8 left-8 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="mx-auto w-full max-w-lg rounded-[2rem] border border-orange-100/80 bg-white/88 p-6 shadow-lg sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-medium text-orange-700">
            <Sparkles className="size-4" />
            Recover your account
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            Reset your password without the stress
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
            Enter your email and we'll send you a reset link so you can get
            back to planning meaningful journeys.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-6 rounded-[1.75rem] border border-orange-100 bg-white/80 p-5 shadow-sm"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@hiddenbharat.com"
                {...register("email")}
                className="h-12 rounded-2xl"
              />
            </div>

            <Button type="submit" size="lg" className="w-full rounded-full">
              Send reset link
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Remembered your password?{" "}
            <Link to="/login" className="text-primary transition hover:underline">
              Back to login
            </Link>
          </p>
        </div>

        <div className="relative hidden lg:block">
          <div className="rounded-[2rem] border border-orange-100/80 bg-[linear-gradient(150deg,rgba(255,247,237,0.92),rgba(255,255,255,0.92))] p-8 shadow-lg">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-orange-700 shadow-sm">
                  <KeyRound className="size-4" />
                  Secure reset flow
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-900">
                  Quick recovery, same calm experience
                </h3>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white/80 px-4 py-3 text-sm text-stone-700">
                    <MailCheck className="size-4 text-orange-600" />
                    Receive a link and update your password securely
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white/80 px-4 py-3 text-sm text-stone-700">
                    <MailCheck className="size-4 text-orange-600" />
                    Return to your account and keep exploring
                  </div>
                </div>
              </div>

              <img
                src="/Forgot password.svg"
                alt="Reset password illustration"
                className="mx-auto w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
