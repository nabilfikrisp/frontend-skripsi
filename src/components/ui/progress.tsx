import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const colorPercent = (probability: number) => {
  if (probability < 80) return "bg-orange-600";
  if (probability < 25) return "bg-red-600";
  return "bg-primary";
};

type ProgressProps = {
  value: number;
  withColorPercent?: boolean;
} & React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>;

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(({ className, value, withColorPercent, ...props }, ref) => (
  <ProgressPrimitive.Root ref={ref} className={cn("relative h-4 w-full overflow-hidden rounded-full border border-primary bg-secondary", className)} {...props}>
    <ProgressPrimitive.Indicator
      className={cn("h-full w-full flex-1 transition-all", withColorPercent ? colorPercent(value) : "bg-primary")}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
