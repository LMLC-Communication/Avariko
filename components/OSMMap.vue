<template>
  <div ref="mapContainer" style="width: 100%; height: 400px"></div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import L from 'leaflet';

export default {
  setup() {
    const mapContainer = ref(null);
    const mapInstance = ref(null);
    // const isClient = computed(() => typeof window !== 'undefined');

    onMounted(() => {
      // if (!isClient.value || !mapContainer.value) return;

      // Attendre 1 seconde avant de charger la carte
      setTimeout(() => {
        mapInstance.value = L.map(mapContainer.value).setView([48.8534, 2.3488], 12);

        L.tileLayer('http://stamen-tiles-c.a.ssl.fastly.net/toner/{z}/{x}/{y}@2x.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstance.value);
      }, 1000);
    });

    return {
      mapContainer,
      mapInstance,
      // isClient,
    };
  },
};
</script>
