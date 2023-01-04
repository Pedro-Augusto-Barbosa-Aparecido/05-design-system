import React, { ComponentProps } from "react";

import {
  ToastAction,
  ToastContainer,
  ToastContent,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from "./styles";
import * as ToastRadix from "@radix-ui/react-toast";
import { X } from "phosphor-react";
import { Heading } from "../Heading";

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string;
  children: React.ReactNode;
}

export function Toast({ title, children, ...rest }: ToastProps) {
  return (
    <>
      <ToastContainer {...rest}>
        <ToastContent>
          <ToastTitle asChild>
            <Heading>{title}</Heading>
          </ToastTitle>
          <ToastDescription>{children}</ToastDescription>
          <ToastAction asChild altText="Close Message">
            <X size={24} weight="bold" />
          </ToastAction>
        </ToastContent>
      </ToastContainer>
      <ToastViewport />
    </>
  );
}

interface ToastProviderProps
  extends ComponentProps<typeof ToastRadix.Provider> {}

export function ToastProvider({ children, ...rest }: ToastProviderProps) {
  return (
    <ToastRadix.Provider swipeDirection="right" {...rest}>
      {children}
    </ToastRadix.Provider>
  );
}

Toast.displayName = "Toast";
ToastProvider.displayName = "ToastProvider";
