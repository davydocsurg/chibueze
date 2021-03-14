<template>
  <div class="container jst-skl p-4 mt-4" id="skills">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <SkillText></SkillText>
      <div class="mt-4">
        <!-- <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"> -->
        <!-- <transition-group
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        > -->
        <div
          class="each-s"
          v-for="progress in progress_data"
          :key="progress.id"
        >
          <b class="text">{{ progress.name }}</b>
          <div class="progress mb-3">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              :style="{ width: progress.width + '%' }"
              :aria-valuenow="progress.val"
              aria-valuemin="0"
              aria-valuemax="100"
              v-scrollAnime
            >
              <b>{{ progress.level + "%" }}</b>
            </div>
          </div>
        </div>
        <!-- </transition-group> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import SkillText from "./SkillText";

  export default {
    components: {
      SkillText,
    },

    data() {
      return {
        progress_data: [
          { id: 1, name: `HTML 5`, width: "97", val: "97", level: 97 },
          { id: 2, name: "CSS 3", width: "90", val: "90", level: 90 },
          { id: 3, name: "Bootstrap 5", width: "87", val: "87", level: 87 },
          { id: 4, name: "Tailwind CSS", width: "75", val: "75", level: 75 },
          { id: 5, name: "JavaScript", width: "91", val: "91", level: 91 },
          { id: 6, name: "PHP", width: "82", val: "82", level: 82 },
          {
            id: 7,
            name: "VueJS/VuetifyJS",
            width: "89",
            val: "89",
            level: 89,
          },
          { id: 8, name: "Laravel 7", width: "77", val: "77", level: 77 },
          { id: 9, name: "SQL/MYSQL", width: "70", val: "70", level: 70 },
        ],
      };
    },

    methods: {
      // beforeEnter(el) {
      //   console.log("beforeEnter");
      //   this.elWidth = 20;
      //   el.style.width = this.elWidth + "%";
      // },
      // enter(el, done) {
      //   console.log("enter");
      //   let round = 1;
      //   const interval = setInterval(() => {
      //     el.style.width = this.elWidth + round * 2 + "%";
      //     round++;
      //     if (round > 20) {
      //       clearInterval(interval);
      //       done();
      //     }
      //   }, 30);
      // },
      // afterEnter(el) {
      //   console.log("afterEnter");
      // },
      // enterCancelled(el) {
      //   console.log("enterCancelled");
      // },
      // beforeLeave(el) {
      //   console.log("beforeLeave");
      //   this.elWidth = 20;
      //   el.style.width = this.elWidth + "%";
      // },
      // leave(el, done) {
      //   console.log("leave");
      //   let round = 1;
      //   const interval = setInterval(() => {
      //     el.style.width = this.elWidth - round * 2 + "%";
      //     round++;
      //     if (round > 20) {
      //       clearInterval(interval);
      //       done();
      //     }
      //   }, 30);
      // },
      // afterLeave(el) {
      //   console.log("afterLeave");
      // },
      // leaveCancelled(el) {
      //   console.log("leaveCancelled");
      // },
    },
  };
</script>

<style lang="css" scoped>
  .text-bold {
    font-weight: 300;
    font-size: 4.5rem;
  }

  .progress {
    height: 15px !important;
    transition: all 0.5s ease-out !important;
  }

  .progress-bar {
    transition: all 0.5s ease-out !important;
  }

  /* animes */
  .before-enter {
    opacity: 1;
    transform: translateX(-100px);
    transition: all 1.3s ease-out !important;
  }

  .enter {
    opacity: 1 !important;
    transform: translateX(0px) !important;
  }

  /* .slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 3s ease-out forwards;
  transition: opacity 1s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20rem);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  to {
    transform: translateY(20px);
  }

  from {
    transform: translateY(0);
  }
} */

  @media screen and (max-width: 992px) {
    .jst-skl {
      text-align: center !important;
    }
  }
</style>
