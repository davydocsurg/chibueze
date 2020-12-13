<template>
  <div>
    <h1 class="text-bold" v-scrollAnime>Port<span class="text-success">folio</span></h1>
    <div class="card bg-dark col-md-12 col-lg-8 shadow-sm" v-scrollAnime>
      <span class="p-1">Some projects I've built so far</span>
    </div>
  </div>
</template>

<style lang="css" scoped>
      /* animes */
.before-enter {
  opacity: 0;
  transform: translateX(170px);
  transition: all 2s ease-out !important;
}

.enter {
  opacity: 1;
  transform: translateX(0px);
}
</style>