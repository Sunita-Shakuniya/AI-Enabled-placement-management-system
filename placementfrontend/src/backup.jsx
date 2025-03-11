import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const[students, setstudents] = useState([])
  useEffect(()=>{
    axios.get('/api/students')
    .then((response)=>{
      setstudents(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>/--!--/
      <h1>PlacmentCRM Frontend setup is completed using React + Vite using Javascript </h1>
      <p>Students: {students.length}</p>
      {
        students.map((student,index)=>(
          <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Email: {student.email}</p>
          <p>Phone: {student.phone}</p>
          <p>Course: {student.course}</p>
          </div>

        ))
      }*/

<nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/admin">Admin</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/jobs">Jobs</a></li>
                <li><a href="/resouses">Resourses</a></li>
                <li><a href="/recruiters">Recruiters</a></li>
            </ul>
          </nav>
    </>
  )
}

export default App
