<template>
  <div class="row justify-content-end mt-4 mx-4" id="theme">
    <i class="fas fa-sun themetoggle"></i>
    <i class="far fa-moon themetoggle"></i>

    <div class="theme-switcher-wrap">
      <div
        class="theme-switcher"
        :class="{ active: currentTheme === 'dark-theme' }"
        @click="toggleTheme"
      >
        <div class="switch-path">
          <div class="switch-handle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "theme",
  data() {
    return {
      // currentTheme: localStorage.getItem('themes')
      // currentTheme: darkTheme,
    };
  },

  methods: {
    // toggleTheme: () => {
    //   this.lightTheme = !this.lightTheme
    //   const savedTheme = localStorage.getItem('themes')
    //   if (savedTheme === 'dark-theme') {
    //     localStorage.setItem('themes', 'light-theme')
    //     this.currentTheme = localStorage.getItem('themes')
    //   }
    //   else{
    //     localStorage.setItem('themes', 'dark-theme')
    //     this.currentTheme = localStorage.getItem('themes')
    //   }
    // },

    // lightTheme() {
    //   el.classList.remove("dark-theme");
    //   el.classList.add("light-theme");
    // },
  },
};
</script>

<style lang="css">
.fa-sun {
  font-size: 1.4rem !important;
}

.fa-moon {
  font-size: 1.4rem !important;
}
</style>
