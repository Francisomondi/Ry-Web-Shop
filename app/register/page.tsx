import React from 'react'
import Container from '../components/Container'
import FormWrap from '../components/FormWrap'
import RegisterForm from './RegisterForm'

type Props = {}

const Register = (props: Props) => {
  return (
    <Container>
        <FormWrap>
            <RegisterForm/>
        </FormWrap>
    </Container>
  )
}

export default Register