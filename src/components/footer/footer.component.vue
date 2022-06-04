<script>
export default {
  computed: {
    color_scheme() {
      return this.$store.state.color_scheme.current
    }
  }
}
</script>

<template>
  <div :class='`footer-comp ${ color_scheme }`'>
    <div class='nav-footer'>
      <a href='#Intro'>Inicio</a>
      <a href='#About-me'>Acerca de mí</a>
      <a href='#Projects'>Proyectos</a>
    </div>

    <h2 class='footer-name'>Gusstavo</h2>

    <div class='contact-me'>
      <a href='https://www.linkedin.com/in/gustavo-renter%C3%ADa-317577238/' target='_blank' rel='noopener noreferrer' class='icon-linkedin'></a>
      <a href='https://api.whatsapp.com/send?phone=523321469421&text=hola,%20qué%20tal?' target='_blank' rel='noopener noreferrer' class='icon-whatsapp'></a>
    </div>
  </div>
</template>

<style lang='scss'>
@use './footer.style.scss'
</style>
