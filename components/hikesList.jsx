// import axios from "axios";

function HikesList({hikeData, setHikeData}) {

    // const checkIfDone = (bool) => {
    //     return bool ? "green" : "beige";
    // }
    async function deleteHike(id) {
        axios.delete(`http://127.0.0.1:8090/api/collections/hikes/records/${id}`)
            .then(res => setHikeData(res.data.items))
    }

    // function updateHike(){
  //   axios.patch(`http://127.0.0.1:8090/api/collections/hikes/records/'${id}')`)
  //   .then(res => setHikeData(res.data.items))
  // }

    return (
        <div className="hikesList">
            <h2>Hikes List</h2>
            <ul className="hikelist">
                {hikeData?.map(hike => {
                    const checkIfDone = (bool) => {
                        return bool ? "#4AEA7A" : "beige";
                    }
                    return (
                        <>
                        <div className="line"></div>
                        <li key={hike.id} style={{backgroundColor: checkIfDone(hike.completed)}}>
                            <div className="innerHikeWrapper">
                                <h4>{hike.name}</h4>
                                <h4>{hike.location}</h4>
                            </div>
                            <p>{hike.note}</p>
                            <button onClick={deleteHike(hike._id)}>Delete Hike</button>
                        </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}

export default HikesList;