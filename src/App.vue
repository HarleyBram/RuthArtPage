<template>
  <div id="app">
    <div class="container p-5">
      <div class="row">
        <div class="col-sm-3">
          <img
            src="@/assets/home.png"
            class="img-fluid"
            alt=""
            v-on:click="home"
          />
        </div>
        <div class="col-sm-3">
          <img
            src="@/assets/artwork.png"
            class="img-fluid"
            alt=""
            v-on:click="art"
          />
        </div>
        <div class="col-sm-3">
          <img
            src="@/assets/video.png"
            class="img-fluid"
            alt=""
            v-on:click="video"
          />
        </div>
        <div class="col-sm-3">
          <img
            src="@/assets/contact.png"
            class="img-fluid"
            alt=""
            v-on:click="contact"
          />
        </div>
      </div>
    </div>
    <div class="container mt-5 p-5">
      <art-view v-if="selectedTab == 'art-view'" />
      <video-page v-if="selectedTab == 'video-page'" />
      <home-page v-if="selectedTab == 'home-page'" />
      <contact v-if="selectedTab == 'contact'" />
    </div>
  </div>
</template>


<script>
import HomePage from "./components/HomePage.vue";
import ArtView from "./components/ArtView.vue";
import Video from "./components/Video.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
  data() {
    return {
      selectedTab: "home-page",
    };
  },
  components: {
    "home-page": HomePage,
    "art-view": ArtView,
    contact: Contact,
    "video-page": Video,
  },
  methods: {
    home: function () {
      this.selectedTab = "home-page";
    },
    art: function () {
      this.selectedTab = "art-view";
    },
    contact: function () {
      this.selectedTab = "contact";
    },
    video: function () {
      this.selectedTab = "video-page";
    },
  },
};
</script>


<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#topBar {
  background-color: #f2f2eb;
}

body {
  background-color: #88857d;
}

.container {

  background-color: #f2f2eb;
}
</style>
