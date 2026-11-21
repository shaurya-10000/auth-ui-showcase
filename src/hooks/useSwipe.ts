import { useCallback, useRef } from "react";
import type { TouchEvent } from "react";

interface UseSwipeOptions {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  /** Minimum horizontal distance (px) to count as a swipe */
  threshold?: number;
}

export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 50 }: UseSwipeOptions) {
  const start = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    start.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const onTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (!start.current) return;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - start.current.x;
      const dy = touch.clientY - start.current.y;
      start.current = null;

      // Ignore short moves and mostly-vertical gestures (page scroll)
      if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy) * 1.5) return;

      if (dx < 0) onSwipeLeft();
      else onSwipeRight();
    },
    [onSwipeLeft, onSwipeRight, threshold]
  );

  const onTouchCancel = useCallback(() => {
    start.current = null;
  }, []);

  return { onTouchStart, onTouchEnd, onTouchCancel };
}
