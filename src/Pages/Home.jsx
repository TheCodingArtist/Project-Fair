import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/jpeg-optimizer_10258681_4419038-removebg-preview.png'
const Home = () => {
  return (
    <>
    <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center rounded shadow w-100'>
      <div className='container'>
     <div className='row'>
      <div className='col-lg-6'>
       <h1 style={{fontSize:'80px'}}>Project Fair</h1>
      
      <p style={{textAlign:'justify'}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe a modi debitis alias quos adipisci. Consequatur similique, enim excepturi nostrum et dicta vel nesciunt cupiditate corporis officia iure neque cumque!
      </p>
      <Link to="/login" className='btn btn-warning'>Start To Explore</Link>
      </div>
      <div className='col-lg-6'>
       <img src={landingImg} alt="landing" className='img-fluid'/> 
      </div>
     </div>
      </div>
    </div>
    </>
  )
}

export default Home