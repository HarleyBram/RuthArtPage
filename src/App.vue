<template>
  <div id="app" class="container">
    <div class="row py-5 " >
      <div  class="col-sm-4"></div>
      <div id="topBar" class="col-sm-4 text-center p-3">
    <button type="button" class="btn btn-outline-secondary mx-2" name="Art" v-on:click="art">Art</button>
    <button type="button" class="btn btn-outline-secondary mx-2" name="About" v-on:click="about">About</button>
    <button type="button" class="btn btn-outline-secondary mx-2" name="Contact" v-on:click="contact">Contact Information</button>
      </div>
    </div>
     <art-view v-if="selectedTab == 'art-view'"/>
     <about-page v-if="selectedTab == 'about-page'"/>
     <contact v-if="selectedTab == 'contact'" />

    
  </div>
</template>


<script>
import AboutPage from './components/AboutPage.vue';
import ArtView from './components/ArtView.vue';
import Contact from './components/Contact.vue';


export default {
  name: 'App',
   data() {
    return {
      selectedTab: "art-view"
    }
  },
  components: {
    "about-page": AboutPage,
    "art-view": ArtView,
    "contact": Contact,
  },
  methods: {
    about: function() {
      this.selectedTab = 'about-page';
    },
    art: function() {
      this.selectedTab = 'art-view';
    },
    contact: function() {
      this.selectedTab = 'contact';
    
    }
  }
}
</script>







<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#topBar{
  background-color: #f2f2eb;

}
</style>
