import React from 'react'
import User from './User'
import Admin from './Admin'
// import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <Admin />
      <button>Admin</button>
      <User />
      <button>User</button>

      {/* <h1>hello from home</h1> */}
    </div>
  )
}

export default Home