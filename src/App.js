import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import FunctionalThings from './pages/FunctionalThings/FunctionalThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SIllyThings'
import Landing from './pages/Landing/Landing'
import FaithfulThings from './pages/FaithfulThings/FaithfulThings'
import MemeThings from './pages/MemeThings/MemeThings'
import SamuraiThings from './pages/SamuraiThings/SamuraiThings'

const App = () => {
  const [shahzadsThings, setShazadsThings] = useState([
    {
      name: 'functional programming',
      image: 'https://imgs.xkcd.com/comics/functional.png',
      attributes: ['efficient', 'reusability', 'not a taco', 'beautiful'],
    },
    {
      name: 'React hooks',
      image:
        'https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      attributes: [
        'useEffect',
        'useState',
        'not a taco',
        "state's best friend",
      ],
    },
    {
      name: 'BluBlockers',
      image:
        'https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584',
      attributes: [
        'very attractive',
        'useful probably!',
        'good for viewing tacos',
        'such hip',
        'worn by all the cool kids',
      ],
    },
    {
      name: 'Healthy food',
      image: 'https://i.imgur.com/gRxOxsA.jpg',
      attributes: [
        'makes you live a long time',
        'consistent poops',
        'probably tacos sometimes!',
        'farm to market',
      ],
    },
  ])

  const [bensThings, setBensThings] = useState([
    {
      name: 'banana',
      image:
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      attributes: [
        'potassium-rich',
        'yellow when good',
        'not a taco',
        'ring ring ring ring ring ring ring',
      ],
    },
    {
      name: 'turkey',
      image:
        'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      attributes: [
        'such gobbles',
        'good when stuffed',
        'not a taco',
        'why gravy exists',
      ],
    },
    {
      name: 'taco',
      image:
        'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      attributes: [
        'yummy in my tummy',
        'salsas may vary',
        'definitely a taco',
        'very edible',
      ],
    },
    {
      name: 'linux',
      image: 'https://i.imgur.com/3BmfSOA.png',
      attributes: ['not a taco', 'not Windows', 'not macOS', 'Penguins?'],
    },
  ])

  const [davidsThings, setDavidsThings] = useState([
    {
      name: 'waffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'giraffe',
      image:
        'https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      attributes: [
        'tall',
        'cool',
        'fun',
        'animal',
        "(David doesn't acually own a giraffe)",
      ],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart®',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ])

  const [huntersThings, setHuntersThings] = useState([
    {
      name: "energy drinks",
      image: "https://imgs.xkcd.com/comics/functional.png",  
      attributes: ["efficient", "reusability", "not a taco", "beautiful"],
    },
  ])

  const [ryansThings, setRyansThings] = useState([
    {
      name: "pokeball",
      image: "https://images.unsplash.com/photo-1610692567145-2c1fe6bf9c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
      attributes: ["portable", "compact", "colorful", "comfortable"],
    },
    {
      name: "master sword",
      image: "https://i.imgur.com/mSbog2i.jpeg",
      attributes: ["sharp", "shiny", "powerful", "legendary"],
    },
    {
      name: "super mushroom",
      image: "https://images.unsplash.com/photo-1527896573815-b7dd74893deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      attributes: ["tasty", "hidden", "empowering"]
    },
  ])

  const [mikesThings, setMikesThings] = useState([
    {
      name: "git meme",
      image: "https://miro.medium.com/max/1000/0*yItQ1DiR5PLcd94T.jpg",  
      attributes: ["funny", "real", "not a taco", "good movie"],
    },
  ])

  const [eppiesThings, setEppiessThings] = useState([
    {
      name: 'Katana',
      image: 'https://i.imgur.com/oAYEHQO.jpeg',
      attributes: [
        'gift',
        'given to me by my Little Brother',
        'sharp',
        'effective'
      ],
    },
    
    {
      name: 'Musashi',
      image:
        'https://i.imgur.com/cHHH8ob.jpeg',
      attributes: [
        'written by Eiji Yoshikawa',
        'defeats Arima Kihei who was armed with a wakizashi in first dual with a quarterstaff, at 13',
        'defeats Sasaki Kojiro after sleeping in during a scheduled dual, being woken by a servant of Kojiro only to eat a full breakfast before carving a bokken from a the oar of a ship in order to really wake himself up, then cleaving the skull Kojiro after both their weapons met in the first strokes of their dual, the headband of Mushashi falling to ground having been sliced by the three-shaku nodachi of Sasaki',
        'neuralgia attacks led him, at 59 years, to retire to Reigando cave as a hermit where he would write The Book of Five Rings, finished in 1645, and die at 62',
      ],
    },
    {
      name: 'Toshiro Mifune Collection',
      image:
        'https://i.imgur.com/fzhbeNz.jpeg',
      attributes: [
        'pirated',
        'Yojimbo series',
        'first two films directed by Akira Kurosawa',
        '1961-1983',
      ],
    },
    {
      name: 'Lone Wolf and Cub',
      image:
        'https://i.imgur.com/0bgX9zD.jpeg',
      attributes: [
        'Sword of Vengance',
        'Baby Cart of Hades',
        'Baby Cart at The River Styx',
        'Baby Cart in Peril',
      ],
    },
    
    {
      name: 'Ghost of Tsushima',
      image: 'https://i.imgur.com/LVsuATE.jpeg',
      attributes: [
        'PS4 ',
        'Sucker Punch',
        'Sony Interactive',
        '1 player or 2-4 network players'
      ],
    },
  ])

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-functional-things"
        element={<FunctionalThings things={shahzadsThings} />}
      />
      <Route
        path="/the-manliest-things"
        element={<ManliestThings things={bensThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={huntersThings} />}
      />
      <Route
        path="/the-faithful-things"
        element={<FaithfulThings things={ryansThings}/>}
      />
      <Route
        path="/the-meme-things"
        element={<MemeThings things={mikesThings} />}
      />
      <Route
        path="/the-samurai-things"
        element={<SamuraiThings things={eppiesThings} />}
      />
    </Routes>
  )
}

export default App
