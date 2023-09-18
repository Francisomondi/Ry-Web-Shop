import React from 'react'
import Container from '../components/Container'
import FormWrap from '../components/FormWrap'
import LoginForm from './LoginForm'

type Props = {}

const Login = (props: Props) => {
  return (
    <Container>
        <FormWrap>
            <LoginForm/>
        </FormWrap>
    </Container>
  )
}

export default Login