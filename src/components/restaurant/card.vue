<script setup lang="ts">
import { type Restaurant } from '~/composables/restaurants';
import { averageRating } from '~/composables/restaurants';

defineProps<{
  restaurant: Restaurant
}>();
</script>

<template>
  <VCard>
  <VImg height="200" cover :src="restaurant?.photos?.[0]" />
  <VCardItem>
      <VCardTitle>{{ restaurant?.name }}</VCardTitle>
    </VCardItem>
    <VCardText>
      <VRow align="center" class="mx-0 stars-row">
        <pre v-if="restaurant?.reviews?.[0]" class="font-sans">{{ averageRating(restaurant?.reviews).toFixed(1) }}</pre>
        <pre v-else class="font-sans">0</pre>
        
        <!-- 
              I wanted to use the v-for loop but after many tests 
              even with the documentation I didn't succeed, so I used 
              an external function I called averageRating
          -->
        <!-- Use half increments to give more detail to the user -->
        <VRating 
          :model-value="averageRating(restaurant?.reviews)" 
          color="#fdc106" 
          half-increments 
          density="compact"
          readonly 
          size="small" 
          class="ml-1"
        />
      </VRow>
    </VCardText>
    <VDivider class="mx-4 my-2"></VDivider>
    <VCardText v-if="restaurant.location">
      <RestaurantLocation :location="restaurant?.location" />
    </VCardText>


    <VCardActions class="mt-auto">
      <VBtn color="primary" variant="text" :to="`/restaurants/${restaurant?.id}`">
        see more
      </VBtn>
    </VCardActions>
  </VCard>
</template>
<style>
.stars-row {
  align-items: center;
}
</style>