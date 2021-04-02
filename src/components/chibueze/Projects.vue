<template>
  <div class="container jst-pro" id="projects">
    <ProText class="mb-5"></ProText>
    <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"> -->
    <!-- <div class="mt-4">
      <div class="container projects">
        <a
          href="http://frozen-temple-94354.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2"
        >
          <img
            src="../../assets/img/project1.png"
            alt=""
            srcset=""
            width="340"
            v-scrollAnime
          />
          <br />
          <small
           class="text-center" >CMS is a blog site with a Content Management System,<br> made with Laravel and JavaScript.</small
          >
        </a>

        <a
          href="https://davydocsurg.github.io/chibueze/"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2"
        >
          <img
            src="../../assets/img/project2.png"
            alt=""
            srcset=""
            width="340"
            v-scrollAnime
          />
          <br />
          <small class="container text-center"
            >Portfolio Website of David Chibueze.</small
          >
        </a>

        <a
          href="http://laravel-vue-starter.herokuapp.com/users"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2"
        >
          <img
            src="../../assets/img/project3.png"
            alt=""
            srcset=""
            width="340"
            v-scrollAnime
          />
          <br />
          <small class="text-center"
            >Laravel Starter is a Content Management System <br> made with Laravel and VueJs.  It features  API consumption, <br> AJAX Requests, Laravel APIs, etc.</small
          >
        </a>

          <a
          href="http://ticketliteapp.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2"
        >
          <img
            src="../../assets/img/project4.png"
            alt=""
            srcset=""
            width="340"
            v-scrollAnime
          />
          <div class="">
            <small class="text-center"
            >Ticketliteapp is a ticket management system where <br> users can create and manage their tickets. It is built with <br> Laravel and  features SMTP, Laravel notifications, etc.</small
          >
          </div>
        </a>
      </div>
    </div> -->

    <main id="">
      <div class="projects">
        <!-- <div class="item" v-for="project in projects" :key="project.id">
          <a :href="project.demo" target="_blank" rel="noopener noreferrer">
            <img :src="project.img" :alt="project.name" v-scrollAnime />
          </a>
          <p href="" class="btn-light" v-scrollAnime>
            {{ project.desc }}
          </p>
          <a
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dark text-decoration-none bg-success"
            v-if="project.demo"
            v-scrollAnime
          >
            <i class="fas fa-eye"></i> Demo
          </a>

          <a
            :href="project.repo"
            class="btn-dark text-decoration-none"
            v-scrollAnime
          >
            <i class="fab fa-github"></i> Github Repo
          </a>
        </div> -->

        <div class="item">
          <a
            href="https://onevent.com.ng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../assets/img/project1.png" alt="CMS" v-scrollAnime />
          </a>
          <p class="btn-light" v-scrollAnime>
            Onevent is a creative event agency that is passionate about creating
            beautiful, unique, and organized experiences for a variety of
            clients throughout the world.
          </p>
          <a
            href="https://onevent.com.ng/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dark bg-success text-decoration-none"
            v-scrollAnime
          >
            <i class="fas fa-eye"></i> Visit Site
          </a>

          <!-- <a
            href="https://github.com/davydocsurg/CMS"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dark text-decoration-none"
            v-scrollAnime
          >
            <i class="fab fa-github"></i> Github Repo
          </a> -->
        </div>

        <div class="item">
          <a
            href="http://frozen-temple-94354.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../assets/img/project2.png" alt="CMS" v-scrollAnime />
          </a>
          <p class="btn-light" v-scrollAnime>
            CMS is a blog site with a Content Management System, made with
            Laravel <i class="fab fa-laravel"></i> and
            <i class="fab fa-js-square"></i> JavaScript.
          </p>
          <a
            href="http://frozen-temple-94354.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dark bg-success text-decoration-none"
            v-scrollAnime
          >
            <i class="fas fa-eye"></i> Demo
          </a>

          <a
            href="https://github.com/davydocsurg/CMS"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dark text-decoration-none"
            v-scrollAnime
          >
            <i class="fab fa-github"></i> Github Repo
          </a>
        </div>

        <div class="item">
          <a
            href="https://davydocsurg.github.io/chibueze/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../../assets/img/project3.png"
              alt="David Chibueze | Software Developer"
              v-scrollAnime
            />
          </a>
          <p class="btn-light" v-scrollAnime>
            Portfolio Website of David Chibueze. Made with VueJs
            <i class="fab fa-vuejs"></i>
          </p>
          <a
            href="https://davydocsurg.github.io/chibueze/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dark bg-success text-decoration-none"
            v-scrollAnime
          >
            <i class="fas fa-eye"></i> Visit Site
          </a>

          <a
            href="https://github.com/davydocsurg/chibueze"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dark text-decoration-none"
            v-scrollAnime
          >
            <i class="fab fa-github"></i> Github Repo
          </a>
        </div>

        <div class="item">
          <a
            href="http://laravel-vue-starter.herokuapp.com/users"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../../assets/img/project4.png"
              alt="Starter"
              v-scrollAnime
            />
          </a>
          <p class="btn-light" v-scrollAnime>
            Starter is a Content Management System made with Laravel
            <i class="fab fa-laravel"></i> and VueJs
            <i class="fab fa-vuejs"></i>.
          </p>
          <a
            href="http://laravel-vue-starter.herokuapp.com/users"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dark text-decoration-none bg-success"
            v-scrollAnime
          >
            <i class="fas fa-eye"></i> Demo
          </a>

          <a
            href="https://github.com/davydocsurg/laravel-multi-purpose"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dark text-decoration-none"
            v-scrollAnime
          >
            <i class="fab fa-github"></i> Github Repo
          </a>
        </div>

        <div class="item">
          <a
            href="http://ticketliteapp.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../../assets/img/project5.png"
              alt="TicketLite"
              v-scrollAnime
            />
          </a>
          <p class="btn-light" v-scrollAnime>
            Ticketlite is a ticket management system where users can create and
            manage their tickets. Made with Laravel
            <i class="fab fa-laravel"></i>
          </p>
          <a
            href="http://ticketliteapp.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dark bg-success text-decoration-none"
            v-scrollAnime
          >
            <i class="fas fa-eye"></i> Demo
          </a>

          <a
            href="https://github.com/davydocsurg/Support-Ticket-System-with-Laravel-6-"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dark text-decoration-none"
            v-scrollAnime
          >
            <i class="fab fa-github"></i> Github Repo
          </a>
        </div>

        <div class="item">
          <a
            href="https://github.com/davydocsurg/kreeper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../../assets/img/project6.png"
              alt="Kreeper"
              v-scrollAnime
            />
          </a>
          <p class="btn-light" v-scrollAnime>
            Kreeper is a realtime chat application made with Laravel
            <i class="fab fa-laravel"></i>, VueJs
            <i class="fab fa-vuejs"></i> and Pusher
            <!-- <i class="fab fa-pusher"></i>. -->
          </p>

          <a
            href="https://github.com/davydocsurg/kreeper"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-dark text-decoration-none"
            v-scrollAnime
          >
            <i class="fab fa-github"></i> Github Repo
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import ProText from "./ProText";

  export default {
    components: {
      ProText,
    },

    data() {
      return {
        // projects: [
        //   {
        //     id: 1,
        //     name: "CMS",
        //     demo: "http://frozen-temple-94354.herokuapp.com/",
        //     repo: "https://github.com/davydocsurg/CMS",
        //     img: "../../assets/img/project1.png",
        //     desc:
        //       "CMS is a blog site with a Content Management System, made with Laravel and JavaScript. It features MailChimp, Disqus etc.",
        //   },
        //   {
        //     id: 2,
        //     name: "David Chibueze | Software Developer",
        //     demo: "https://davydocsurg.github.io/chibueze/",
        //     repo: "https://github.com/davydocsurg/chibueze",
        //     img: "../../assets/img/project2.png",
        //     desc: "Portfolio Website of David Chibueze. Made with VueJs.",
        //   },
        //   {
        //     id: 3,
        //     name: "Starter",
        //     demo: "http://laravel-vue-starter.herokuapp.com/users",
        //     repo: "https://github.com/davydocsurg/laravel-multi-purpose",
        //     img: "../../assets/img/project3.png",
        //     desc:
        //       "Starter is a Content Management System made with Laravel and VueJs. It features API consumption, AJAX Requests, Laravel APIs, etc.",
        //   },
        //   {
        //     id: 4,
        //     name: "Ticketlite",
        //     demo: "http://ticketliteapp.herokuapp.com/",
        //     repo: "https://github.com/davydocsurg/Support-Ticket-System-with-Laravel-6-",
        //     img: "../../assets/img/project4.png",
        //     desc:
        //       "Ticketlite is a ticket management system where users can create and manage their tickets. It is built with Laravel and features SMTP, Laravel notifications, etc.",
        //   },
        //   {
        //     id: 5,
        //     name: "Kreeper",
        //     // demo: "http://frozen-temple-94354.herokuapp.com/",
        //     repo: "https://github.com/davydocsurg/kreeper",
        //     img: "../../assets/img/project5.png",
        //     desc:
        //       "Kreeper is a realtime chat application made with Laravel, VueJs and  Pusher. It features AJAX Requests, realtime notifications with Pusher, theme customization, Laravel events, etc.",
        //   },
        // ],
      };
    },
  };
</script>

<style lang="css" scoped>
  p {
    line-height: 1.5rem !important;
  }

  .projects {
    display: grid;
    grid-gap: 0.7rem;
    grid-template-columns: repeat(3, 1fr);
  }
  .projects img {
    width: 100%;
    border: 3px #fff solid;
  }
  .projects img:hover {
    opacity: 0.5;
    border-color: #28a745;
    transition: all 0.5s ease-out;
  }

  @media screen and (min-width: 1171px) {
    .projects {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1170px) {
    .projects {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .projects {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px) {
    main {
      padding: 2rem;
    }
    main #home h1 {
      margin-top: 10vh;
    }
    main .lg-heading {
      margin-top: 1rem;
      font-size: 5rem;
    }
    .projects {
      grid-template-columns: 1fr;
    }
  }

  .btn,
  .btn-dark,
  .btn-light {
    display: block;
    padding: 0.5rem 1rem;
    border: 0;
    margin-bottom: 0.3rem;
  }
  .btn:hover,
  .btn-dark:hover,
  .btn-light:hover {
    /* background: #eece1a; */
    background: #28a745;
    color: #fff;
    /* 28a745 */
  }

  .btn-light {
    background: #c4c4c4;
    color: #333;
  }

  /* .projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;
} */
  /* font-size: 2rem; */
  /* .projects a {
  padding: 1.5rem 2.5rem;
  margin-bottom: 3rem;
  transition: all 0.5s ease-out;
  color: #28a745 !important;
}
.projects a:hover {
  padding: 0.5rem 1.5rem;
  color: #fff !important;
  background: #28a745 !important;
}
.projects a:hover span {
  color: #000;
} */

  .text-bold {
    font-weight: 300;
    font-size: 4.5rem;
  }

  .jst {
    justify-content: space-around !important;
  }

  @media screen and (max-width: 992px) {
    .jst-pro {
      text-align: center !important;
    }

    .projects {
      text-align: center !important;
    }
  }

  /* animes */
  .before-enter {
    opacity: 0;
    transform: scale(0.5) rotateZ(0deg);
    transition: all 1.4s ease-out !important;
  }

  .enter {
    opacity: 1;
    transform: scale(1) rotateZ(0deg);
  }

  /* .before-enter {
  opacity: 0;
  transform: translateX(-170px);
  transition: all 2s ease-out !important;
}

.enter {
  opacity: 1;
  transform: translateX(0px);
} */
</style>
