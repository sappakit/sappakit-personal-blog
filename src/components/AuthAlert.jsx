import { X } from "lucide-react";
import { CustomButton } from "./CustomUi";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

function AuthAlert({ loginAlert, setLoginAlert }) {
  return (
    <>
      <AlertDialog open={loginAlert} onOpenChange={setLoginAlert}>
        <AlertDialogContent className="flex max-w-[20rem] flex-col items-center justify-center gap-6 !rounded-2xl px-6 pb-9 pt-16 md:max-w-[35rem] md:gap-10 md:px-10 md:pb-10">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-2xl md:text-4xl">
              Create an account to continue
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            <CustomButton buttonType="Primary" customStyle="w-[12rem]">
              Create account
            </CustomButton>
          </AlertDialogDescription>
          <AlertDialogFooter>
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
          </AlertDialogFooter>
          <AlertDialogCancel className="absolute right-0 top-0 m-0 -translate-x-1/4 translate-y-1/4 rounded-full border-none p-2">
            <X className="!size-5" />
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default AuthAlert;
