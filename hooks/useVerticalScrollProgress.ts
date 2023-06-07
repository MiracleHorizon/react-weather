import { type RefObject, useCallback, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

export function useVerticalScrollProgress({
  positions,
  ...options
}: Parameters) {
  const { scrollYProgress } = useScroll(options)
  const [isScrollOnTop, setIsScrollOnTop] = useState(true)
  const [isScrollOnBottom, setIsScrollOnBottom] = useState(false)

  const handleVerticalScroll = useCallback(
    (latest: number): void => {
      if (positions.includes('top')) {
        if (isScrollOnTop && latest === 1) return
        if (latest > 0) setIsScrollOnTop(false)
        if (latest === 0) setIsScrollOnTop(true)
        if (latest === 1) setIsScrollOnTop(true)
      }

      if (positions.includes('bottom')) {
        if (latest >= 1) setIsScrollOnBottom(true)
        if (latest < 1) setIsScrollOnBottom(false)
      }
    },
    [isScrollOnTop, positions]
  )

  useMotionValueEvent(scrollYProgress, 'change', handleVerticalScroll)

  return { isScrollOnTop, isScrollOnBottom }
}

interface Parameters extends UseScrollOptions {
  positions: NonEmptyArray<'top' | 'bottom'>
}

interface UseScrollOptions extends Omit<ScrollOptions, 'container' | 'target'> {
  container?: RefObject<HTMLElement>
  target?: RefObject<HTMLElement>
  layoutEffect?: boolean
}

type NonEmptyArray<T> = [T, ...T[]]
