"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

function ForgotPassword() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("Reset link sent to:", data.email);
  };

  return (
    <section className="min-h-screen bg-background">
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        {/* LEFT: FORM */}
        <div className="mx-auto w-full max-w-md">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Forgot your password?
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Enter your email and we’ll send you a link to reset your password.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 rounded-2xl border bg-card p-6 shadow-sm"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@hiddenbharat.com"
                {...register("email")}
                className="h-12"
              />
            </div>

            <Button type="submit" size="lg" className="w-full cursor-pointer">
              Send reset link
            </Button>
          </form>

          {/* Helper */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Remembered your password?{" "}
            <span className="cursor-pointer text-primary hover:underline">
              Back to login
            </span>
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative hidden md:flex items-center justify-center">
          {/* Subtle background glow */}
          <div className="absolute inset-0 flex justify-center">
            <div className="h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          </div>

          <img
            src="/Forgot password.svg"
            alt="Reset password illustration"
            className="relative z-10 w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
