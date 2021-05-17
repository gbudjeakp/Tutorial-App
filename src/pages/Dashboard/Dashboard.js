import React, {useState, useEffect} from 'react'
import './Dashboard.css'




function Dashboard() {
   const [data, setData] = useState([])

 useEffect(()=>{
        const fetchUsers = async() =>{
            const data = await fetch('http://localhost:5000/users/allusers')
            const res = data.result
            console.log(res)
        }
       fetchUsers()
    })
    return (
        <div>
          <h1>Dash Board Items</h1>
        </div>
    )
}

export default Dashboard
