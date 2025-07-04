export {};

type Cursor = {
  x: number;
  y: number;
};

type CursorNormalized = {
  x: number;
  y: number;
};

declare global {
  type Sections = 'intro' | 'hero' | 'portfolio' | 'about' | 'contact';

  interface Window {
    cursor: Cursor;
    cursorNormalized: CursorNormalized;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    experience: any;
  }
}
