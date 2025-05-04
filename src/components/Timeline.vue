<template>
    <section class="container my-5">
      <h3 class="mb-4">Experience</h3>
      <div class="timeline">
  <div class="timeline__component">
    <div class="timeline__date timeline__date--right">
        2024, Sep - 2024, Dec
    </div>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component timeline__component--bg">
    <h2 class="timeline__title">Senior Software Engineer</h2>
    <ul class="timeline__paragraph">
        <li>Migrated a legacy Angular application to a modern Vue.js-based architecture, improving performance and scalability.</li>
        <li>Developed reusable modules using micro-frontend architecture with Webpack Module Federation for better maintainability.</li>
        <li>Implemented test-driven development (TDD) practices with Jest, ensuring robust and reliable code.</li>
        <li>Collaborated with product managers to refine product design and improve user experience.</li>
  </ul>
  </div>
  <div class="timeline__component timeline__component--bg">
    <h2 class="timeline__title">Senior Software Engineer, UI/UX</h2>
    <ul class="timeline__paragraph">
        <li>Migrated a legacy Angular application to a modern Vue.js-based architecture, improving performance and scalability.</li>
        <li>Developed reusable modules using micro-frontend architecture with Webpack Module Federation for better maintainability.</li>
        <li>Implemented test-driven development (TDD) practices with Jest, ensuring robust and reliable code.</li>
        <li>Collaborated with product managers to refine product design and improve user experience.</li>
  </ul>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component">
    <div class="timeline__date">2018, Nov - 2021, Apr</div>
  </div>
  <div class="timeline__component">
    <div class="timeline__date timeline__date--right">2016, Oct - 2018, Nov</div>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component timeline__component--bg">
    <h2 class="timeline__title">Software Engineer</h2>
    <ul class="timeline__paragraph">
        <li>Migrated a legacy Angular application to a modern Vue.js-based architecture, improving performance and scalability.</li>
        <li>Developed reusable modules using micro-frontend architecture with Webpack Module Federation for better maintainability.</li>
        <li>Implemented test-driven development (TDD) practices with Jest, ensuring robust and reliable code.</li>
        <li>Collaborated with product managers to refine product design and improve user experience.</li>
  </ul>
  </div>
  <div class="timeline__component timeline__component--bottom timeline__component--bg">
    <h2 class="timeline__title">Software Engineer</h2>
    <ul class="timeline__paragraph">
        <li>Migrated a legacy Angular application to a modern Vue.js-based architecture, improving performance and scalability.</li>
        <li>Developed reusable modules using micro-frontend architecture with Webpack Module Federation for better maintainability.</li>
        <li>Implemented test-driven development (TDD) practices with Jest, ensuring robust and reliable code.</li>
        <li>Collaborated with product managers to refine product design and improve user experience.</li>
  </ul>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
    <div class="timeline__point timeline__point--bottom"></div>
  </div>
  <div class="timeline__component timeline__component--bottom">
    <div class="timeline__date">2013, Sep - 2016, Sep</div>
  </div>
</div>

    </section>
  </template>
  
  
  <!-- <script>
  export default {
    name: "Timeline",
    data() {
      return {
        experiences: [
          {
            title: "Senior Software Engineer",
            company: "Product Manager Accelerator",
            companyLink: "https://www.example.com", // Replace with the actual link
            period: "Sep 2024 - Dec 2024 | Louisville, U.S"
          },
          {
            title: "Senior Software Engineer, UI/UX",
            company: "Berkadia Services Ind Pvt Ltd",
            companyLink: "https://www.berkadia.com", // Replace with the actual link
            period: "Nov 2018 - Apr 2021 | Hyderabad, India"
          },
          {
            title: "Software Engineer",
            company: "Zensar Technologies",
            companyLink: "https://www.zensar.com", // Replace with the actual link
            period: "Oct 2016 - Nov 2018 | Hyderabad, India"
          },
          {
            title: "Software Engineer",
            company: "TechAspect Solutions",
            companyLink: "https://www.techaspect.com", // Replace with the actual link
            period: "Sep 2013 - Sep 2016 | Hyderabad, India"
          }
        ]
      }
    }
  }
  </script> -->

<script>
export default {
  data() {
    return {
      experiences: [
        {
          role: 'Senior Software Engineer',
          company: 'Product Manager Accelerator',
          companyLink: 'https://example.com',
          period: 'Sep 2024 - Dec 2024',
          summary: 'Migrated Angular app to Vue microfrontends with TDD practices.',
        },
        {
          role: 'Senior Software Engineer, UI/UX',
          company: 'Berkadia',
          companyLink: 'https://www.berkadia.com',
          period: 'Nov 2018 - Apr 2021',
          summary: 'Led design system integration and built microservices.',
        },
        // Add more...
      ]
    };
  }
};
</script>

  
  <style scoped>
body {
  background: #2d3436; /* Dark background */
}

.timeline {
  margin: 0 auto;
  max-width: 850px;
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr 3px 1fr;
  font-family: "Fira Sans", sans-serif;
  color: #000000; 
}

.timeline__component {
  margin: 0 20px 20px 20px;
}

.timeline__component--bg {
  padding: 1.5em;
  background: rgba(255, 255, 255, 0.1); /* Subtle, dark background for the timeline items */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3); /* Shadow for depth */
  border-radius: 20px;
}

.timeline__middle {
  position: relative;
  background: #1e2a3d; /* Darker background for the center line */
}

.timeline__point {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 18px;
  height: 18px;
  background: #ffffff; /* White point to make it stand out */
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2); /* Slight shadow for depth */
}

.timeline__point--bottom {
  top: initial;
  bottom: 0;
}
.timeline__date {
  font-weight: 600; /* Heavier font for date */
  color: #000000; 
}
.timeline__date--right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.timeline__title {
  margin: 0;
  font-size: 1.25em;
  font-weight: bold;
  color: #000000;  
}

.timeline__paragraph {
  line-height: 1.7;
  font-size: 1em;
  color: rgb(33 37 41 / 75%) /* Light grayish color for text */
}






  </style>
  