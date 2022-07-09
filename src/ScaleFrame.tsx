import _throttle from "lodash.throttle";
import type { ReactNode } from "react";
import React, { useMemo, useRef } from "react";

import type { Paint } from "./lib/paint";
import { paint } from "./lib/paint";
import useDimensions from "./lib/useDimensions";

export type ScaleFrameProps = {
  children: ReactNode;
  width: Paint["contentWidth"];
  height: Paint["contentHeight"];
  offset?: Paint["offset"];
  throttle?: number; // ms
};

export const ScaleFrame = ({
  children,
  width,
  height,
  offset = 1,
  throttle = 500,
}: ScaleFrameProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Dimensions of the content before it's scaled
  const contentWidth = width;
  const contentHeight = height;
  const contentOffset = offset;

  const { observe } = useDimensions<HTMLDivElement>({
    onResize: useMemo(
      () =>
        _throttle(({ width, height }) => {
          paint({
            contentRef: contentRef,
            contentWidth: contentWidth,
            contentHeight: contentHeight,
            containerWidth: width,
            containerHeight: height,
            offset: contentOffset,
          });
        }, throttle),
      [contentHeight, contentWidth, contentOffset]
    ),
  });

  return (
    <div
      ref={observe}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};
