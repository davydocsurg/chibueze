<template>
  <div id="proficiency" class="container jst-prof p-4 mt-4">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <h1 class="text-bold" v-scrollAnime>
        Profi<br class="break" /><span class="text-success">ciency</span>
      </h1>
      <div class="card bg-card col-md-12 col-lg-4 shadow-sm" v-scrollAnime>
        <span class="p-1">My areas of proficiency</span>
      </div>

      <!-- <div class="row"> -->
      <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 mt-4">
        <div class="" v-scrollAnime>
          <h5 class="text-success">Front-end Design</h5>
          <p class="lh-lg">
            I design responsive and stunning webpages/SPAs using various UI
            frameworks and libraries such as Bootstrap, Tailwind CSS, and
            VueJS/VuetifyJS.
          </p>
        </div>
        <div class="" v-scrollAnime>
          <h5 class="text-success">Back-end Development</h5>
          <p class="lh-lg">
            I develop highly extensible web applications with fast, solid, and
            secure APIs. My stack includes PHP and Laravel.
          </p>
        </div>
        <div class="" v-scrollAnime>
          <h5 class="text-success">Database Development</h5>
          <p class="lh-lg font-monospace">
            I design uniformed relational data models aptly accomplished with
            MySQL/SQL.
          </p>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<style lang="css" scoped>
  .text-bold {
    font-weight: 300;
    font-size: 3.5rem !important;
  }

  .break {
    display: none !important;
  }

  p {
    line-height: 30px !important;
    font-size: 19px !important;
  }

  @media screen and (max-width: 992px) {
    .jst-prof {
      text-align: center !important;
    }

    .text-bold {
      font-weight: 400;
      font-size: 2.5rem !important;
      text-align: center !important;
    }
  }

  @media screen and (max-width: 300px) {
    .break {
      display: block !important;
    }
  }

  /* animes */
  .before-enter {
    opacity: 0;
    transform: translateX(-80px);
    transition: all 1.4s ease-out;
  }

  .enter {
    opacity: 1;
    transform: translateX(0px);
  }
</style>
