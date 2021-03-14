<template>
  <div id="experience" class="container jst-prof">
    <div class="mb-5">
      <h1 class="text-bold" v-scrollAnime>
        Exper<span class="text-success">ience</span>
      </h1>

      <div
        class="card bg-card col-md-12 col-lg-4 shadow-sm jst-pro"
        v-scrollAnime
      >
        <span class="p-1 jst-prof">My experience so far.</span>
      </div>
    </div>
    <ul class="timeline" v-scrollAnime>
      <li>
        <div class="container row">
          <div class="col-lg-4">
            <small class="">April 2020 - present</small>
            <h5 href="" class="text-success">Freelance Software Developer</h5>
            <small class="text-muted">Remote - Freelancer</small>
            <br />
            <br />
          </div>
          <div class="col-lg-8">
            <p class="lh-lg">
              I currently work as a Freelance Software Developer. I work with
              teams of high skilled developers. I develop backend and database
              infrastructures and devise front-end components on both new and
              existing methods.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="container row">
          <div class="col-lg-4">
            <small class="">February, 2020 - April 2020</small>
            <h5 href="" class="text-success">Innovation Growth Hub</h5>
            <small class="text-success">Backend Developer - Intern</small>
            <br />
            <small class="text-muted">Abia, Nigeria.</small>
            <br />
            <br />
          </div>

          <div class="col-lg-8">
            <p class="lh-lg">
              <!-- I worked as a Backend Developer - Intern at Innovation Growth Hub.  -->
              I worked in a team of high skilled developers, developed efficient
              solutions, and built first class software.
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
  .lh-lg {
    font-weight: 400 !important;
    font-size: 1.2rem !important;
  }
  .text-bold {
    font-weight: 300;
    font-size: 3.5rem !important;
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

    .timeline {
      text-align: center !important;
    }
  }

  /* animes */
  .before-enter {
    opacity: 0;
    transform: translateX(180px);
    transition: all 1.2s ease-out !important;
  }

  .enter {
    opacity: 1;
    transform: translateX(0px);
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
  }
  ul.timeline:before {
    content: " ";
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
  }
  ul.timeline > li {
    margin: 20px 0;
    /* padding-left: 20px; */
  }
  ul.timeline > li:before {
    content: " ";
    background: #28a745;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid white;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
  }
</style>
