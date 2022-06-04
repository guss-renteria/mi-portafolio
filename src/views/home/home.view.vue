<script>
import Intro from '@/components/intro/intro.component.vue'
import AboutMe from '@/components/about_me/about_me.component.vue'
import Projects from '@/components/projects/projects.component.vue'
import Footer from '@/components/footer/footer.component.vue'

export default {
  components: {
    Intro,
    AboutMe,
    Projects,
    Footer,
  },
  computed: {
    color_scheme() {
      return this.$store.state.color_scheme.current
    },
  }
}
</script>


<template>
  <section id='Intro' :class='`home-view ${ color_scheme }`'>
    <Intro />
    <AboutMe />
    <Projects />
    <Footer />
  </section>
</template>

<style lang='sass'>
@use './home.style'
</style>
