<template>
  <body class="">
    <div id="app" class="container">
      <!-- <Header class=""></Header> -->
      <Home></Home>
      <hr class="bg-success" />
      <About></About>
      <hr class="bg-success" />
      <Proficiency></Proficiency>
      <hr class="bg-success" />
      <Skills></Skills>
      <hr class="bg-success" />
      <Projects></Projects>
      <hr class="bg-success" />
      <Socials></Socials>
      <hr class="bg-success" />
      <Footer></Footer>
    </div>
  </body>
</template>

<script>
import Header from "@/components/chibueze/Header";
import Home from "@/components/chibueze/Home";
import About from "@/components/chibueze/About";
import Proficiency from "@/components/chibueze/Proficiency";
import Skills from "@/components/chibueze/Skills";
import Projects from "@/components/chibueze/Projects";
import Socials from "@/components/chibueze/Socials";
import Footer from "@/components/chibueze/Footer";

export default {
  components: {
    Header,
    Home,
    About,
    Proficiency,
    Skills,
    Projects,
    Socials,
    Footer
  },
};
</script>

<style lang="css"></style>
