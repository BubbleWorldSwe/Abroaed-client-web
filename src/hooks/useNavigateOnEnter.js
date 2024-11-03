import { useEffect } from 'react';

function useNavigateOnEnter() {
  useEffect(() => {
    const focusNextElement = (currentNavIndex) => {
      const elementsWithNavIndex = document.querySelectorAll('[navindex]');
      let closestElement = null,
        closestNavIndex = Infinity;
      elementsWithNavIndex.forEach((element) => {
        if (element.disabled) return;
        const elementNavIndex = parseInt(element.getAttribute('navindex'), 10);
        if (elementNavIndex > currentNavIndex && elementNavIndex < closestNavIndex) {
          closestNavIndex = elementNavIndex;
          closestElement = element;
        }
      });
      if (closestElement) {
        closestElement.focus();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        const currentElement = document.activeElement;
        const currentNavIndex = currentElement.getAttribute('navindex');
        if (currentNavIndex === null) {
          return;
        }
        if (currentElement?.type !== 'button' && currentElement?.type !== 'submit') {
          event.preventDefault();
        }
        focusNextElement(currentNavIndex);
      }
    };

    focusNextElement(-1);

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}

export default useNavigateOnEnter;
