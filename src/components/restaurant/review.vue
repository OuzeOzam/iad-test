<script setup lang="ts">
import { type Review } from '~/composables/restaurants';

defineProps<{
  reviews: Review
}>();
</script>

<template>
  <VCard class="va-company-review" tag="li">
    <VCardText>
      <VAlert type="warning">
        TODO: implement the reviews
        <br>
        • Rating using the appropriate Vuetify component
        <br>
        • Text (with carriage return)
      </VAlert>      
    </VCardText>

    <VCardText v-for="review of reviews" :key="review">
      <VRating half-increments readonly :model-value="review.rating" />
      <pre v-text="review.text" />
    </VCardText>
  </VCard>
</template>
