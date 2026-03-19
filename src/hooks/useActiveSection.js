import { useEffect, useState } from 'react'

function useActiveSection(mainRef, navItems) {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id ?? '')

  useEffect(() => {
    const scrollRoot = mainRef.current
    const sectionElements = Array.from(
      scrollRoot?.querySelectorAll('[data-section-key]') ?? [],
    )

    if (!scrollRoot || sectionElements.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio,
          )

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.dataset.sectionKey)
        }
      },
      {
        root: scrollRoot,
        threshold: [0.45, 0.7, 0.9],
        rootMargin: '0px',
      },
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [mainRef, navItems])

  return activeSection
}

export default useActiveSection
