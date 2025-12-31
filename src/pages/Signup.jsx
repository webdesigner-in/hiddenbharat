"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/store/auth.store";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Signup() {
  const { register, handleSubmit } = useForm();
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { fullname, email, password } = data;
      await signup(email, password, fullname);
      navigate("/");
      toast.success("Account Created");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSubmit = async () => {
    await loginWithGoogle();
  };

  return (
    <section className="min-h-screen bg-background">
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1  items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 rounded-full bg-primary blur-[180px]" />
          <img
            src="/Signup.svg"
            alt="HiddenBharat travel illustration"
            className="relative z-10 mx-auto max-w-lg"
          />
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Create Account
            </h2>
            <p className="mt-2 text-muted-foreground">
              Create Account and Start Booking Now.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Fullname</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="John Doe"
                {...register("fullname")}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@hiddenbharat.com"
                {...register("email")}
                className="h-12"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
                className="h-12"
              />

              {/* Forgot password */}
            </div>

            {/* CTA */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground cursor-pointer"
            >
              Create Account
            </Button>

            {/* Divider */}
            <div className="relative flex items-center">
              <div className="grow border-t" />
              <span className="mx-3 text-xs text-muted-foreground">OR</span>
              <div className="grow border-t" />
            </div>

            {/* Google Login */}
            <Button
              onClick={handleGoogleSubmit}
              type="button"
              variant="outline"
              size="lg"
              className="w-full lg:cursor-pointer"
            >
              <img
                className="w-6 h-6"
                src="google-icon.svg"
                alt="Google Login Illustratoin"
              />
              Continue with Google
            </Button>

            {/* Helper */}
            <p className="text-center text-sm text-muted-foreground">
              ALready have an account?{" "}
              <Link to={"/login"}>
                <span className="cursor-pointer text-primary hover:underline">
                  Log In
                </span>
              </Link>
            </p>
          </form>
        </div>

        {/* RIGHT: VISUAL (UNCHANGED) */}
      </div>
    </section>
  );
}

export default Signup;
