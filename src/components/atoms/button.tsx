import React, { forwardRef } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./buttonVariants";
import { useButton, UseButtonProps } from "./useButton";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> &
  UseButtonProps & {
    label?: string;
    children?: React.ReactNode;
    asChild?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "ghost";
    kind?: string;
    className?: string;
  };

export const Button = forwardRef<HTMLElement, ButtonProps>(
  ({ children, label, asChild = false, variant, size, kind, className, ...props }, ref) => {
    const { stateProps, content } = useButton(props);

    const buttonClass =
      cn(buttonVariants({ variant, size, kind }), className, {
        "w-full": stateProps.block,
        "cursor-pointer": stateProps.cursor,
        "opacity-50 cursor-not-allowed": stateProps.disabled,
      });

    const Comp = asChild ? Slot : "button";
    const isButton = !asChild;

    return (
      <Comp
        ref={ref}
        {...props}
        {...stateProps}
        {...(isButton && { type: "button" })}
        className={buttonClass}
      >
        {stateProps.leftElement && <span>{stateProps.leftElement}</span>}
        {stateProps.icon && stateProps.iconPosition === "left" && <span>{stateProps.icon}</span>}
        {content(children, label) && (asChild ? <Slottable>{content(children, label)}</Slottable> : content(children, label))}
        {stateProps.icon && stateProps.iconPosition === "right" && <span>{stateProps.icon}</span>}
        {stateProps.rightElement && <span>{stateProps.rightElement}</span>}
      </Comp>
    );
  }
);

Button.displayName = "Button";
