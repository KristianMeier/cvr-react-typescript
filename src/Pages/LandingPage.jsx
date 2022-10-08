import { useState, useEffect } from 'react'
import Button from '../Components/Button'
import Loading from '../Loading'
import LandingPageComponent from './LandingPageComponent'

//TODO5
function LandingPage() {
  const url = 'Data.json'
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [hasError, setError] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const fetchedData = await response.json()
      setLoading(false)
      setData(fetchedData)
      //TODO4
    } catch (error) {
      console.error(error)
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, 750)
  }, [])
  if (hasError)
    return (
      <div>
        <h2> Can't get data </h2>
        <Button link='/' title='Landing Page' />
      </div>
    )
  if (loading) return <Loading />
  if (data.length === 0) return <h2> Can accecs source, but no data. </h2>
  return <LandingPageComponent data={data} />
}

export default LandingPage
