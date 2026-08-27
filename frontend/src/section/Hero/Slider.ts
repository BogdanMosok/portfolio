import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'

interface Slide {
    id: number;
    subtitle: string;
    highlight: string;
    title: string;
    description: string;
    image: string;
    btnText: string;
}
export const slides: Slide[] = [
    {
        id: 1, 
        subtitle: 'Welcome to GreenShop',
        highlight: 'Planet',
        title: 'Let’s Make a Better',
        description: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
        image: hero1,
        btnText: 'Shop Now',
    },
    {
        id: 2, 
        subtitle: 'Welcome to GreenShop',   
         highlight: 'Planet',
        title: 'Let’s Make a Better',
        description: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
        image: hero2,
        btnText: 'Shop Now',
    },
    {
        id: 3,
        subtitle: 'Welcome to GreenShop',
         highlight: 'Planet',
        title: 'Let’s Make a Better',
        description: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!', 
         image: hero3,
        btnText: 'Shop Now',
    }
]