<template>
  <div class="container pics justify-content-center">
    <div class="profile-pics " v-scrollAnime></div>
    <!-- <img
      class="rounded-circle pics"
      src="../../assets/img/prof.jpg"
      alt="David Chibueze"
      width="220"
      v-scrollAnime
    /> -->
    <!-- https://davydocsurg.github.io/chibueze/ -->
    <!-- src="public/assets/img/prof.jpg" -->
  </div>
</template>

<style lang="css" scoped>
@media screen and (max-width: 991px) {
  .profile-pics {
    height: 100px !important;
    width: 100px !important;
  }

  .pics {
    text-align: center !important;
  }
}

@media screen and (max-width: 767px) and (min-width: 300px){
  .profile-pics {
    margin-left: .9rem !important;
    display: none !important;
    height: 50px !important;
  }
}

.profile-pics {
  height: 300px !important;
  width: 300px !important;
  background-image: url("../../assets/img/prof.jpg");
  background-size: cover !important;
  background-position: center !important;
  border: solid 1px;
  border-radius: 205px;
}

/* .pics {
  border: #fff 6px solid;
  /* border: #28a745 6px solid; */
  /* background: rgb(168, 167, 167); */
/* }  */

/* animes */
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateX(0px);
}
</style>
