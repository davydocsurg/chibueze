<template>
  <div>
    <h1 class="text-bold"  v-scrollAnime>Soc<span class="text-success">ials</span></h1>
    <div class="card bg-dark col-md-12 col-lg-8 shadow-sm"  v-scrollAnime>
      <span class="p-1">Find me on socials</span>
    </div>
  </div>
</template>

<style lang="css" scoped>
/* animes */
.before-enter {
  opacity: 0;
  transform: translateX(180px);
  transition: all 2s ease-out !important;
}

.enter {
  opacity: 1;
  transform: translateX(0px);
}
</style>
