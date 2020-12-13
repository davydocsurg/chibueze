<template>
  <div  class="container jst-soc" id="contacts">
    <SocText></SocText>

    <div class="boxes">
      <div v-scrollAnime>
        <span class="text"><i class="fab fa-github"></i>: </span>
        <a
          href="https://github.com/davydocsurg"
          target="_blank"
          rel="noopener noreferrer"
        >@davydocsurg</a>
      </div>
      <div v-scrollAnime>
        <span class="text"><i class="fab fa-twitter"></i>: </span>
        <a
          href="https://twitter.com/davydocsurg"
          target="_blank"
          rel="noopener noreferrer"
          >@davydocsurg</a
        >
      </div>
      <div v-scrollAnime>
        <span class="text"><i class="fab fa-linkedin"></i>: </span>
        <a href="https://www.linkedin.com/in/davidchibueze/" target="_blank" rel="noopener noreferrer">David Chibueze</a>
      </div>

      <!-- <div v-scrollAnime>
        <span class=""><i class="fab fa-facebook"></i>: </span>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">David Chibueze</a>
      </div> -->
    </div>
  </div>
</template>

<script>
import SocText from './SocText'

export default {
  components:{
    SocText
  }
}
</script>

<style lang="css" scoped>
.text-bold {
  font-weight: 300;
  font-size: 4.5rem;
}

.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;
}
.boxes div {
  font-size: 2rem;
  border: 3px #fff solid;
  padding: 1.5rem 2.5rem;
  margin-bottom: 3rem;
  transition: all 0.5s ease-out;
}
.boxes div:hover {
  padding: 0.5rem 1.5rem;
  background: #28a745 !important;
  color: #fff !important;
}
.boxes div:hover span {
  color: #000;
}

a {
  text-decoration: none !important;
  color: #fff !important;
}

@media screen and (max-width: 992px) {
  .jst-soc {
    text-align: center !important;

  }
}

/* animes */
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out !important;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
