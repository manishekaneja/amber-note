import React, { FC } from "react";

const PinnedIcon: FC<{ active: boolean }> = ({ active }) => {
  if (active) {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="3" y1="3" x2="21" y2="21" />
        <path d="M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251" />
        <line x1="9" y1="15" x2="4.5" y2="19.5" />
        <line x1="14.5" y1="4" x2="20" y2="9.5" />
      </svg>
    );
  }
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
      <line x1="9" y1="15" x2="4.5" y2="19.5" />
      <line x1="14.5" y1="4" x2="20" y2="9.5" />
    </svg>
  );
};

export default PinnedIcon;