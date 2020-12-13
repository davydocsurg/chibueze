<template>
  <div class="container" id="footer">
    <footer class="row">
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12" v-scrollAnime>
        ©️ 2020 David Chibueze
      </div>
      <div class="jst" v-scrollAnime>
        <a
          href="http://github.com/davydocsurg"
          target="_blank"
          rel="noopener noreferrer"
          class="mr-3"
          v-scrollAnime
        >
          <i class="fab fa-github foot"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/davidchibueze/"
          target="_blank"
          rel="noopener noreferrer"
          class="mr-3"
          v-scrollAnime
        >
          <i class="fab fa-linkedin foot"></i>
        </a>

        <a
          href="https://twitter.com/davydocsurg"
          target="_blank"
          rel="noopener noreferrer"
          class="mr-3"
          v-scrollAnime
        >
          <i class="fab fa-twitter foot"></i>
        </a>
        <a
          href="https://www.facebook.com/david.chibueze.1069"
          target="_blank"
          rel="noopener noreferrer"
          class="mr-3"
          v-scrollAnime
        >
          <i class="fab fa-facebook foot"></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<style lang="css" scoped>
/* animes */
.before-enter {
  opacity: 0;
  transform: translateY(50px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

.foot {
  font-size: 40px !important;
  color: aliceblue;
}

.foot:hover {
  color: #28a745;
}

</style>
