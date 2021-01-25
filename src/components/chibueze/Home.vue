<template>
  <div class="container home-mt" id="home">
    <div class="row jst-space">
      <!-- <div class=" "> -->
      <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 text-center pics container">
        <!-- <Profile></Profile> -->
        <div class="profile-pics" v-scrollAnime></div>
        <br />
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <h1 class="">
          <p class="smaller" v-scrollAnime>David</p>
          <span class="large text-success"><p v-scrollAnime>Chibueze</p></span>
        </h1>
        <b class=""
          ><p v-scrollAnime>
            Software Developer <i class="fas fa-laptop-code"></i>
          </p>
        </b>

        <div class="mt-4">
          <div class="card bg-card shadow-sm p-3" v-scrollAnime>
            <!-- <hr class="bg-white" /> -->

            <div class="row jst-space">
              <div class="col-sm-12">
                <div class="mr-4">
                  <i class="fas fa-map-marker-alt"></i>
                  <span class="ml-1">Location</span>
                  <br />
                  <b>Abia, Nigeria</b>
                </div>
                <hr class="only-sm" />
                <div class="mr-4">
                  <i class="fas fa-phone"></i><span class="ml-1">Phone</span>
                  <br />
                  <b>+234 901 358 2063</b>
                </div>
                <hr class="only-sm" />
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
import Profile from "./Profile";

export default {
  components: {
    Profile,
  },
};
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
  color: #a4a5a6;
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

.profile-pics {
  height: 250px !important;
  width: 250px !important;
  background-image: url("../../assets/img/prof.jpg");
  background-size: cover !important;
  background-position: center !important;
  border: solid 1px;
  border-radius: 205px;
}

@media screen and (max-width: 1023px) {
  .jst-space {
    text-align: center !important;
    /* display: block; */
    /* justify-content: center !important; */
    /* justify-items: center !important; */
    /* justify-self: center !important; */
  }

  .profile-pics {
    height: 230px !important;
    width: 230px !important;
    /* text-align: center !important; */
    /* justify-self: center !important; */
  }

  .large {
    font-size: 3rem !important;
  }
  /* .pics {
    text-align: center !important;
  } */
}

@media screen and (max-width: 767px) {
  .profile-pics {
    height: 200px !important;
    width: 200px !important;
    /* text-align: center !important; */
    /* justify-self: center !important; */
  }

}

@media screen and (min-width: 270px) and (max-width: 310px) {
  .profile-pics {
    margin-left: 20px !important;
  }
}

@media screen and (min-width: 310px) and (max-width: 330px) {
  .profile-pics {
    margin-left: 25px !important;
  }
}

@media screen and (min-width: 331px) and (max-width: 340px) {
  .profile-pics {
    margin-left: 35px !important;
  }
}

@media screen and (min-width: 341px) and (max-width: 350px) {
  .profile-pics {
    margin-left: 42px !important;
  }
}

@media screen and (min-width: 341px) and (max-width: 350px) {
  .profile-pics {
    margin-left: 42px !important;
  }
}

@media screen and (min-width: 350px) and (max-width: 360px) {
  .profile-pics {
    margin-left: 52px !important;
  }
}

@media screen and (min-width: 360px) and (max-width: 370px) {
  .profile-pics {
    margin-left: 60px !important;
  }
}

@media screen and (min-width: 371px) and (max-width: 400px) {
  .profile-pics {
    margin-left: 67px !important;
  }
}

@media screen and (min-width: 400px) and (max-width: 420px) {
  .profile-pics {
    margin-left: 69px !important;
  }
}

@media screen and (min-width: 421px) and (max-width: 430px) {
  .profile-pics {
    margin-left: 72px !important;
  }
}

@media screen and (min-width: 431px) and (max-width: 440px) {
  .profile-pics {
    margin-left: 76px !important;
  }
}

@media screen and (min-width: 441px) and (max-width: 455px) {
  .profile-pics {
    margin-left: 83px !important;
  }
}

@media screen and (min-width: 455px) and (max-width: 460px) {
  .profile-pics {
    margin-left: 85px !important;
  }
}

@media screen and (min-width: 461px) and (max-width: 470px) {
  .profile-pics {
    margin-left: 88px !important;
  }
}

@media screen and (min-width: 471px) and (max-width: 480px) {
  .profile-pics {
    margin-left: 93px !important;
  }
}

@media screen and (min-width: 481px) and (max-width: 490px) {
  .profile-pics {
    margin-left: 96px !important;
  }
}

@media screen and (min-width: 490px) and (max-width: 500px) {
  .profile-pics {
    margin-left: 100px !important;
  }
}

@media screen and (min-width: 501px) and (max-width: 510px) {
  .profile-pics {
    margin-left: 112px !important;
  }
}

@media screen and (min-width: 511px) and (max-width: 520px) {
  .profile-pics {
    margin-left: 118px !important;
  }
}

@media screen and (min-width: 521px) and (max-width: 532px) {
  .profile-pics {
    margin-left: 123px !important;
  }
}

@media screen and (min-width: 533px) and (max-width: 540px) {
  .profile-pics {
    margin-left: 130px !important;
  }
}

@media screen and (min-width: 541px) and (max-width: 550px) {
  .profile-pics {
    margin-left: 137px !important;
  }
}

@media screen and (min-width: 551px) and (max-width: 565px) {
  .profile-pics {
    margin-left: 143px !important;
  }
}

@media screen and (min-width: 566px) and (max-width: 767px) {
  .profile-pics {
    margin-left: 150px !important;
  }
}

/* @media screen and (min-width: 581px) and (max-width: 590px) {
  .profile-pics {
    margin-left: 154px !important;
  }
} */

/* animes */
.before-enter {
  opacity: 0;
  transform: translateY(-100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
