<template>
  <div id="about" class="container jst-abt p-4 mt-4">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <h1 class="text-bold" v-scrollAnime>
        About <span class="text-success">Me</span>
      </h1>
      <div class="card bg-dark col-md-12 col-lg-4 shadow-sm" v-scrollAnime>
        <span class="p-1">A few things about me...</span>
      </div>
      <br />
      <br />
      <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
        <p class="lh-lg" v-scrollAnime>
          I'm a back/front-end web developer, database developer and an
          enthusiastic entrepreneur with years of experience in the tech
          industry. I'm based in Nigeria and mostly self-tutored for most of my
          knowledge. Having a strong belief in being 100% efficient, I devote my
          best to every laid down goals.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.text-bold {
  font-weight: 300;
  font-size: 4.5rem;
}

p {
  line-height: 30px !important;
  font-size: 19px !important;
}

@media screen and (max-width: 992px) {
  .jst-abt {
    text-align: center !important;
  }

  .text-bold {
  font-weight: 300;
  font-size: 3.5rem;
}
}

/* animes */
.before-enter {
  opacity: 0;
  transform: translateX(80px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateX(0px);
}
</style>
