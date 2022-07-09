import type { RefObject } from "react";
import { useRef } from "react";

export const useLatest = <T>(val: T): RefObject<T> => {
  const ref = useRef(val);
  ref.current = val;
  return ref;
};
