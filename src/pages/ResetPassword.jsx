"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router-dom";

function ResetPassword() {
  const { register, handleSubmit } = useForm();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Example URL: /reset-password?token=abc123
  const token = searchParams.get("token");

  const onSubmit = async (data) => {
    const payload = {
      token,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    console.log("Reset payload:", payload);

    // 👉 Call your API here
    // await resetPassword(payload);

    // After success
    navigate("/login");
  };

  return (
    <section className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Set a new password
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Choose a strong password to secure your account.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-2xl border bg-card p-6 shadow-sm"
        >
          {/* New Password */}
          <div className="space-y-2">
            <Label htmlFor="password">New password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className="h-12"
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm new password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              {...register("confirmPassword")}
              className="h-12"
            />
          </div>

          {/* CTA */}
          <Button type="submit" size="lg" className="w-full">
            Update password
          </Button>
        </form>

        {/* Helper */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          After resetting, you’ll be redirected to login.
        </p>
      </div>
    </section>
  );
}

export default ResetPassword;
