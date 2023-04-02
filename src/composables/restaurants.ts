import { api } from '~/services/api';

export interface Restaurant {
  name: string
  id: string
  url: string
  phone: string
  display_phone: string
  photos: string[]
  location?: Location
  reviews: Review[]
}

export interface Location {
  address1: string
  city: string
  postal_code: string
  formatted_address: string
}

export interface Review {
  text: string
  rating: number
  id: string
}

export function useFetchRestaurants() {
  return useQuery({
    queryKey: [`restaurants-list`],
    queryFn: () => {
      const url = `restaurants`;
      return api(url).json<Restaurant[]>();
    },
  });
}

export function useFetchRestaurant({ restaurantId }: { restaurantId: string | string[] }) {
  return useQuery({
    queryKey: [`company`, restaurantId],
    queryFn: () => {
      const url = `restorants/${restaurantId}`;
      return api(url).json<Restaurant>();
    },
  });
}

// This function returns the average of several numbers 
// by passing them through a loop that will first add 
// them and then divide them to the total number
export function averageRating(reviews: any) {
  let sum = 0;
  for (const review of reviews)
    sum += review.rating;
  const avrg = sum / reviews.length;
  return avrg;
}