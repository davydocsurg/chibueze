<template>
  <div class="container home-mt" id="home">
    <div class="row justify-content-center jst-space">
      <!-- <div class=" "> -->
      <div class="col-md-6 col-sm-12 col-xs-12">
        <Profile></Profile>
        <br />
      </div>
      <div class="">
        <h1 class="">
          <p class="smaller"  v-scrollAnime>David</p>
          <span class="large text-success"><p v-scrollAnime>Chibueze</p></span>
        </h1>
        <b class="" ><p v-scrollAnime>Software developer <i class="fas fa-laptop-code"></i></p> </b>

        <div class="mt-4">
          <div class="card bg-dark p-3" v-scrollAnime>
            <!-- <hr class="bg-white" /> -->

            <div class="row jst-space">
              <div class="col-sm-12">
                <div class="mr-4">
                  <i class="fas fa-map-marker-alt"></i>
                  <span class="ml-1">Location</span>
                  <br />
                  <b>Abia, Nigeria</b>
                </div>
                <hr class="only-sm">
                <div class="mr-4">
                  <i class="fas fa-phone"></i><span class="ml-1">Phone</span>
                  <br />
                  <b>0 901 358 206 3</b>
                </div>
                <hr class="only-sm">
                <div class="">
                  <i class="far fa-envelope"></i><span class="ml-1">Mail</span>
                  <br />
                  <a href="mailto:davydocsurg@gmail.com" class="mail-to"
                    ><b>davydocsurg@gmail.com</b></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from './Profile'

export default {
  components:{
    Profile
  }
}
</script>

<style type="text/css" scoped>
.large {
  font-size: 5rem;
}

.smaller {
  font-size: 3.9rem;
  font-weight: 300;
}

.jst-space {
  /* justify-content: space-between; */
  /* align-items: center; */
  /* justify-content: safe; */
}

.mail-to {
  color: white;
}

.mail-to:hover {
  color: rgb(26, 192, 26);
}

.avatar-4xl {
  height: 6.125rem !important;
  width: 6.125rem !important;
}
.avatar {
  /* position: relative; */
  display: inline-block !important;
}

.home-mt {
  margin-top: 7rem;
}

/* .only-sm{
  display: none !important;
}  */

@media screen and (max-width: 992px) {
  .jst-space {
    text-align: center !important;
    /* display: block; */
  }
  /* .pics {
    text-align: center !important;
  } */
}

/* animes */
.before-enter {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
