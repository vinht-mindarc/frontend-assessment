<template>
  <div class="exercise-page exercise-2">
    <div class="container" v-if="isMobile !== null">
      <transition name="fade-up" appear>
        <!-- Desktop Tabs -->
        <div v-if="!isMobile" class="tabs">
          <div class="tabs__header">
            <div class="tabs__item" :class="{ 'tabs__item--active': activeTabIndex  === index }" v-for="(item, index) in exerciseTabsData"
              :key="index" @click="selectTab(index)">
              {{ item.title }}
            </div>
          </div>
          <div class="tabs__content rte" v-html="exerciseTabsData[activeTabIndex ].content">
          </div>
        </div>
        <!-- Mobile Accordion -->
        <div v-else class="accordion">
          <div class="accordion__item" v-for="(item, index) in exerciseTabsData" :key="index">
            <div class="accordion__header" :class="{ 'accordion__header--active': isActive(index) }"
              @click="toggleAccordion(index)">
              {{ item.title }}
              <span class="accordion__icon" :class="{ 'accordion__icon--active': isActive(index) }"></span>
            </div>
            <div class="accordion__content rte" :class="{ 'accordion__content--active': isActive(index) }" v-html="item.content">
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>


<script>
import exerciseTabsData from '../../public/data.json'
export default {
  name: 'Exercise2',
  data() {
    return {
      exerciseTabsData,
      activeTabIndex : 0,
      isMobile: null,
      onResize: null
    };
  },
  mounted() {
    this.updateScreenState();

    this.onResize = this.debounce(this.updateScreenState, 200);
    window.addEventListener('resize', this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    selectTab(index) {
      this.activeTabIndex  = index;
    },
    toggleAccordion(index) {
      this.activeTabIndex  = this.activeTabIndex  === index ? null : index;
    },
    isActive(index) {
      return this.activeTabIndex  === index;
    },
    debounce(fn, delay = 200) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      };
    },
    updateScreenState() {
      const mobile = window.innerWidth < 768;

      if(this.isMobile !== mobile) {
        this.isMobile = mobile;
        this.activeTabIndex  = 0;
      }
    }
  }
};

</script>