import { Button } from "@/components/ui/button";

export function CustomButton({
  children,
  onClick,
  type,
  buttonType,
  customStyle = "",
}) {
  let customClass = "overflow-hidden rounded-full px-6 py-6 font-normal ";

  if (buttonType === "Primary") {
    customClass +=
      "bg-[--button-accent-background-color] text-[--font-secondary-accent-color]";
  } else if (buttonType === "Secondary") {
    customClass +=
      "border border-[--button-border-color] bg-[--button-neutral-background-color] text-[--font-primary-accent-color] hover:bg-stone-100";
  }

  return (
    <Button
      className={`${customClass} ${customStyle}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
}
