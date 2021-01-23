<template>
  <div class="">
    <img
      class="rounded-circle pics"
      src="../../assets/img/prof.jpg"
      alt="David Chibueze"
      width="220"
      v-scrollAnime
    />
    <!-- https://davydocsurg.github.io/chibueze/ -->
      <!-- src="public/assets/img/prof.jpg" -->
  </div>
</template>

<style lang="css" scoped>
.pics {
  border: #fff 6px solid;
  /* border: #28a745 6px solid; */
  /* background: rgb(168, 167, 167); */
}

  /* animes */
.before-enter {
  opacity: 0;
  transform: translateX(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateX(0px);
}

</style>
