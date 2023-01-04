import React, { ComponentProps } from "react";
import { TooltipArrow, TooltipContainer, TooltipContent } from "./styles";

import * as TooltipRadix from "@radix-ui/react-tooltip";

export interface TooltipProps {
  message: string;
  trigger: React.ReactNode;
}

export function Tooltip({ message, trigger }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipRadix.Trigger asChild>{trigger}</TooltipRadix.Trigger>
      <TooltipRadix.Portal>
        <TooltipContent sideOffset={5}>
          {message}
          <TooltipArrow />
        </TooltipContent>
      </TooltipRadix.Portal>
    </TooltipContainer>
  );
}

export interface TooltipProviderProps
  extends ComponentProps<typeof TooltipRadix.Provider> {}

export function TooltipProvider({ children, ...rest }: TooltipProviderProps) {
  return <TooltipRadix.Provider {...rest}>{children}</TooltipRadix.Provider>;
}

Tooltip.displayName = "Tooltip";
TooltipProvider.displayName = "TooltipProvider";
