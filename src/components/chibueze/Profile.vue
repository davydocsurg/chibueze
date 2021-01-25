<template>
  <!-- <div class="container pics justify-content-center"> -->
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
  <!-- </div> -->
</template>

<style lang="css" scoped>

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

/*  */
/* @media screen and (max-width: 991px) {
  .profile-pics {
    height: 100px !important;
    width: 100px !important;
  }

  .pics {
    text-align: center !important;
  }
} */


.profile-pics {
  height: 250px !important;
  width: 250px !important;
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
/* .before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateX(0px);
} */

.before-enter {
  opacity: 0 !important;
  transform: scale(0.5) rotateZ(0deg) !important;
  transition: all 2.4s ease-out !important;
}

.enter {
  opacity: 1 !important;
  transform: scale(1) rotateZ(0deg) !important;
}
</style>
