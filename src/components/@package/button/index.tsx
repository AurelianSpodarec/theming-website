import { useState, useCallback } from "react";

export interface UseButtonProps {
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  block?: boolean;
  cursor?: boolean;
}

export function useButton({
  disabled = false,
  isLoading = false,
  loadingText,
  leftElement,
  rightElement,
  icon,
  iconPosition = "left",
  block = false,
  cursor = true,
}: UseButtonProps) {
  const [loading, setLoading] = useState(isLoading);

  const toggleLoading = useCallback((state?: boolean) => {
    if (state !== undefined) setLoading(state);
    else setLoading((prev) => !prev);
  }, []);

  const content = (children?: React.ReactNode, label?: string) =>
    loading ? loadingText || children || label : children || label;

  const stateProps = {
    disabled: disabled || loading,
    loading,
    leftElement,
    rightElement,
    icon,
    iconPosition,
    block,
    cursor,
  };

  return { stateProps, content, toggleLoading, setLoading };
}
