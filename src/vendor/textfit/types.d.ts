// src/@types/textfit.d.ts

declare module '@/vendor/textfit' {
  type TextFitOptions = {
    widthOnly?: boolean;
    detectMultiLine?: boolean;
    maxFontSize?: number;
    minFontSize?: number;
    alignVert?: boolean;
    alignHoriz?: boolean;
    multiLine?: boolean;
    reProcess?: boolean;
    alignVertWithFlexbox?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };

  function textFit(elements: HTMLElement | HTMLElement[] | null, options?: TextFitOptions): void;

  export default textFit;
}
