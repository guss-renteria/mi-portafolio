<script>
export default {
  mounted() {
    setInterval(this.animName, 2000)
  },
  methods: {
    animName() {
      let name_parts = this.$refs.name.children
      let rand_part_id = Math.floor(Math.random() * name_parts.length)
      const class_name = 'active'

      name_parts[ rand_part_id ].classList.add( class_name )
      setTimeout(() => {
        name_parts[ rand_part_id ].classList.remove( class_name )
      }, 400);
    },
    nextColorScheme() {
      this.$store.dispatch('nextColorScheme')
    },
  },
  computed: {
    color_scheme() {
      return this.$store.state.color_scheme.current
    },
  }
}
</script>

<template>
  <div id='Home' :class='`intro-comp ${ color_scheme }`'>
    <button class='switch-scheme' @click='nextColorScheme'>
      <span class='icon-dark-theme'></span>
      <span class='icon-light-theme'></span>
    </button>

    <div class='intro-container'>
      <p class='greeting'>Hola!, soy</p>
      <h1 class='name' ref='name'>
        <span>g</span>
        <span>u</span>
        <span>s</span>
        <span>s</span>
        <span>t</span>
        <span>a</span>
        <span>v</span>
        <span>o</span>
      </h1>
      <p class='service'>Desarrollador web</p>
    </div>
  </div>
</template>

<style lang='sass'>
@use './intro.style'
</style>
