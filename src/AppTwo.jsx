import { useState, useEffect } from 'react'
import Loading from './Loading'

const url = 'tempdata.json'

function AppTwo() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchTours()
    }, 750)
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div>
          <h2> Der er et problem med at tilgå dataen på siden.</h2>
        </div>
      </main>
    )
  }
  return (
    <main>
      <h2>{tours.title}</h2>
    </main>
  )
}

export default AppTwo