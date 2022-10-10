// @ts-nocheck
import { useState, useEffect } from 'react'
import Button from '../Components/Styles/Button'
import ButtonNoLink from '../Components/Styles/ButtonNoLink'
import { JsData } from '../Fixtures/JsData'
import Loading from '../Components/Utils/Loading'
import LandingPageComponent from './Components/LandingPageComponent'

//TODO5
function LandingPage() {
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
  return <LandingPageComponent data={JsData} />
}

export default LandingPage
