<template>
  <div ref="mapContainer" style="width: 100%; height: 400px; z-index: 0"></div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import L from 'leaflet';

export default {
  setup() {
    const mapContainer = ref(null);
    const mapInstance = ref(null);
    // let isClient = computed(() => typeof window !== 'undefined');
    // count = 0;
    // console.log('isClient', isClient.value);

    // while (!isClient.value && count < 10) {
    //   setTimeout(() => {
    //     count++;
    //     isClient = computed(() => typeof window !== 'undefined');
    //   }, 1000);
    // }

    onMounted(() => {
      // if (!isClient.value || !mapContainer.value) return;

      // Attendre 1 seconde avant de charger la carte
      setTimeout(() => {
        mapInstance.value = L.map(mapContainer.value).setView([47.05470806356558, 2.386053402805502], 12);

        L.tileLayer('http://stamen-tiles-c.a.ssl.fastly.net/toner/{z}/{x}/{y}@2x.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstance.value);

        // custom icon png
        const myIcon = L.icon({
          iconUrl: '/pin.png',
          iconSize: [40, 60],
          iconAnchor: [20, 65],
          popupAnchor: [0, -70],
        });

        // google maps link or apple maps link if apple device
        function isIOSOrMacPlatform() {
          const userAgent = window.navigator.userAgent;
          return userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) || userAgent.match(/iPod/i) || userAgent.match(/Macintosh/i);
        }

        let mapsLink;

        if (isIOSOrMacPlatform()) {
          mapsLink = 'https://maps.apple.com/?address=48%20Rue%20de%20la%20Sauni%C3%A8re,%2018570%20Trouy,%20France&auid=15335463550541782667&ll=47.054660,2.386030&lsp=9902&q=Avariko%20Athletics';
          
        } else {
          mapsLink = 'https://goo.gl/maps/WzYHvTTQjLxEapch8';
        }

        L.marker([47.05470806356558, 2.386053402805502], { icon: myIcon })
          .addTo(mapInstance.value)
          .bindPopup(`Avariko Athletics<br>4,8 ★★★★★<br><a href="${mapsLink}" target="_blank">238 AVENUE DE SAINT AMAND 18570 TROUY NORD</a>`)
          .openPopup();
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
