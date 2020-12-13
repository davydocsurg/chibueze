<template>
  <div>
    <header>
      dfhefhi
      <div class="" @toggle="toggleMenu">
        <div class="menu-btn">
          <div class="nav-line"></div>
          <div class="nav-line"></div>
          <div class="nav-line"></div>
        </div>
      </div>

      <nav class="menu">
        <div class="menu-branding">
          <div class="portrait"></div>
        </div>
        <ul class="menu-nav">
          <li class="nav-item current">
            <a href="index.html" class="nav-link">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="about.html" class="nav-link">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a href="work.html" class="nav-link">
              My Work
            </a>
          </li>
          <li class="nav-item">
            <a href="contact.html" class="nav-link">
              How To Reach Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.showMenu = this.hideMenu;
    },

    showMenu() {
      const menuBtn = document.querySelector(".menu-btn");
      const menu = document.querySelector(".menu");
      const menuNav = document.querySelector(".menu-nav");
      const menuBranding = document.querySelector(".menu-branding");
      const navItems = document.querySelectorAll(".nav-item");

      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
      navItems.forEach((item) => item.classList.add("show"));

      // this.hideMenu() = false;
    },

    hideMenu() {
      const menuBtn = document.querySelector(".menu-btn");
      const menu = document.querySelector(".menu");
      const menuNav = document.querySelector(".menu-nav");
      const menuBranding = document.querySelector(".menu-branding");
      const navItems = document.querySelectorAll(".nav-item");

      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");
      menuBranding.classList.remove("show");
      navItems.forEach((item) => item.classList.remove("show"));

      // Set Menu State
      // this.showMenu = false;
    },
  },
};
</script>

<style lang="css"></style>
