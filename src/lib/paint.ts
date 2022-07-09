import type { RefObject } from "react";

export type Paint = {
  /**
   * The reference to the content element.
   */
  contentRef: RefObject<HTMLElement>;
  /**
   * The width of the content element.
   */
  contentWidth: number;
  /**
   * The height of the content element.
   */
  contentHeight: number;
  /**
   * The width of the container.
   */
  containerWidth: number;
  /**
   * The height of the container.
   */
  containerHeight: number;
  /**
   * The offset of the content in relation to the container.
   *
   * You can use `offset` to adjust the scale of the content in relation to the
   * container before it is scaled to fit the container.
   */
  offset: number;
};

export const paint = ({
  contentRef,
  contentWidth,
  contentHeight,
  containerWidth,
  containerHeight,
  offset,
}: Paint) => {
  if (!contentRef.current) throw Error("contentRef is not assigned");

  const ratio = Math.min(
    containerWidth / contentWidth,
    containerHeight / contentHeight
  );

  const cw = contentWidth * ratio * offset;
  const ch = contentHeight * ratio * offset;

  contentRef.current.style.position = "absolute";
  contentRef.current.style.top = `${(containerHeight - ch) / 2}px`;
  contentRef.current.style.left = `${(containerWidth - cw) / 2}px`;
  contentRef.current.style.width = `${contentWidth}px`;
  contentRef.current.style.height = `${contentHeight}px`;
  contentRef.current.style.transform = `scale(${ratio * offset})`;
  contentRef.current.style.transformOrigin = "0px 0px";
};
