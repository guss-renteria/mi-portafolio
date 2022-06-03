<script>
import Intro from '@/components/intro/intro.component.vue'
import AboutMe from '@/components/about_me/about_me.component.vue'

export default {
  components: {
    Intro,
    AboutMe,
  },
  computed: {
    color_scheme() {
      return this.$store.state.color_scheme.current
    },
  }
}
</script>


<template>
  <section :class='`home-view ${ color_scheme }`'>
    <Intro />
    <AboutMe />
  </section>
</template>

<style lang='sass'>
@use './home.style'
</style>
