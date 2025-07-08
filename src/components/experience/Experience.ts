/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three';
import Renderer from './Renderer';

export interface ExperienceConfig {
  targetElement?: HTMLCanvasElement | undefined;
}

let instance: Experience | null = null; // for singleton pattern

class Experience {
  canvas: HTMLCanvasElement | undefined;
  debug: any; // Debug
  scene!: THREE.Scene;
  renderer!: Renderer;
  resources: any; // Renderer

  constructor(config: ExperienceConfig = {}) {
    if (instance) {
      return instance;
    }

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    instance = this;

    window.experience = this;

    this.canvas = config.targetElement;

    this.scene = new THREE.Scene();
    this.renderer = new Renderer();
  }
}

export default Experience;
