<template>
  <!-- <body id="body" class="dark-theme"> -->
  <div id="app" class="container dark-theme">
    <!-- <ThemeToggler></ThemeToggler> -->
    <!-- <hr class="bg-success" /> -->
    <!-- <Header class=""></Header> -->
    <Home></Home>
    <hr class="bg-success" />
    <About></About>
    <hr class="bg-success" />
    <Proficiency></Proficiency>
    <hr class="bg-success" />
    <Skills></Skills>
    <hr class="bg-success" />
    <Experience></Experience>
    <hr class="bg-success" />
    <Projects></Projects>
    <hr class="bg-success" />
    <Socials></Socials>
    <hr class="bg-success" />
    <Footer></Footer>
  </div>
  <!-- </body> -->
</template>

<script>
  // import ThemeToggler from '@/components/chibueze/ThemeToggler'
  import Header from "@/components/chibueze/Header";
  import Home from "@/components/chibueze/Home";
  import About from "@/components/chibueze/About";
  import Proficiency from "@/components/chibueze/Proficiency";
  import Skills from "@/components/chibueze/Skills";
  import Experience from "@/components/chibueze/Experience";
  import Projects from "@/components/chibueze/Projects";
  import Socials from "@/components/chibueze/Socials";
  import Footer from "@/components/chibueze/Footer";

  export default {
    components: {
      // ThemeToggler,
      Header,
      Home,
      About,
      Proficiency,
      Skills,
      Experience,
      Projects,
      Socials,
      Footer,
    },
  };
</script>

<style lang="css">
  #app {
    height: 100%;
  }
</style>
