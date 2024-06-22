import { style, keyframes } from "@vanilla-extract/css";

const fadeInAnimation = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

const barAnimation = keyframes({
  "0%": {
    width: "0%",
  },
  "100%": {
    width: "100%",
  },
});

const flushAnimation = keyframes({
  "0%": {
    opacity: 0,
    fill: "#333",
  },
  "100%": {
    opacity: 1,
    fill: "#fff",
  },
});

const leftHandAnimation = keyframes({
  "0%": {
    transform: "rotate(-7deg)",
  },
  "100%": {
    transform: "rotate(-4deg) translateX(3px) ",
  },
});

const rightHandAnimation = keyframes({
  "0%": {
    transform: "rotate(10deg)",
  },
  "100%": {
    transform: "rotate(8deg) translateX(3px) ",
  },
});

export const bar = style({
  animation: `${barAnimation} 2s ease-in-out forwards`,
});

const glassAnimation = keyframes({
  "0%": {
    transform: "rotate(0deg) translateX(0px)",
  },
  "100%": {
    transform: "rotate(-20deg) translateX(-20px)",
  },
});

export const glass = style({
  transformOrigin: "left bottom",
  opacity: 0,
  animation: `${glassAnimation} 2s ease-in-out forwards, ${fadeInAnimation} 2s ease-in-out forwards`,
});

export const flush = style({
  animation: `${flushAnimation} 3s ease-in-out forwards`,
});

export const leftHand = style({
  animation: `${leftHandAnimation} 2s ease-in-out forwards`,
});

export const rightHand = style({
  animation: `${rightHandAnimation} 2s ease-in-out forwards`,
});

export const _stub = style({
  animation: `${fadeInAnimation} 2s ease-in-out forwards`,
});
