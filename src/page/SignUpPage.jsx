import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { NavBar } from "@/components/NavBar";
import { CustomButton } from "@/components/CustomUi";

function CustomInput({ labelName, inputType, inputId, inputPlaceholder }) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={inputId} className="text-[--font-neutral-light-color]">
        {labelName}
      </Label>
      <Input
        className="h-11 border-[--nav-bar-border-color] font-medium text-[--font-neutral-light-color] placeholder:text-[--font-neutral-light-color] focus-visible:border-[--button-border-color] focus-visible:ring-0 focus-visible:ring-offset-0"
        type={inputType}
        id={inputId}
        placeholder={inputPlaceholder}
      />
    </div>
  );
}

function SignUpPage() {
  return (
    <>
      <NavBar />

      <main className="flex min-h-screen items-center justify-center p-3">
        <div className="flex w-[50rem] flex-col items-center gap-8 rounded-xl bg-[--bar-color] px-4 py-11 md:px-10 md:py-14 lg:gap-9">
          <h1 className="text-4xl font-semibold">Sign up</h1>

          <div className="flex w-full flex-col gap-6 md:w-3/4">
            <CustomInput
              labelName="Name"
              inputType="text"
              inputId="name"
              inputPlaceholder="Full name"
            />
            <CustomInput
              labelName="Username"
              inputType="text"
              inputId="username"
              inputPlaceholder="Username"
            />
            <CustomInput
              labelName="Email"
              inputType="email"
              inputId="email"
              inputPlaceholder="Email"
            />
            <CustomInput
              labelName="Password"
              inputType="password"
              inputId="password"
              inputPlaceholder="Password"
            />
          </div>

          <CustomButton buttonType="Primary" customStyle="w-32">
            Sign up
          </CustomButton>

          <div className="flex justify-between gap-3 text-sm font-medium md:text-base">
            <p className="text-center text-[--font-neutral-light-color]">
              Already have an account?
            </p>
            <a
              href=""
              className="text-center text-[--font-primary-accent-color] underline"
            >
              Log in
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUpPage;
