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

  articles: [
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
  ],

  recipes : [
    {
      id: 111,
      link: '#',
      img: 'Yogurt-Nan-1200x790.jpg',
      title: 'Lunch Favourite with Salad, Naan And Beans',
      tags: ['Bakery', 'Featured', 'Healthy', 'Latest Recipes', 'Staff Picks'],
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
      active: true
    },
    {
      id: 112,
      link: '#',
      img: 'r-rachel-park-366508-unsplash-min-1200x790.jpg',
      title: 'Lunch Favourite with Salad, Naan And Beans',
      tags: ['Bakery', 'Featured', 'Healthy', 'Latest Recipes', 'Staff Picks'],
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
      active: false
    },
    {
      id: 113,
      link: '#',
      img: 'r-michelle-tsang-500721-unsplash-min-1200x790.jpg',
      title: 'Lunch Favourite with Salad, Naan And Beans',
      tags: ['Bakery', 'Featured', 'Healthy', 'Latest Recipes', 'Staff Picks'],
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
      active: false
    },
    {
      id: 114,
      link: '#',
      img: 'r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg',
      title: 'Lunch Favourite with Salad, Naan And Beans',
      tags: ['Bakery', 'Featured', 'Healthy', 'Latest Recipes', 'Staff Picks'],
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
      active: false
    },
    {
      id: 115,
      link: '#',
      img: 'r-brooke-lark-96398-unsplash-min-460x295.jpg',
      title: 'Lunch Favourite with Salad, Naan And Beans',
      tags: ['Bakery', 'Featured', 'Healthy', 'Latest Recipes', 'Staff Picks'],
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
      active: false
    },
    {
      id: 116,
      link: '#',
      img: 'quick-summer-drink-460x295.jpg',
      title: 'Lunch Favourite with Salad, Naan And Beans',
      tags: ['Bakery', 'Featured', 'Healthy', 'Latest Recipes', 'Staff Picks'],
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
      active: false
    },
    {
      id: 117,
      link: '#',
      img: 'perfect-cosmopolitan-460x295.jpg',
      title: 'Lunch Favourite with Salad, Naan And Beans',
      tags: ['Bakery', 'Featured', 'Healthy', 'Latest Recipes', 'Staff Picks'],
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
      active: false
    },
    {
      id: 118,
      link: '#',
      img: 'Mixed-fruits-1200x790.jpg',
      title: 'Lunch Favourite with Salad, Naan And Beans',
      tags: ['Bakery', 'Featured', 'Healthy', 'Latest Recipes', 'Staff Picks'],
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
      active: false
    },
    {
      id: 119,
      link: '#',
      img: 'fi2x-6-460x295.jpg',
      title: 'Lunch Favourite with Salad, Naan And Beans',
      tags: ['Bakery', 'Featured', 'Healthy', 'Latest Recipes', 'Staff Picks'],
      description: 'Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id',
      active: false
    }
  ],

  plateTypes: [
    {
      id: 700,
      img: 'drinks-recipes.png',
      link: '#',
      name: 'Drinks',
    },
    {
      id: 701,
      img: 'soups-recipes.png',
      link: '#',
      name: 'Soups'
    },
    {
      id: 702,
      img: 'baking-recipes.png',
      link: '#',
      name: 'Bakery',
    },
    {
      id: 703,
      img: 'dinner-recipes.png',
      link: '#',
      name: 'Dinner',
    },
    {
      id: 704,
      img: 'healthy-recipes.png',
      link: '#',
      name: 'Healthy',
    },
    {
      id: 705,
      img: 'staff-picks.png',
      link: '#',
      name: 'Staff Picks'
    },
    {
      id: 706,
      img: 'premium-recipes.png',
      link: '#',
      name: 'Appetisers',
    },
    {
      id: 707,
      img: 'quick-easy-recipes.png',
      link: '#',
      name: 'Quick & Easy',
    },
  ]

});