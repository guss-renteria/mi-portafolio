<script>
import project_data from './proyects.data.js'

export default {
  data: () => ({
    projects: project_data,
    filter_by: 'top4'
  }),

  computed: {
    color_scheme() {
      return this.$store.state.color_scheme.current
    }
  },

  methods: {
    getProjects() {
      switch(this.filter_by) {
        case 'top4':
          return this.projects.filter((_, key) => key < 4)
        default:
          return this.projects
      }
    }
  }
}
</script>

<template>
  <div :class='`projects-comp ${ color_scheme }`'>
    <h2>~ Proyectos</h2>

    <div class='project-container'>
      <div class='project-card' v-for='(project, key) in getProjects()' :key='key'>
        <div class='image-container'>
          <img :src='project.img' :alt='project.name'>
        </div>

        <div class='data-container'>
          <div class='text'>
            <h3>{{ project.name }}</h3>

            <div class='links'>
              <a v-if='project.code_url' :href='project.code_url' target='_blank' rel='noopener noreferrer' :class='`icon-github-alt ${ project.icon_theme }`'></a>
              <a v-if='project.live_url' :href='project.live_url' target='_blank' rel='noopener noreferrer' :class='`icon-eye ${ project.icon_theme }`'></a>
            </div>
          </div>

          <div class='project-tags'>
            <div :class='`tag ${ tag }`' v-for='(tag, key) in project.tags' :key='key'>
            {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <a href='https://github.com/guss-renteria?tab=repositories' target='_blank' rel='noopener noreferrer' class='more-projects'>
    <span class='icon-child'></span> más proyectos
    </a>
  </div>
</template>

<style lang='sass'>
@use './projects.style.scss'
</style>
