import styles from '../styles/Home.module.css';
import GoogleMap from '../components/googleMap';
import CategoryList from '../components/categoryList';
import HikesList from '../components/hikesList';
import axios from 'axios'
import useSWR from 'swr'
import { useEffect, useState } from 'react';

export type Data = {
  id: number;
  name: string;
  note?: string;
  lat: number;
  lng: number;
  location: string;
  category: string;
  distance?: number;
  completed: boolean;
}

const fetcher = url => axios.get(url).then(res => res.data.items)

 function Dashboard() {
  const [formName, setFormName] = useState("")
  const [formNote, setFormNote] = useState("")
  const [formLat, setFormLat] = useState(0)
  const [formLng, setFormLng] = useState(0)
  const [formLocation, setFormLocation] = useState("")
  const [formCategory, setFormCategory] = useState("")
  const [formCompleted, setFormCompleted] = useState(false)
  const [formDistance, setFormDistance] = useState(0)


  const { data: user, error: userDataError } = useSWR('http://127.0.0.1:8090/api/collections/user/records/', fetcher)
  const { data: hikeData, error: hikeDataError, mutate } = useSWR(()=> `http://127.0.0.1:8090/api/collections/hikes/records/?filter=(user='${user[0]?.id}')`, fetcher)

  // const [hikeData, setHikeData] = useState([{}])

  async function addHike(e){
    e.preventDefault();
    
    await axios.post('http://127.0.0.1:8090/api/collections/hikes/records/',
    { 
      user:"zj4v4azozzse0zj",
      name:formName,
      note:formNote,
      lat:formLat,
      lng:formLng,
      location:formLocation,
      category:formCategory,
      completed:formCompleted,
      distance:formDistance
    })
    
    setFormName("")
    setFormNote("")
    setFormLat(0)
    setFormLng(0)
    setFormLocation("")
    setFormCategory("")
    setFormCompleted(false)
    setFormDistance(0)

    mutate()
  }

  return (
    
    <>
        {(userDataError || hikeDataError) && <div>failed to load</div>}
        {!(userDataError || hikeDataError) && 
        <>
          <h1 className='dash-header'>Trail Tracks</h1>
          <GoogleMap hikeData={hikeData} />
          <CategoryList hikeData={hikeData} />
          <HikesList hikeData={hikeData} mutate={mutate}/>
          <div className='input-hike'>
            <form className='form' onSubmit={(e) => addHike(e)}>
              <input type="text" placeholder="Hike Name" value={formName} onChange={(e)=>setFormName(e.target.value)}/>
              <input type="text" placeholder="Note" value={formNote} onChange={(e)=>setFormNote(e.target.value)}/>
              <input type="number" placeholder="Lat" value={formLat} onChange={(e)=>setFormLat(parseInt(e.target.value))}/>
              <input type="number" placeholder="Lng" value={formLng} onChange={(e)=>setFormLng(parseInt(e.target.value))}/>
              <input type="text" placeholder="Location" value={formLocation} onChange={(e)=>setFormLocation(e.target.value)}/>
              <input type="text" placeholder="Category" value={formCategory} onChange={(e)=>setFormCategory(e.target.value)}/>
              <input type="number" placeholder="Distance" value={formDistance} onChange={(e)=>setFormDistance(parseInt(e.target.value))}/>
              <span style={{color: "white"}}>Completed? <input type="checkbox" id="completed" checked={formCompleted} onChange={()=>setFormCompleted((c)=> !c)}/></span>
              <button className='submit-hike' type="submit">submit</button>
            </form>
          </div>
         
        </>
        }
    </>
  )
}

export default Dashboard;