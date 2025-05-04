<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <!-- Brand on the left -->
        <a class="navbar-brand" href="/">Swathi Nayudu</a>
  
        <!-- Toggler for mobile -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Links aligned to right -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item me-4">
              <router-link to="/" class="nav-link" active-class="active">Home</router-link>
            </li>
            <li class="nav-item me-4">
              <router-link to="/projects" class="nav-link" active-class="active">Projects</router-link>
            </li>
            <li class="nav-item me-4">
              <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  .navbar-nav .nav-link.active {
    color: #fff; /* White text for active item */
    font-weight: bold; /* Make text bold */
  }
  
  /* Add padding to prevent content from hiding under the fixed navbar */
  body {
    padding-top: 80px; 
  }
  </style>
  