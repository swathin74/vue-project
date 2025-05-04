<template>
    <section class="contact-page">
      <div class="container my-5">
        <h3 class="mb-4 text-center">Get in Touch</h3>
  
        <div class="row">
          <!-- Email Card -->
          <div class="col-md-3 mb-4">
            <div class="card contact-card">
              <div class="card-body text-center">
                <i class="fas fa-envelope fa-2x mb-3"></i>
                <p class="card-text">
                  <a href="mailto:swatin74@gmail.com">swatin74@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
  
          <!-- Phone Card -->
          <div class="col-md-3 mb-4">
            <div class="card contact-card">
              <div class="card-body text-center">
                <i class="fas fa-phone-alt fa-2x mb-3"></i>
                <p class="card-text">
                  <a href="tel:+1234567890">+1 (502) 202-3921</a>
                </p>
              </div>
            </div>
          </div>
  
          <!-- Location Card -->
          <div class="col-md-3 mb-4">
            <div class="card contact-card">
              <div class="card-body text-center">
                <i class="fas fa-map-marker-alt fa-2x mb-3"></i>
                <p class="card-text">Louisville, KY, USA</p>
              </div>
            </div>
          </div>
  
          <!-- LinkedIn Card -->
          <div class="col-md-3 mb-4">
            <div class="card contact-card">
              <div class="card-body text-center">
                <i class="fab fa-linkedin fa-2x mb-3"></i>
                <p class="card-text">
                  <a href="https://www.linkedin.com/in/swathi-nayudu-ba6b48b0/" target="_blank" rel="noopener noreferrer">
                    Visit my LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactPage",
  };
  </script>
  
  <style scoped>
  .contact-page {
    background-color: #f9f9f9;
    padding: 50px 0;
  }
  
  .contact-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .contact-card:hover {
    transform: scale(1.05);
  }
  
  .contact-card .card-body {
    padding: 20px;
  }
  
  .contact-card i {
    color: #6c757d;
    transition: color 0.3s ease;
  }


  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .card-text a {
    color: #000;
    text-decoration: none;
  }
  
  .card-text a:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .col-md-3 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  </style>
  