"use client";

import { useNavigate, Link } from "react-router-dom";
import { Compass, ShieldCheck, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/store/auth.store";

const trustPoints = [
  "Continue discovering destinations and stories",
  "Role-based access for user and admin journeys",
  "Google sign-in and secure Appwrite sessions",
];

function Login() {
  const { register, handleSubmit } = useForm();
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      await login(email, password);
      navigate("/");
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSubmit = async () => {
    await loginWithGoogle();
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-200/45 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="order-2 mx-auto w-full max-w-lg rounded-[2rem] border border-orange-100/80 bg-white/88 p-6 shadow-lg backdrop-blur sm:p-8 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-medium text-orange-700">
            <Sparkles className="size-4" />
            Welcome back to HiddenBharat
          </div>

          <div className="mt-5">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              Sign in and continue your travel story
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
              Access curated destinations, thoughtful stories, and your next
              meaningful journey.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@hiddenbharat.com"
                {...register("email")}
                className="h-12 rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary transition hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="h-12 rounded-2xl"
              />
            </div>

            <Button type="submit" size="lg" className="w-full rounded-full">
              Sign In
            </Button>

            <div className="relative flex items-center">
              <div className="grow border-t border-orange-100" />
              <span className="mx-3 text-xs text-muted-foreground">OR</span>
              <div className="grow border-t border-orange-100" />
            </div>

            <Button
              onClick={handleGoogleSubmit}
              type="button"
              variant="outline"
              size="lg"
              className="w-full rounded-full"
            >
              <img
                className="h-5 w-5"
                src="/google-icon.svg"
                alt="Google"
              />
              Continue with Google
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary transition hover:underline">
                Create one
              </Link>
            </p>
          </form>
        </div>

        <div className="order-1 lg:order-2">
          <div className="rounded-[2rem] border border-orange-100/80 bg-[linear-gradient(150deg,rgba(255,247,237,0.92),rgba(255,255,255,0.9))] p-5 shadow-lg sm:p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-orange-700 shadow-sm">
                  <Compass className="size-4" />
                  Premium travel discovery
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
                  Travel deeper, not louder
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  HiddenBharat is built for travelers looking for slower pace,
                  stronger local character, and better stories from the road.
                </p>

                <div className="mt-6 space-y-3">
                  {trustPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white/80 px-4 py-3 text-sm text-stone-700"
                    >
                      <ShieldCheck className="size-4 text-orange-600" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-orange-200/60 blur-3xl" />
                <img
                  src="/login.svg"
                  alt="HiddenBharat travel illustration"
                  className="relative z-10 mx-auto w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
