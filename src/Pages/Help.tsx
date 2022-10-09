//@ts-nocheck
import { useState, useEffect } from 'react'
import Button from '../Components/Styles/Button'
import Loading from '../Components/Utils/Loading'
import HelpComponent from './HelpComponent'
import ButtonNoLink from '../Components/Styles/ButtonNoLink'

//TODO6
function Help() {
  const url = 'JsonData.json'
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [hasError, setError] = useState(false)

  const removeSidebarLink = (id) => {
    const filteredData = data.filter((item) => item.id !== id)
    setData(filteredData)
  }

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
        <h2>Access to date, but there is none. </h2>{' '}
        <ButtonNoLink text='Refresh Data' onClick={() => fetchData()} />
      </>
    )
  return (
    <>
      <HelpComponent data={data} removeSidebarLink={removeSidebarLink} />
      {/* TODO10 */}
      <ButtonNoLink text='Clear Data' onClick={() => setData([])} />
      <ButtonNoLink text='Refresh Data' onClick={() => fetchData()} />
    </>
  )
}

export default Help
