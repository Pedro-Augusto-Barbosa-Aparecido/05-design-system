import * as Toast from "@radix-ui/react-toast";
import { styled } from "@stitches/react";
import { Box } from "../Box";
import { keyframes } from "../../styles";

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 20px))` },
  to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + 20px))` },
});

export const ToastContainer = styled(Toast.Root, {
  all: "unset",

  padding: "$5",

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: "translateX(var(--radix-toast-swipe-move-x))",
  },
  '&[data-swipe="cancel"]': {
    transform: "translateX(0)",
    transition: "transform 200ms ease-out",
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
});

export const ToastTitle = styled(Toast.Title, {
  color: "$white",
});

export const ToastDescription = styled(Toast.Description, {
  p: {
    color: "$gray200",
  },
});

export const ToastContent = styled(Box, {
  gap: "$1",

  padding: "$3 $5",

  minHeight: 82,

  display: "flex",

  alignItems: "flex-start",
  justifyContent: "center",

  flexDirection: "column",
});

export const ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,

  display: "flex",
  flexDirection: "column",

  padding: 0,

  width: 390,
  maxWidth: "100vw",

  margin: 0,

  listStyle: "none",

  zIndex: 2147483647,

  outline: "none",
});

export const ToastAction = styled(Toast.Action, {
  color: "$gray200",

  position: "absolute",

  top: "$10",
  right: "$10",
});
