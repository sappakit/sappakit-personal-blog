import { Button } from "@/components/ui/button";

export function CustomButton({
  children,
  onClick,
  type,
  buttonType,
  customStyle = "",
}) {
  if (buttonType === "Primary") {
    return (
      <Button
        className={`${customStyle} overflow-hidden rounded-full bg-[--button-accent-background-color] px-6 py-6 font-normal text-[--font-secondary-accent-color]`}
        onClick={onClick}
        type={type}
      >
        {children}
      </Button>
    );
  } else if (buttonType === "Secondary") {
    return (
      <Button
        className={`${customStyle} overflow-hidden rounded-full border border-[--button-border-color] bg-[--button-neutral-background-color] px-6 py-6 font-normal text-[--font-primary-accent-color] hover:bg-stone-100`}
        onClick={onClick}
        type={type}
      >
        {children}
      </Button>
    );
  }
}
