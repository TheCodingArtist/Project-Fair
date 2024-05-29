import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/projectCard'
import { Col, Row   } from 'react-bootstrap'
function Projects() {
  return (
    <>
    <Header/>
    <div style={{marginTop:'150px'}} className='container-fluid'>
      <div className='d-flex justify-content-between'>
        <h1>All PROJECTS </h1>
        <input type="text" className='form-control w-25' placeholder='Search Products By Language Used' />
      </div>
      <Row className='mt-3'>
        <Col className='mb-3' sm={12} md={6} lg={4}>
          <ProjectCard/>
        </Col>
      </Row>
       </div>
    </>
  )
}
export default Projects