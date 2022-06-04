<script>
export default {
  data() {
    return {
      frontend_skills_c1: {
        React: 'avanzado',
        Vue: 'intermedio',
        JS: 'avanzado',
      },
      frontend_skills_c2: {
        HTML: 'avanzado',
        CSS: 'avanzado',
        SASS: 'intermedio',
      },
      backend_skills_c1: {
        NodeJS: 'intermedio',
        Django: 'avanzado',
      }
    }
  },
  computed: {
    color_scheme() {
      return this.$store.state.color_scheme.current
    },
  }
}
</script>

<template>
  <div id='About-me' :class='`about-me-comp ${ color_scheme }`'>
    <div class='about-me-container'>
      <h2>~ Acerca de mí</h2>
      <h3>Gustavo Rentería</h3>
      <p class='cite'>Programador autodidacta, tengo mas de 2 años de experiencia trabajando en desarrollo web Front-end y Back-end.</p>

      <div class='contact'>
        <div class='contact-container'>
          contactame ~ 
          <a href='https://www.linkedin.com/in/gustavo-renter%C3%ADa-317577238/' class='icon-linkedin'></a>
          <a href='https://api.whatsapp.com/send?phone=523321469421&text=hola,%20qué%20tal?' target='_blank' rel='noopener noreferrer' class='icon-whatsapp'></a>
        </div>
      </div>
    </div>

    <div class='about-me-skills'>
      <div class='front-end-skills'>
        <h3>Habilidades Front-end</h3>
        <div class='col'>
          <div class='skill' v-for='(value, key) in frontend_skills_c1' :key='key'>
            <span class='icon-check-circle'>&nbsp;</span>
            <span class='icon-caret-up' v-if='value == `avanzado`'></span>
            <span class='icon-caret-right' v-else></span>
            <h4>{{ key }}</h4>
            <p>- {{ value }}</p>
          </div>
        </div>
        <div class='col'>
          <div class='skill' v-for='(value, key) in frontend_skills_c2' :key='key'>
            <span class='icon-check-circle'>&nbsp;</span>
            <span class='icon-caret-up' v-if='value == `avanzado`'></span>
            <span class='icon-caret-right' v-else></span>
            <h4>{{ key }}</h4>
            <p>- {{ value }}</p>
          </div>
        </div>
      </div>

      <div class='back-end-skills'>
        <h3>Habilidades Back-end</h3>
        <div class='skill' v-for='(value, key) in backend_skills_c1' :key='key'>
          <span class='icon-check-circle'>&nbsp;</span>
          <span class='icon-caret-up' v-if='value == `avanzado`'></span>
          <span class='icon-caret-right' v-else></span>
          <h4>{{ key }}</h4>
          <p>- {{ value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='sass'>
@use './about_me.style'
</style>
