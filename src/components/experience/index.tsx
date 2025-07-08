import { useEffect, useRef } from 'react';
import Experience from './Experience';

function ExperienceComponent() {
  const experience = useRef<Experience>(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = document.querySelector('canvas.webgl');
    if (!canvas) throw new Error('Failed to find the canvas element.');

    experience.current = new Experience({
      targetElement: canvas,
    });
  }, []);

  return <canvas className="webgl" />;
}
export default ExperienceComponent;
