import type { RootState } from '@/store';
import breakpoints from '@/utils/breakpoints';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { setIndex } from '@/store/app/menuSlice';
import { betweenRange } from '@/utils';

function useMainMenu() {
  const prevOpen = useRef<boolean>(false);
  const dispatch = useDispatch();
  const [prevSection, setPrevSection] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const { app, section, menu } = useSelector((state: RootState) => ({
    app: state.app,
    menu: state.menu,
    section: state.section,
  }));

  const isMediumLandscape = useMediaQuery({ minWidth: breakpoints.mdL });

  const updateSelectedItem = useCallback(() => {
    if (!menu.open) return;

    let normY = window.cursorNormalized.y + 0.5;
    // On mobile the height of the menu line is 80vh
    if (!isMediumLandscape) {
      normY = normY * 1.2;
    }
    const length = section.boundaries.length;
    const min = 0;
    const max = length - 1;
    const itemIndex = betweenRange(Math.floor(normY * length), min, max);

    if (itemIndex !== menu.index) {
      dispatch(setIndex(itemIndex));
    }
  }, [dispatch, menu.open, menu.index, isMediumLandscape, section.boundaries.length]);

  const resetMenuIndex = useCallback(() => {
    dispatch(setIndex(-1));
    // }, [dispatch, menu.index]);
  }, [dispatch]);

  useEffect(() => {
    // Open menu
    if (menu.open && prevOpen.current === false) {
      // Disable scroll
      // disablePageScroll()

      // Save current section
      setPrevSection(section.current);

      // Highlight first item
      updateSelectedItem();

      // Animate menu items
      const titles = window.experience.world.titles;
      for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        title.menuOpen(i);
      }
    }

    // Close menu
    if (!menu.open && prevOpen.current === true) {
      // Enable scroll
      // enablePageScroll()

      // Scroll the page
      const selectedItem = section.boundaries[menu.index];
      const selectedSection = selectedItem.name;
      if (selectedSection !== prevSection) {
        window.scrollTo(0, selectedItem.start);
        // gsap.to(window, {
        //   scrollTo: selectedItem.start,
        //   duration: 1.5,
        //   ease: 'power3.out',
        //   onStart: () => {
        //     setIsScrolling(true)
        //   },
        //   onComplete: () => {
        //     setIsScrolling(false)
        //   }
        // })
      }

      // Restore menu items
      const titles = window.experience.world.titles;
      for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        title.menuClose();
      }

      // Reset menu index
      resetMenuIndex();
    }

    prevOpen.current = menu.open;
  }, [menu.index, menu.open, prevSection, resetMenuIndex, section, app.height, updateSelectedItem]);

  useEffect(() => {
    window.addEventListener('mousedown', updateSelectedItem);
    window.addEventListener('touchmove', updateSelectedItem);
    return () => {
      window.addEventListener('mousedown', updateSelectedItem);
      window.addEventListener('touchmove', updateSelectedItem);
    };
  }, [updateSelectedItem]);

  return { isScrolling };
}

export default useMainMenu;
