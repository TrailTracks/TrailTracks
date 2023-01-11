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

// const data: Data[]= [
//   { id: 1, name: 'Rattlesnake Trail', note: 'This is a great trail', lat: 45.5231, lng: -122.6765, location:"Snoqualmie, WA", category: 'PNW', completed: false},
//   { id: 2, name: 'Goat Lake', note: 'This is an AMAZING trail', lat: 47.426577, lng: -121.662982, location:"Seattle, WA", category: 'PNW', completed: true },
//   { id: 3, name: 'Mount Si', note: 'This is a cool trail', lat: 47.5215, lng: -121.8265, location:"Los Angles, CA", category: 'PNW', completed: false }, 
// ]



 function Dashboard() {

  const { data:userData, error:userDataError } = useSWR('http://127.0.0.1:8090/api/collections/user/records/', fetcher)
  const [hikeData, setHikeData] = useState([{}])

 useEffect(() => {
    if(userData) axios.get(`http://127.0.0.1:8090/api/collections/hikes/records/?filter=(user='${userData[0]?.id}')`).then((res) => setHikeData(res.data.items))
  }, [userData])
  
  function addHike(){
    axios.post('http://127.0.0.1:8090/api/collections/hikes/records/',
    { 
      user: 'zj4v4azozzse0zj',
      name: 'Goat Trail',
      note: 'This is an AMAZING trail',
      lat: 47.426577,
      lng: -121.662982,
      location:"Seattle, WA",
      category: 'PNW',
      completed: true,
      distanc: 9
    })
    .then((res) => res.data.items)
  }

  // function deleteHike(){
  //   axios.delete(`http://127.0.0.1:8090/api/collections/hikes/records/?filter=(user='${userData[0]?.id}')`)
  //   .then((data) => {
  //       setVerificationCode(data.data)
  //   })
  // }

  // function updateHike(){
  //   axios.patch(`http://127.0.0.1:8090/api/collections/hikes/records/?filter=(user='${userData[0]?.id}')`)
  //   .then((data) => {
  //       setVerificationCode(data.data)
  //   })
  // }

  // function getAllHikes(){
  //   axios.get('http://127.0.0.1:8090/api/collections/hikes/records/')
  //   .then((data) => {
  //       setVerificationCode(data.data)
  //   })
  // }

  return (
    <>
        <GoogleMap hikeData={hikeData} />
        <CategoryList hikeData={hikeData} />
        <HikesList hikeData={hikeData} setHikeData={setHikeData}/>
        <button onClick={addHike}>Add Hike</button>
        {/* <button onClick={deleteHike}>Delete Hike</button>
        <button onClick={updateHike}>Mark Hike Completed</button> */}
    </>
  )
}

export default Dashboard;