<script setup lang="ts">
import { type Review } from '~/composables/restaurants';

defineProps<{
  reviews: Review
}>();
</script>

<template>
  <div class="va-company-review" tag="li" v-for="review of reviews" :key="review">
      <VCardTitle class="pl-0">
        <VRow align="center" class="mx-0 stars-row">
        <pre class="font-sans stars-title">{{ review.rating.toFixed(1) }}</pre>
          <VRating 
              :model-value="review.rating" 
              color="#fdc106" 
              half-increments 
              density="compact"
              readonly 
              size="small" 
              class="ml-1 mb-1"
            />
        </VRow>
      </VCardTitle>
      <VCardText>
        <pre class="font-sans" v-text="review.text" />
      </VCardText>
    </div>
</template>
<style>
.stars-row {
  align-items: center;
}
.stars-title {
  font-size: 0.8em;
}
</style>
