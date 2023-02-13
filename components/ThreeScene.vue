<template>
  <div class="three-scene" ref="scene"></div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
export default {
  data() {
    return {
      animations: 0,
    };
  },
  mounted() {
    // Créer une scène
    this.scene = new THREE.Scene();
    // Créer une caméra
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.$refs.scene.clientWidth / this.$refs.scene.clientHeight,
      0.1,
      1000,
    );
    // Créer un renderer
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
    });
    this.renderer.setSize(this.$refs.scene.clientWidth, this.$refs.scene.clientHeight);
    this.$refs.scene.appendChild(this.renderer.domElement);
    // Importer un fichier 3D
    const loader = new GLTFLoader();
    loader.load(
      '/models/poids.gltf',
      gltf => {
        //set gltf scene color white
        gltf.scene.traverse(function (child) {
          if (child.isMesh) {
            child.material.color = new THREE.Color(0xffffff);
          }
        });
        this.scene.add(gltf.scene);
        this.cube = gltf.scene.children[0];
        this.animate();
      },
      undefined,
      error => {
        console.error(error);
      },
    );

    // Ajouter une lumière
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 50);
    this.scene.add(light);

    // Positionner la caméra
    this.camera.position.z = 0.05;
    this.camera.position.y = 0.4;
    this.camera.position.x = -0.5;
    this.camera.rotation.z = -0.5;
    this.camera.rotation.x = -0.5;
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      // this.cube.rotation.x += 0.01;
      // this.cube.rotation.y += 0.01;
      // this.cube.rotation.z += 0.005;
      // réduire la taille du cube
      this.cube.rotation.z += 0.001;
      if (this.animations < 500) {
        this.cube.scale.x += 0.0002;
        this.cube.scale.y += 0.0002;
        this.cube.scale.z += 0.0002;
        this.animations++;
      } else if (this.animations < 1000) {
        this.cube.scale.x -= 0.0002;
        this.cube.scale.y -= 0.0002;
        this.cube.scale.z -= 0.0002;
        this.animations++;
      } else {
        this.animations = 0;
      }

      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>

<style lang="scss" scoped>
.three-scene {
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: 100;
  left: 50%;
  transform: translateX(300px);
}
</style>
