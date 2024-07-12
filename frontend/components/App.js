import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Card from './Card'


const api_key ='DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`





function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
function fetchPhoto(){
  axios.get(URL)
    .then( res => {
      console.log(res.data)
      setApod(res.data)
    })
    .catch(err => {
      console.log(err.mesagge)
    })
}
// fetchPhoto()
setApod({
  "copyright": "Team OURANOS",
  "date": "2024-07-12",
  "explanation": "Planetary nebula Jones-Emberson 1 is the death shroud of a dying Sun-like star. It lies some 1,600 light-years from Earth toward the sharp-eyed constellation Lynx. About 4 light-years across, the expanding remnant of the dying star's atmosphere was shrugged off into interstellar space, as the star's central supply of hydrogen and then helium for fusion was depleted after billions of years. Visible near the center of the planetary nebula is what remains of the stellar core, a blue-hot white dwarf...",
  "hdurl": "https://apod.nasa.gov/apod/image/2407/PK164_vdef3.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Jones-Emberson 1",
  "url": "https://apod.nasa.gov/apod/image/2407/PK164_vdef3_1024.jpg"
})
  },[])
  if(!apod) return 'fetching Photo of the Day...'
  return (
   <section>
    <Card
    title={apod.title} 
    text={apod.explanation}
    imageURL={apod.url}
    date={apod.date}
    />
   </section>
  )
}

export default App
