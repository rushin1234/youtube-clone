import React, { useContext } from 'react'
import './Home.css'
import Item from '../../components/Item/Item'
import { APIContext } from '../../context/APIContext'

const Home = () => {

  const { data, loading } = useContext(APIContext)

  return (
    <>
      {loading ? <h1>Loading...</h1> : <></> }
      {data === null ? <></> : 
        <div className="home">
          {data.map((video, i) => {
            return <Item video={video} />
          })}
        </div> }
    </>
  )
}

export default Home