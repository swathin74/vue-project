<template>
    <section class="container mt-5 pt-5">
      <!-- Page Heading -->
      <h2 class="mb-4 text-center">My Projects</h2>
      <p class="mb-5 text-center text-muted">
        A selection of professional and personal projects I’ve worked on — focused on frontend architecture, UI/UX, and scalable solutions.
      </p>
  
      <div class="row g-4">
        <!-- Project 1 -->
        <div class="col-md-6">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
              <i class="fas fa-project-diagram fa-2x mb-3 theme-icon"></i>
              <h5 class="card-title">Modular Micro-Frontend Migration</h5>
              <p class="card-text">
                Migrated a legacy Angular app to a Vue.js micro-frontend architecture using Webpack Module Federation, boosting scalability and team autonomy.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Project 2 -->
        <div class="col-md-6">
          <div class="card project-card h-100">
            <div class="card h-100 shadow-sm">
              <div class="card-body text-center">
                <i class="fas fa-tasks fa-2x mb-3 theme-icon"></i>
                <h5 class="card-title">Vue.js Task Manager App</h5>
                <p class="card-text">
                  Built with Vue 3, Pinia, and Bootstrap 5. Features drag-and-drop task management, local storage, and responsive design.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Portfolio Website -->
        <div class="col-md-6">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
              <i class="fas fa-user-circle fa-2x mb-3 theme-icon"></i>
              <h5 class="card-title">Portfolio Website</h5>
              <p class="card-text">
                Developed using Vue 3 and Bootstrap 5. Fully responsive, SEO-optimized, and deployed on Netlify to showcase skills and projects.
              </p>
            </div>
          </div>
        </div>
  
        <!-- UX & Design System -->
        <div class="col-md-6">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
              <i class="fas fa-pencil-ruler fa-2x mb-3 theme-icon"></i>
              <h5 class="card-title">UX & Design System Integration</h5>
              <p class="card-text">
                Integrated a global design system into existing apps, improving UI consistency and accessibility across multiple products.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Test Automation -->
        <div class="col-md-6">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
              <i class="fas fa-vial fa-2x mb-3 theme-icon"></i>
              <h5 class="card-title">Test Automation with Jest</h5>
              <p class="card-text">
                Implemented Test-Driven Development (TDD) using Jest, achieving 90% test coverage and reducing bugs in production.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Resume Download Button -->
      <div class="text-center mt-5">
        <a href="/swathi_nayudu_resume.pdf" class="btn btn-dark" download>Download My Resume</a>
      </div>
    </section>
  </template>
  
  <style scoped>
  .project-card {
    background: rgba(255, 255, 255, 0.1); /* Dark background to match the theme */
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    color: #000; /* Text color */
  }
  
  .theme-icon {
    color: #6c757d; /* Grey color for icons */
  }
  
  .card-title {
    color: #000; /* Black for card titles */
  }
  
  .card-text li {
    margin-bottom: 0.5rem;
    color: rgba(33, 37, 41, 0.75); /* Match your timeline text */
  }
  
  .btn-dark {
    background-color: #343a40; /* Dark background for the button */
    color: white; /* White text on button */
    border: none;
  }
  
  .btn-dark:hover {
    background-color: #23272b; /* Slightly lighter dark color on hover */
    color: #f8f9fa; /* Light text on hover */
  }
  </style>
  