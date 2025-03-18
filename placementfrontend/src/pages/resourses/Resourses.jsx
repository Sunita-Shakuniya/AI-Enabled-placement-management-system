import React from 'react'


    
function Resourses() {
  const [students, setStudents] = useState([]);

    useEffect(() => {
        async function getData() {
            const data = await fetchStudents();
            setStudents(data);
        }
        getData();
    }, []);

  return (
    <Layout>
    <section > 
    <div>
      <h1>what you wanna learn!</h1>
    </div>
    </section> 
    </Layout> 
  )
}

export default Resourses
