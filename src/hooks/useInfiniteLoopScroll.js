import { useEffect } from 'react'

function useInfiniteLoopScroll(mainRef) {
  useEffect(() => {
    const scrollRoot = mainRef.current

    if (!scrollRoot) {
      return undefined
    }

    let touchStartY = 0

    const loopToTop = () => {
      scrollRoot.scrollTo({
        top: 1,
        behavior: 'auto',
      })
    }

    const isAtBottom = () =>
      scrollRoot.scrollTop + scrollRoot.clientHeight >= scrollRoot.scrollHeight - 2

    const handleWheel = (event) => {
      if (event.deltaY > 0 && isAtBottom()) {
        loopToTop()
      }
    }

    const handleTouchStart = (event) => {
      touchStartY = event.touches[0]?.clientY ?? 0
    }

    const handleTouchMove = (event) => {
      const currentY = event.touches[0]?.clientY ?? 0

      if (touchStartY > currentY + 12 && isAtBottom()) {
        loopToTop()
        touchStartY = currentY
      }
    }

    scrollRoot.addEventListener('wheel', handleWheel, { passive: true })
    scrollRoot.addEventListener('touchstart', handleTouchStart, { passive: true })
    scrollRoot.addEventListener('touchmove', handleTouchMove, { passive: true })

    return () => {
      scrollRoot.removeEventListener('wheel', handleWheel)
      scrollRoot.removeEventListener('touchstart', handleTouchStart)
      scrollRoot.removeEventListener('touchmove', handleTouchMove)
    }
  }, [mainRef])
}

export default useInfiniteLoopScroll
