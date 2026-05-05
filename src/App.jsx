import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section6 from "./Section6";
import Section4 from "./Section4";


function App() {
  const nav = ["Pet Supply Shop", "Shop", "About", "Contact", "Blog", "Landing", "Home"];

  const sec2data = [
    {
      text1: 'This is Schilers. Awesome Food Theme Purchase it and eat Burgers.',
      text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.',
      text3: 'Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.',
      image: '/Image/about1.jpg'

    }
  ]

  const sec3data = [
    {
      image1: '/Image/items1.jpg',
      text1: 'Sweet Suprise',
      price: '$98.00'
    },
    {
      image1: "/Image/items2.jpg",
      text1: 'Cashmere Tank + Bag',
      price: '$98.00'
    },
    {
      image1: "/Image/items3.jpg",
      text1: 'Delight Lemone',
      price: '$98.00'
    }

  ]




  return (

    <>
      <Section1 atr1={nav} />
      <Section2 atr2={sec2data} />
      <Section3 atr3={sec3data} />
      <Section4 />
      <Section6 />
    </>
  )
}

export default App;
