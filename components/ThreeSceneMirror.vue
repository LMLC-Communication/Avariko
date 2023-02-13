<template>
  <div class="three-scene" ref="scene"></div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
export default {
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
      '/models/altere.gltf',
      gltf => {
        //set gltf scene color white
        gltf.scene.traverse(function (child) {
          if (child.isMesh) {
            child.material.color = new THREE.Color(0xffffff);
          }
        });
        this.scene.add(gltf.scene);
        this.cube = gltf.scene.children[0];
        // center the model
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());
        gltf.scene.position.x = gltf.scene.position.x - boxCenter.x;
        gltf.scene.position.y = gltf.scene.position.y - boxCenter.y;
        gltf.scene.position.z = gltf.scene.position.z - boxCenter.z;
        // scale the model
        const scaleFactor = 0.5 / boxSize;
        gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

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
    this.camera.position.z = 1;
    this.camera.rotation.z = 0.2;
    // rotate the camera to be upside down
    this.camera.rotateX(Math.PI);
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      // this.cube.rotation.x += 0.01;
      // this.cube.rotation.y += 0.01;
      this.cube.rotation.z -= 0.005;
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>

<style lang="scss" scoped>
.three-scene {
  position: absolute;
  width: 400px;
  height: 400px;
  z-index: 100;
  left: 50%;
  transform: translateX(300px);
}
</style>
