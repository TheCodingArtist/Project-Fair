import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import loginImg from '../assets/Login-amico.png'
import { Link } from 'react-router-dom'
const Auth = ({insideRegister}) => {

  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex align-items-center justify-content-center'>
      <div className="container w-75" >
        <div className='card shadow p-2'>
          <div className='row align-items-center'>
            <div className="col-lg-6">
              <img className='w-100' src={loginImg} alt="login" />
            </div>
            <div className="col-lg-6">
            <h1 style={{fontSize:'80px'}}> <i className='fa-brands fa-docker'></i> Project Fair</h1>
           <h5> Sign {insideRegister?"up":"in"} To your account</h5>
           <Form>
          { insideRegister &&
          <FloatingLabel controlId="floatingInputname" label="Username">
        <Form.Control type="text" placeholder="Username"/>
      </FloatingLabel>
      }
           <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      {
        insideRegister?
       <div className='mt-3'>
        <button className='btn btn-primary mb-2'>Register</button>
        <p>Already have an account? Click here to <Link to='/login'>Login</Link> </p>
       </div>
       :
       <div className='mt-3'>
        <button className='btn btn-primary mb-2'>Login</button>
        <p>New user? Click here to <Link to='/register'> Register</Link> </p>
       </div>
      }
           </Form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Auth