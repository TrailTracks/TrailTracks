import axios from "axios";

function HikesList({hikeData, mutate}) {

    //delete hike onClick function
    async function deleteHike(id) {
        await axios.delete(`http://127.0.0.1:8090/api/collections/hikes/records/${id}`)
        mutate();
    }
/*
    function updateHike(id){
        const [checkIfCompleted, setCheckIfCompleted] = useState(false)
        axios.put(`http://127.0.0.1:8090/api/collections/hikes/records/${id})`,
  {
    completed: checkIfCompleted
  })
    }
*/

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
                            <button onClick={() => deleteHike(hike.id)}>Delete Hike</button>
                            {/* <button onClick={() => updateHike(hike.id)}>Mark as Completed</button> */}
                        </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}

export default HikesList;