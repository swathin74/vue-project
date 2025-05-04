<template>
    <div class="card mb-4" style="width: 18rem;">
      <img :src="project.image" class="card-img-top" alt="Project image" />
      <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <a :href="project.link" class="btn btn-primary">View Project</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      project: Object, // To pass project data
    },
  }
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.3s;
  }
  .card:hover {
    transform: scale(1.05);
  }
  </style>
  