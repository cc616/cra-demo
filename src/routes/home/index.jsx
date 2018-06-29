import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <p>this is home page</p>
    <Link to="/about">goto About</Link>
  </div>
)

export default Home
