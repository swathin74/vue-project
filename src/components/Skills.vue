<template>
    <section class="container" data-aos="fade-up">
      <h3 class="mb-4">Skills</h3>
      <div class="d-flex flex-wrap gap-2">
        <span v-for="skill in skills" :key="skill" class="skill-badge">{{ skill }}</span>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Skills",
    data() {
      return {
        skills: [
          "Vue.js", "Angular", "React", "Node.js", "Nest.js", "TypeScript", 
          "JavaScript", "HTML", "CSS", "AWS", "Docker", "Kubernetes", 
          "Microservices", "CI/CD", "Agile", "Bootstrap", "Tailwind CSS"
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .skill-badge {
    background-color: #f8f9fa; /* Light gray */
    color: #212529; /* Dark text */
    border: 1px solid #dee2e6;
    border-radius: 50rem; /* pill shape */
    padding: 0.5rem 1rem;
    font-size: 0.95rem;
    cursor: default;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .skill-badge:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  </style>
  