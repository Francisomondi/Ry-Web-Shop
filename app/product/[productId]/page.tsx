import React from 'react'

type Iparams = {}

const product = ({params}: {params: Iparams}) => {
    console.log('params',params)
  return (
    <div>product</div>
  )
}

export default product