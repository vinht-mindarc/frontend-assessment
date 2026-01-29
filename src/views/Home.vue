<template>
  <div class="exercise-page px-10">
    <div class="container py-10">
      <div class="home-header">
        <h1 class="text-4xl font-bold">Frontend Assessment</h1>
        <div class="text-2xl mt-3">Two exercises to evaluate Vue.js skills and responsive design implementation.</div>
      </div>
      <transition name="fade-up" appear>
        <div class="exercise-list">
          <router-link to="/exercise1" class="exercise-card">
            <div class="exercise-card__body">
              <h2 class="exercise-card__title">Exercise 1</h2>
              <ul class="exercise-card__description">
                <li>Structured SASS/SCSS architecture</li>
                <li>BEM naming convention for custom styles</li>
                <li>Responsive design for desktop and mobile</li>
              </ul>
            </div>
            <div class="exercise-card__footer">
              <span class="exercise-card__button">View Exercise</span>
            </div>
          </router-link>
          <router-link to="/exercise2" class="exercise-card">
            <div class="exercise-card__body">
              <h2 class="exercise-card__title">Exercise 2</h2>
              <ul class="exercise-card__description">
                <li>Tabs for desktop and accordion for mobile</li>
                <li>State-based UI interaction</li>
                <li>Dynamic content rendering</li>
              </ul>
            </div>
            <div class="exercise-card__footer">
              <span class="exercise-card__button">View Exercise</span>
            </div>
          </router-link>
        </div>
      </transition>
    </div>
  </div>
</template>