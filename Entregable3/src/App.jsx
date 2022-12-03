import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import ErroFetch from './ErroFetch'
import residentCard from './components/styles/residentCard.css'

function App() {

    const[rickAndMorty, setRickAndMorty]= useState()
    const[inputId, setInputId] = useState()
    const[hasError, setHasError] =useState(false)
  
    useEffect(()=>{    
    let URL
    if(inputId){

      URL=`https://rickandmortyapi.com/api/location/${inputId}`

    } else{

      const randomRickAndMorty= Math.ceil(Math.random() *126)
      URL = `https://rickandmortyapi.com/api/location/${randomRickAndMorty}`
    }

    axios.get(URL)
    .then(res => {
      
      setRickAndMorty(res.data)
      setHasError(false)
    })
    .catch(err => {
      setHasError(true)
      console.log(err)
    })
    },[inputId])
    
    const handleSubmit = (e) =>{
      e.preventDefault()
      setInputId (e.target.inputSearch.value)
    }
    
  return (
    <div className="App">
      <img  className='image' src="https://i.pinimg.com/originals/d4/0c/ea/d40cea0d3893378e7a96e441452dfcaf.jpg" alt="" />
    <h1>Rick and Morty</h1>
    <form onSubmit={handleSubmit} >
      <div className='search'><input id='inputSearch' type="text" />
      <button>Search</button></div>
    </form>
    
{ hasError ?
   <ErroFetch/>
   :
      <>
    <LocationInfo rickAndMorty={rickAndMorty}/>
    <div className='residents-container'>
        {
            rickAndMorty?.residents.map(url =>(
              <ResidentCard  key={url} url= {url} />
            ))
        } 
          </div>
          </>
}
      
  </div>

)}
export default App
