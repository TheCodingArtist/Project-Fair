import React from 'react'
import Add from '../components/Add'
import Edit from './Edit'
const View = () => {
  return (
    <>
    <div className='d-flex justify-content-between mt-2'>
      <h2 className='text-danger'>All Projects</h2>
      <div>
        <Add/>
      </div>
    </div>
   
      <div className='border rounded p-2 d-flex justify-content-between mb-3 mt-2'>
        <h3>Title</h3>
        <div className='d-flex align-items-center'>
          <div><Edit/></div>
          <div className='btn'>
              <a href="" target='_blank'>
                <i className='fa-brands fa-github'></i>
              </a>
          </div>
          <button className='btn text-danger'><i className='fa-solid fa-trash'></i></button>
        </div>
      </div>
    
    </>
  )
}

export default View