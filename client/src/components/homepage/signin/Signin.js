import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



import { connect } from 'react-redux'
import { authenticate } from '../../../state/actions/auth'

// comp
import HomeNavbar from '../navbar/HomeNavbar'

const Signin = ({authenticate}) => {
  const [view, setView] = useState('')

  const [login, setLogin] = useState({
email: '',
passowrd: ''
  })
  const [register, setRegister] = useState({
email: '',
name: '',
password: ''
  })


  const ref = useRef()

  useEffect(() => {
    view === 'add'
      ? ref.current.classList.add('right-panel-active')
      : ref.current.classList.remove('right-panel-active')
  }, [view])

  const handleFlip = type => setView(type)

  const handleChange = (e, type) => {

    const value = e.target.value
    const name = e.target.name

    type === 'login'
    ? setLogin({...login, [name]: value})
    : setRegister({...register, [name]: value})
      
  }

  

  const handleSubmit = e => {
    e.preventDefault()
    
    const id = e.target.id

    if (id === 'signup') {
      if (sEmail !== '') {
        const data = {
          name: sName,
          email: sEmail,
          password: sPassword,
        }

        console.log(data)
      }
    } else {
      if (email !== '') {
        const data = {
          email,
          password,
        }
        setEmail('')
        setPassword('')
        authenticate()
        Window.location = '/admin'
        console.log(data)
      }
    }
  }

  return (
    <>
      <HomeNavbar />
      <Wrapper>
        <Container ref={ref} className="container">
          <SignUpContainer className="sign-up-container">
            <Form id="signup" onSubmit={e => handleSubmit(e)}>
              <Title>Create an account</Title>

              <Span>Leads management has nevar been easy</Span>

              <Input
                type="text"
                placeholder=" Name"
                value={sName}
                name="name"
                onChange={e => handleChange(e, 'join')}
              />

              <Input
                type="text"
                placeholder=" Email"
                name="email"
                value={sEmail}
                onChange={e => handleChange(e, 'join')}
              />

              <Input
                type="password"
                placeholder=" Password"
                name="password"
                value={sPassword}
                onChange={e => handleChange(e, 'join')}
              />
              <Button>Sign Up</Button>
            </Form>
          </SignUpContainer>
          <SignInContainer className="sign-in-container">
            <Form id="signin" onSubmit={e => handleSubmit(e)}>
              <Title>Sign IN</Title>

              <Span>Login to your account </Span>

              <Input
                type="text"
                placeholder=" Email"
                value={email}
                name="email"
                onChange={e => handleChange(e, 'login')}
              />

              <Input
                type="password"
                placeholder=" Password"
                value={password}
                name="password"
                onChange={e => handleSignIn(e, 'login')}
              />

              <A href="#">Forgot your password?</A>
              {/* <Link to='/admin' type='submit'> */}
              <Button>Sign In</Button>
              {/* </Link> */}
            </Form>
          </SignInContainer>
          <OverlayWrapper className="overlay-container">
            <Overlay className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <Sbutton
                  className="ghost"
                  id="signIn"
                  onClick={() => handleFlip('rm')}
                >
                  Sign In
                </Sbutton>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <Sbutton
                  className="ghost"
                  id="signUp"
                  onClick={() => handleFlip('add')}
                >
                  Sign Up
                </Sbutton>
              </div>
            </Overlay>
          </OverlayWrapper>
        </Container>
      </Wrapper>
      </>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`

const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
`

const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
`

const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`

const Title = styled.h1`
  font-weight: bold;
`

const Span = styled.span`
  font-size: 12px;
`

const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  outline: none;

  :focus {
    border: solid 3px #01adfd;
    background: white;
    box-shadow: -5px 0 10px 2px rgba(0, 0, 0, 0.2);
  }
`

const Button = styled.button`
  border-radius: 20px;
  border: none;
  background-color: #01adfd;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  :focus {
    outline: none;
  }

  :active {
    transform: scale(0.95);
  }
`

const Sbutton = styled.button`
  margin-top: 10px;
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  :focus {
    outline: none;
  }

  :active {
    transform: scale(0.95);
  }

  background-color: transparent;
  border-color: #ffffff;
`

const A = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`

const OverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
`

const Overlay = styled.div`
  background: #01adfd;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`




const mapDispatchToProps = {
authenticate  
}


const exports = React.memo(Signin)
export default connect(null, mapDispatchToProps)(exports)
