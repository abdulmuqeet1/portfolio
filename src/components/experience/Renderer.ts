// import * as THREE from 'three';
import Experience from './Experience';

class Renderer {
  experience: Experience;
  canvas: Experience['canvas'];
  debug: Experience['debug'];
  scene: Experience['scene'];

  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
  }
}

export default Renderer;
