<script setup>
import { ref, onMounted } from 'vue';

const musicData = ref([]);

const openSpotify = (spotifyUrl) => {
  window.open(spotifyUrl, '_blank');
};

const getSpotifyEmbedUrl = (spotifyUrl) => {
  try {
    const albumId = spotifyUrl.split('/').pop().split('?')[0];
    return `https://open.spotify.com/embed/album/${albumId}?utm_source=generator&theme=0`;
  } catch (error) {
    console.error('Error converting Spotify URL:', error);
    return '';
  }
};

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/api/items');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    musicData.value = await response.json();
  } catch (error) {
    console.error("Could not fetch data:", error);
  }
});
</script>

<template>
  <div class="p-6 bg-background min-h-screen">
    <div class="max-w-8xl mx-auto space-y-8">
      <!-- Header -->
      <div class="gradient-bg-teal text-white rounded-2xl p-8 shadow-2xl">
        <h1 class="text-6xl font-black tracking-wider mb-4" style="font-family: 'Bebas Neue', sans-serif;">
          <img src="./assets/img/music-icon.webp" alt="Music" class="inline w-12 h-12 mr-4" />
          THIS IS MY JAM.
        </h1>
        <p class="text-xl text-white/90 font-medium">
          A collection of my favorite albums from my top favorite artists. Enjoy the music!
        </p>
      </div>

      <!-- Albums Grid -->
      <div class="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <div v-for="(album, albumIndex) in musicData" 
             :key="albumIndex" 
             class="bg-card border-2 border-border/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
          
          <!-- Album Info Section -->
          <div class="px-6 py-4 cursor-pointer hover:bg-muted/20 transition-colors"
               @click="openSpotify(album.albumSpotifyUrl)">
            <h4 class="font-black text-2xl text-white tracking-wider drop-shadow-lg">
              {{ album.title }}
            </h4>
            <p class="text-sm text-muted-foreground mt-1">{{ album.description }}</p>
          </div>

          <!-- Spotify Embed -->
          <div class="px-6 pb-6">
            <div class="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                :src="getSpotifyEmbedUrl(album.albumSpotifyUrl)"
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                class="rounded-xl">
              </iframe>
            </div>
          </div>

        </div>
      </div>

      <!-- Loading State -->
      <div v-if="musicData.length === 0" class="text-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p class="text-muted-foreground mt-4">Loading your favorite music...</p>
      </div>
    </div>
  </div>
</template>