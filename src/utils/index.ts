const projVidSource = [
  {
    id: 'skReel',
    src: '/projects/sk/sk-reel.mp4',
  },
  {
    id: 'aqReel',
    src: '/projects/sk/sk-reel.mp4',
  },
  {
    id: 'fbReel',
    src: '/projects/sk/sk-reel.mp4',
  },
  {
    id: 'feudiReel',
    src: '/projects/sk/sk-reel.mp4',
  },
  {
    id: 'claralunaReel',
    src: '/projects/sk/sk-reel.mp4',
  },
];

function betweenRange(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

export { projVidSource, betweenRange };
