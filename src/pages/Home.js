import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main />
      <Row title = 'Up Coming' fetchURL= {requests.requestUpcoming} />
      <Row title = 'Popular' fetchURL= {requests.requestUpcoming} />
      <Row title = 'Top Rated' fetchURL= {requests.requestUpcoming} />
      <Row title = 'Trending' fetchURL= {requests.requestUpcoming} />
      <Row title = 'Horror' fetchURL= {requests.requestUpcoming} />
    </>
  )
}

export default Home