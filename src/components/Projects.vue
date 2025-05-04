<template>
    <div class="px-3 mt-5">
      <h3>Projects</h3>
      <div class="row mt-4">
        <div
          class="col-md-4 mb-4"
          v-for="project in projects"
          :key="project.title"
        >
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
            </div>
            <div class="card-footer text-end">
              <a :href="project.link" target="_blank" class="btn btn-sm btn-outline-primary">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Projects',
    data() {
      return {
        projects: [
          {
            title: 'Personal Portfolio',
            description: 'This site! Built with Vue 3, Bootstrap, and Vite.',
            link: 'https://your-portfolio-link.com'
          },
          {
            title: 'Weather Dashboard',
            description: 'Real-time weather app using Vue and OpenWeather API.',
            link: 'https://github.com/yourusername/weather-vue'
          },
          {
            title: 'Task Manager',
            description: 'Simple CRUD task manager using Vue and Firebase.',
            link: 'https://task-vue-firebase.web.app'
          }
        ]
      }
    }
  }
  </script>
  