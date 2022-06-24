import React from 'react'
import dynamic from 'next/dynamic'

import Header from '../header'

import {Container, NoSsr} from '../../customUI'

const Cart = dynamic(() => import("../drawer/cart"))
const Sign = dynamic(() => import("../modal/sign"))
const Search = dynamic(() => import("../modal/search"))
const SnackbarAlert = dynamic(() => import("../snackbar"))

interface iLayout {
  children: React.ReactNode,
  title?: string
}

export default function Layout({children, title}:iLayout) {    

  return (
    <>
    <Header />
    <Container maxWidth="lg">
      {children}
    </Container>

    <NoSsr>
      <Cart/>
      <Sign/>
      <Search/>
      <SnackbarAlert/>
    </NoSsr>
    
    </>
  )
}
