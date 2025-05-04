<template>
    <div :class="[{ 'bg-light': !isDark, 'bg-dark text-light': isDark }]">
      <!-- Hero Section -->
      <section class="hero text-center text-dark mt-5 py-5" 
  style="
    background: 
      radial-gradient(circle, rgba(238,238,238,0.6) 1px, transparent 1px),
      radial-gradient(circle, rgba(238,238,238,0.3) 1px, transparent 1px),
      linear-gradient(to right, #f8f9fa, #e9ecef);
    background-position: 0 0, 10px 10px, 0 0;
    background-size: 20px 20px, 20px 20px, 100% 100%;
  "
>
  <div class="container">
    <img src="/avatar.png" alt="Swathi" class="rounded-circle mb-3" width="120" />
    <h1 class="display-5 fw-bold">Hi, I'm Swathi</h1>


    <!-- Short Tagline -->
    <p class="lead">Full-Stack Developer | Cloud Enthusiast | Problem Solver</p>

    <!-- Optional Sub-line -->
    <p class="fs-6 text-dark">
      8+ years crafting modern web apps using Angular, Vue.js & Node.js
    </p>

    <div class="mt-3 d-flex justify-content-center gap-3 flex-wrap">
      <a href="/swathi_nayudu_resume.pdf" download class="btn btn-outline-dark">📄 Resume</a>
      <a href="https://www.linkedin.com/in/swathi-nayudu-ba6b48b0/" class="btn btn-outline-dark" target="_blank">🔗 LinkedIn</a>
      <a href="https://github.com/swathin74" class="btn btn-outline-dark" target="_blank">💻 GitHub</a>
    </div>
  </div>
</section>

  <!-- Sections Wrapper -->
<div class="sections-background">
      <!-- About Me -->
      <section class="py-5" data-aos="fade-up">
  <div class="container">
    <h3>About Me</h3>
    <p class="text-muted fs-5">
      I am a Full-Stack Developer with 8+ years of experience building robust front-end and back-end applications using 
      <strong>Angular</strong>, <strong>Vue.js</strong>, and <strong>Node.js</strong>. 
      Currently, I am upskilling in <strong>AWS</strong> and pursuing a 
      <strong>Master of Science in Information Systems</strong> to deliver scalable, secure, and high-performing cloud-based solutions. 
    </p>
  </div>
</section>

  
      <!-- Skills Section -->
      <section class="container" data-aos="fade-up">
        <Skills />
      </section>

  
      <!-- Timeline & Projects -->
      <section class="container">
        <Timeline />
      </section>
      <!-- Featured Projects -->
<section class="container" data-aos="fade-up">
  <h3 class="mb-4">Projects</h3>
  <div class="row g-4">

    <!-- Project 1 -->
    <div class="col-md-6">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Microfrontend Migration</h5>
          <p class="card-text">Migrated a legacy Angular app to Vue.js with micro-frontend architecture using Webpack Module Federation.</p>
          <a href="https://www.pmaccelerator.io/" target="_blank" class="btn btn-dark">View</a>
        </div>
      </div>
    </div>

    <!-- Project 2 -->
    <div class="col-md-6">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Weather Dashboard</h5>
          <p class="card-text">Real-time weather app using Vue and OpenWeather API. Displays current and forecasted weather info.</p>
          <a href="https://weather-app-new-n2j2.vercel.app/" target="_blank" class="btn btn-dark">View</a>
        </div>
      </div>
    </div>

  </div>

  <!-- View All Projects Button -->
  <div class="mt-4 py-4 text-center">
    <router-link to="/projects" class="btn btn-outline-dark btn-lg">View All Projects</router-link>
  </div>
</section>

    </div>
</div>
  </template>
  
  <script setup>
  import { inject } from 'vue'
  import Timeline from '../components/Timeline.vue'
  import Skills from '../components/Skills.vue'
  import Projects from '../components/Projects.vue'
//   import ThemeSwitcher from '../components/ThemeSwitcher.vue'
  
  const isDark = inject('isDark', false)
  </script>
  
  <style scoped>
  .hero {
    background: linear-gradient(to right, #4facfe, #00f2fe);
    color: var(--primary-text-color);
  }
  
  .svg-divider {
    line-height: 0;
    margin-bottom: -10px;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  .lead {
    font-size: 1.25rem;
  }
  .sections-background {
  background-color: #f9f9f9;
  background-image: radial-gradient(#d3d3d3 1px, transparent 1px);
  background-size: 20px 20px;
}
.btn:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  transition: all 0.2s ease;
}

img.rounded-circle {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
h5 {
  font-weight: 600;
}

.badge {
  font-size: 0.9rem;
  padding: 0.5em 0.75em;
  border-radius: 50px;
}


  </style>
  