<script setup lang="ts">
import { useFetchRestaurant } from '~/composables/restaurants';
import { averageRating } from '~/composables/restaurants';

const { params } = useRoute();
const { data: restaurant, isError } = useFetchRestaurant({ restaurantId: params.restaurantId });
</script>

<template>
  <VAlert v-if="isError" type="warning" class="mt-4">
    TODO: It might be an Fetch error
    <br>
    You should fix that
  </VAlert>
  <!-- Add the sm prefix -->
  <div v-else class="grid sm-grid-cols-[minmax(0,_1fr)_16rem] gap-6">
    <VCard v-if="restaurant">
      <VImg  
        v-for="photo in restaurant.photos" 
        :key="photo" 
        :src="restaurant.photos[0]" 
        height="250" 
        cover
        gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <VCardTitle class="!text-4xl text-white">
          {{ restaurant.name }}
        <VRow class="stars-row">
          <VRating 
            half-increments
            density="compact"
            size="large"
            readonly 
            color="#fdc106"
            class="mb-1"
            :model-value="averageRating(restaurant?.reviews)"
          />
          <pre v-if="restaurant?.reviews?.[0]" class="font-sans rating-value">{{ averageRating(restaurant?.reviews).toFixed(1) }}</pre>
          <pre v-else class="font-sans rating-value">0</pre>
        </VRow>
        </VCardTitle>
       
      </VImg>
      <VCardText>
        <div class="grid grid-cols-2 gap-4">
          <RestaurantLocation v-if="restaurant.location" :location="restaurant.location" />
          <KeyValue icon="mdi-phone">
            <p v-if="restaurant.display_phone" class="text-body-1">
              <!-- switch phone to display_phone value -->
              {{ restaurant.display_phone }}
            </p>
          </KeyValue>
        </div>
      </VCardText>
    </VCard>
    <aside v-if="restaurant?.reviews?.[0]">
      <ul class="pa-0">
        <VCard>
          <RestaurantReview
        :reviews="restaurant?.reviews"
        />
        </VCard>
      </ul>
    </aside>
    <VCard v-else>
      <VCardText>There is no reviews on this restaurant</VCardText>
    </VCard>
    
  </div>
  <VBtn 
  to="/"
  class="my-5" 
  prepend-icon="mdi-arrow-left" 
  variant="text" 
  color="primary">
  Go-back to restaurants
  </VBtn>
</template>
<style>
.rating-value {
  color: #fdc106;
  font-weight: 700;
  font-size: 0.9em;
}
.stars-row {
  align-items: center;
  margin: 0;
}
</style>