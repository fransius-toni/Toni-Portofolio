import { useState, useEffect } from 'react';

/**
 * Returns the ID of the section currently in view,
 * used to highlight the active navigation link.
 */
export function useScrollSpy(sectionIds: string[], offset = 100): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      // Find the section whose top edge is closest to the offset threshold
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset + 10) {
          current = id;
        }
      }
      setActiveId(current);
    };

    handleScroll(); // run on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
