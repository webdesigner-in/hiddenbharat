"use client";

import { useNavigate, useSearchParams } from "react-router-dom";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function ResetPassword() {
  const { register, handleSubmit } = useForm();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");

  const onSubmit = async (data) => {
    const payload = {
      token,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    console.log("Reset payload:", payload);
    navigate("/login");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-orange-200/45 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl items-center justify-center">
        <div className="grid w-full gap-8 rounded-[2rem] border border-orange-100/80 bg-white/88 p-6 shadow-lg backdrop-blur sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-medium text-orange-700">
                <ShieldCheck className="size-4" />
                Update your password
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
                Choose a stronger password and head back in
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                Keep your account secure and continue exploring HiddenBharat
                with confidence.
              </p>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-orange-100 bg-orange-50/70 p-5">
              <p className="text-sm font-medium text-stone-900">Helpful tip</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Use a unique password you don't reuse elsewhere so your travel
                account stays protected.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 rounded-[1.75rem] border border-orange-100 bg-white/85 p-5 shadow-sm"
          >
            <div className="space-y-2">
              <Label htmlFor="password">New password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a new password"
                {...register("password")}
                className="h-12 rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm new password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Repeat your new password"
                {...register("confirmPassword")}
                className="h-12 rounded-2xl"
              />
            </div>

            <Button type="submit" size="lg" className="w-full rounded-full">
              <LockKeyhole className="size-4" />
              Update password
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              After resetting, you'll be redirected to login.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
