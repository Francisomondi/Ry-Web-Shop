import React from 'react'
import Container from '../components/Container'
import CartClient from './CartClient'

type Props = {}

const Cart = (props: Props) => {
  return (
    <div className='pt-8'>
      <Container>
        <CartClient/>
      </Container>
    </div>
  )
}

export default Cart