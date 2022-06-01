<script>
import Intro from '@/components/intro/intro.component.vue'

export default {
  components: {
    Intro,
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
  </section>
</template>

<style lang='sass'>
@use './home.style'
</style>
