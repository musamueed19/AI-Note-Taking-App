"use client";

import { useRouter } from "next/navigation";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type Props = {
  type: "login" | "signUp";
};

const AuthForm = ({ type }: Props) => {
  // useRouter
  const router = useRouter();

  // useTransition
  const [isPending, startTransition] = useTransition();

  // checking formType
  const isLoginForm = type === "login";

  async function handleSubmit(formData: FormData) {
    console.log("form submitted...");
  }

  // for "server action", we are gonna using
  // useTransition, which is a hook, from these "isPending" is one of the things - which is a Boolean, that returns true / false
  // when server action is "occurring", this isPending is set to "True" - shows a loading state
  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        {/* email field */}
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            type="email"
            required
            disabled={isPending}
          ></Input>
        </div>

        {/* password field */}
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            required
            disabled={isPending}
          ></Input>
        </div>
      </CardContent>

      {/* card footer */}
      <CardFooter className="mt-10 flex flex-col gap-6">
        <Button className="w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Sign Up"
          )}
        </Button>

        {/* helpful links */}
        <p className="text-sm">
          {isLoginForm
            ? "Don't have an account yet?"
            : "Already have an account?"}{" "}
          <Link
            href={isLoginForm ? "/sign-up" : "/login"}
            className={`font-medium text-blue-500 underline hover:text-blue-600 ${isPending && "pointer-events-none opacity-50"}`}
          >
            {isLoginForm ? "Sign Up" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
};

export default AuthForm;
