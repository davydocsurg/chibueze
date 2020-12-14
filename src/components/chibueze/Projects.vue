<template>
  <div class="container jst-pro" id="projects">
    <ProText></ProText>
    <div class="mt-4">
      <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"> -->
      <div class="projects">
        <a href="http://frozen-temple-94354.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="p-2">
          <img src="../../assets/img/project1.png" alt="" srcset="" width="300" v-scrollAnime/>
        </a>

        <a href="https://davydocsurg.github.io/chibueze/" target="_blank" rel="noopener noreferrer"  class="p-2">
          <img src="../../assets/img/project2.png" alt="" srcset="" width="300" v-scrollAnime/>
        </a>

        <a href="http://laravel-vue-starter.herokuapp.com/users" target="_blank" rel="noopener noreferrer" class="p-2">
          <img src="../../assets/img/project3.png" alt="" srcset="" width="300" v-scrollAnime/>
        </a>

        <a href="http://ticketliteapp.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="p-2">
          <img src="../../assets/img/project4.png" alt="" srcset="" width="300" v-scrollAnime/>
        </a>

        <!-- <a href="http://vv" target="_blank" rel="noopener noreferrer" class="p-2">
          <img src="../../assets/img/project1.png" alt="" srcset="" width="300" v-scrollAnime/>
        </a>

        <a href="http://vv" target="_blank" rel="noopener noreferrer" class="p-2">
          <img src="../../assets/img/project1.png" alt="" srcset="" width="300" v-scrollAnime/>
        </a> -->
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import ProText from './ProText'

export default {
  components:{
    ProText
  }
}
</script>

<style lang="css">
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;
}
.projects a {
  font-size: 2rem;
  border: 3px #fff solid;
  padding: 1.5rem 2.5rem;
  margin-bottom: 3rem;
  transition: all 0.5s ease-out;
}
.projects a:hover {
  padding: 0.5rem 1.5rem;
  background: #28a745 !important;
  color: #fff !important;
}
.projects a:hover span {
  color: #000;
}

.text-bold {
  font-weight: 300;
  font-size: 4.5rem;
}

.jst {
  justify-content: space-around !important;
}

@media screen and (max-width: 992px) {
  .jst-pro {
    text-align: center !important;
  }
}

/* animes */
.before-enter {
  opacity: 0;
  transform: scale(.5) rotateZ(-34deg);
  transition: all 2.4s ease-out !important;
}

.enter {
  opacity: 1;
  transform: scale(1) rotateZ(0deg);
}
</style>
