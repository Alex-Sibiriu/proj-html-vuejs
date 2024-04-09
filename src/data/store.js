import { reactive } from 'vue';

export const store = reactive({
  
  menu: [
    {
      name: 'Home',
      link: '#'
    },
    {
      name: 'Recipes',
      link: '#'
    },
    {
      name: 'Places',
      link: '#'
    },
    {
      name: 'Blog',
      link: '#'
    },
    {
      name: 'About',
      link: '#'
    },
    {
      name: 'Contact',
      link: '#'
    }
  ],

  recipes: [
    {
      id: 11,
      link: '#',
      img: 'food-corner.jpg',
      title: 'Food Corner: Top Japanese Restaurants for Sushi',
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex.',
      creator: 'admin',
      date: 'March 25th, 2019',
    },
    {
      id: 12,
      link: '#',
      img: 'roundup.jpg',
      title: 'Roundup: My New Favourite Recipes For Healthy Living',
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex.',
      creator: 'admin',
      date: 'March 25th, 2019',
    },
    {
      id: 13,
      link: '#',
      img: 'toast.jpg',
      title: 'Why These Toasts with Tea are My New Favorite',
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex.',
      creator: 'admin',
      date: 'March 25th, 2019',
    },
    {
      id: 14,
      link: '#',
      img: 'organic.jpg',
      title: 'Organic Choices For Healthier Living',
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex.',
      creator: 'admin',
      date: 'March 25th, 2019',
    },
    {
      id: 15,
      link: '#',
      img: 'korean-food.jpg',
      title: 'Meal Prep: Korean Bibimbap with Kimchi',
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex.',
      creator: 'admin',
      date: 'March 25th, 2019',
    },
    {
      id: 16,
      link: '#',
      img: 'street-food.jpg',
      title: 'Exploring Street Food in Bangkok',
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex.',
      creator: 'admin',
      date: 'March 25th, 2019',
    },
    {
      id: 17,
      link: '#',
      img: 'water-side.jpg',
      title: '5 Waterside Restaurants in Istanbul for Special Events',
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex.',
      creator: 'admin',
      date: 'March 25th, 2019',
    }
  ]

});