import { Button } from "@/components/ui/button";

export function CustomButton({ children, onClick, type }) {
  if (type === "Primary") {
    return (
      <Button
        className="rounded-full bg-[--button-accent-background-color] px-6 py-6 font-normal text-[--font-secondary-accent-color]"
        onClick={onClick}
      >
        {children}
      </Button>
    );
  } else if (type === "Secondary") {
    return (
      <Button
        className="rounded-full border border-[--button-border-color] bg-[--button-neutral-background-color] px-6 py-6 font-normal text-[--font-primary-accent-color]"
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
}
