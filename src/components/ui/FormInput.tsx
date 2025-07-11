import type React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "w-full px-4 py-2 border rounded-lg text-sm font-medium placeholder:text-secondary-text/20 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent",
          error ? "border-red-500" : "border-gray-300",
          className
        )}
        {...props}
      />
    );
  }
);

FormInput.displayName = "FormInput";
