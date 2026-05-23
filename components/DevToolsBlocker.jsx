'use client';

import { useEffect } from 'react';

export default function DevToolsBlocker() {
  useEffect(() => {
    // 1. Disable Right-Click Context Menu
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // 2. Disable Common Inspect Keyboard Shortcuts
    const handleKeyDown = (e) => {
      if (
        // F12
        e.key === 'F12' ||
        // Ctrl + Shift + I or Cmd + Shift + I (Inspect Element)
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
        // Ctrl + Shift + J or Cmd + Shift + J (Console)
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
        // Ctrl + Shift + C or Cmd + Shift + C (Element Selector)
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
        // Ctrl + U or Cmd + U (View Source)
        ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u'))
      ) {
        e.preventDefault();
      }
    };

    // 3. Disable Dragging of Images/Content (Prevents reverse image search/saving)
    const handleDragStart = (e) => {
      e.preventDefault();
    };

    // Attach listeners to the global document object
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    // Clean up listeners if the component unmounts
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return null; // This component doesn't render any UI elements
}