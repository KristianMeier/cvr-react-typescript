// @ts-nocheck
import { useState, useEffect } from 'react'
import Button from '../Styles/Button'
import ButtonNoLink from '../Styles/ButtonNoLink'
import { JsData } from '../Fixtures/JsData'
import Loading from '../Styles/Loading'
import LandingComponent from './Components/LandingComponent'

//TODO5
function Landing() {
  const url = 'JsonDataTwo.json'
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

  if (data.length === 0)
    return (
      <>
        <h2>No Data</h2>{' '}
        <ButtonNoLink
          text='Refresh Data'
          onClick={() => fetchData()}
        ></ButtonNoLink>
      </>
    )
  return <LandingComponent data={JsData} />
}

export default Landing
