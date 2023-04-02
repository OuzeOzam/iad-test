<script setup lang="ts">
import { useFetchRestaurants } from '~/composables/restaurants';

const { data: restaurants, isError } = useFetchRestaurants();
</script>

<template>
  <div>
    <RatingFilter />
    <VAlert type="warning" class="my-4">
      TODO: this should be presented as a grid<br>
      • 3 columns max<br>
      • 1 column on small devices <br>
      • DO NOT USE
      <a
        href="https://vuetifyjs.com/en/components/grids/"
        target="_blank"
        class="text-indigo-700"
        rel="noopener noreferrer"
      >
        Vuetify's grid components
      </a>
    </VAlert>
    <LoadingError v-if="isError" />
    <!-- Adding the cardsGrid class -->
    <div v-else-if="restaurants" class="cardsGrid">
      <RestaurantCard
        v-for="restaurant of restaurants"
        :key="restaurant.id"
        :restaurant="restaurant"
      />
    </div>
  </div>
</template>
<style>
.cardsGrid {
  margin: 1rem 0 1rem 0;
  display: grid;
}

/* Using em units for better accessibility than px */
/* Using grid instead of flex for less code and smoother display */

/* Mobile view : 1 column */
@media screen and (max-width: 20em) {
  .cardsGrid {
    grid-template-columns: repeat(1, 1fr);
    gap: 0.9375em;
}
}
/* Little devices view : 2 columns */
@media screen and (min-width: 20em) {
  .cardsGrid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.9375em;
}
}
/* Desktop view : 3 columns */
@media screen and (min-width: 37.5em) {
  .cardsGrid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.9375em;
}
}
</style>