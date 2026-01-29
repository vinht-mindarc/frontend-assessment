<template>
  <section class="hero-banner">
    <picture>
      <source :srcset="desktopBannerImageUrl" media="(min-width: 768px)" />
      <img :src="mobileBannerImageUrl" alt="Exercise 1" fetchpriority="high" height="600" width="600" class="hero-banner__image" />
    </picture>
    <div class="hero-banner__content">
      <h1 class="hero-banner__title">Hello Developer!</h1>
      <div class="hero-banner__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
    </div>
  </section>
  <div class="exercise-page exercise-1">
    <div class="container">
      <section>
        <div class="content-grid">
          <article class="content-card" v-for="(item, index) in contentItemsList" :key="index">
            <div class="content-card__body">
              <img class="content-card__image" :src="contentImageUrl" alt="Content Image" loading="lazy" height="300" width="400" />
              <div class="content-card__description">
                {{ item.description }}
              </div>
            </div>
            <div class="content-card__footer">
              <a href="#" class="content-card__link">READ MORE</a>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise1',
  data() {
    return {
      desktopBannerImageUrl: 'https://placehold.co/1920x650',
      mobileBannerImageUrl: 'https://placehold.co/600x600',
      contentImageUrl: 'https://placehold.co/400x300',
      contentItemsList: [
        {
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
        }
      ]
    };
  },
}
</script>
