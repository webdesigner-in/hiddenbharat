"use client";

import { Link, useNavigate } from "react-router-dom";
import { Compass, HeartHandshake, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/store/auth.store";

const signupBenefits = [
  "Save your place in a story-led travel platform",
  "Discover curated destinations and packages faster",
  "Join a calmer, more thoughtful way to explore India",
];

function Signup() {
  const { register, handleSubmit } = useForm();
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { fullname, email, password } = data;
      await signup(email, password, fullname);
      navigate("/");
      toast.success("Account created");
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
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-orange-200/45 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-amber-200/35 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="order-2 lg:order-1">
          <div className="rounded-[2rem] border border-orange-100/80 bg-[linear-gradient(150deg,rgba(255,247,237,0.92),rgba(255,255,255,0.9))] p-5 shadow-lg sm:p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-orange-700 shadow-sm">
                  <Compass className="size-4" />
                  Join HiddenBharat
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
                  Start planning trips that feel personal
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Create your account to unlock a cleaner, calmer travel
                  discovery experience built around real places and better pace.
                </p>

                <div className="mt-6 space-y-3">
                  {signupBenefits.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white/80 px-4 py-3 text-sm text-stone-700"
                    >
                      <HeartHandshake className="size-4 text-orange-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-orange-200/60 blur-3xl" />
                <img
                  src="/Signup.svg"
                  alt="HiddenBharat travel illustration"
                  className="relative z-10 mx-auto w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-lg rounded-[2rem] border border-orange-100/80 bg-white/88 p-6 shadow-lg backdrop-blur sm:p-8 lg:order-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-medium text-orange-700">
            <Sparkles className="size-4" />
            Create your HiddenBharat account
          </div>

          <div className="mt-5">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              Sign up for slower, smarter travel inspiration
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
              Save your progress and explore India through destinations, stories,
              and travel ideas that feel genuinely curated.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="fullname">Full name</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="John Doe"
                {...register("fullname")}
                className="h-12 rounded-2xl"
              />
            </div>

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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a secure password"
                {...register("password")}
                className="h-12 rounded-2xl"
              />
            </div>

            <Button type="submit" size="lg" className="w-full rounded-full">
              Create Account
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
              <img className="h-5 w-5" src="/google-icon.svg" alt="Google" />
              Continue with Google
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary transition hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
