import React from 'react'
import { Badge, IconButton, NoSsr } from '../../customUI'
import dynamic from 'next/dynamic'

const LocalMallRoundedIcon = dynamic(() => import('@mui/icons-material/LocalMallRounded'))
const AccountCircleRoundedIcon = dynamic(() => import('@mui/icons-material/AccountCircleRounded'))
const SearchRoundedIcon = dynamic(() => import('@mui/icons-material/SearchRounded'))
const LoginRoundedIcon = dynamic(() => import('@mui/icons-material/LoginRounded'))


import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { selectCart } from '../../redux/slices/cart'
import { setModalCart, setModalLogin, setModalSearch } from '../../redux/slices/modal'


export default function HeaderRight({styles}) {

  const dispatch = useAppDispatch()
  const cart = useAppSelector(selectCart)

  const openCart = React.useCallback(() => {
    dispatch(setModalCart(true))
  }, [])
  const openLogin = React.useCallback(() => {
    dispatch(setModalLogin(true))
  }, [])
  const openSearch = React.useCallback(() => {
    dispatch(setModalSearch(true))
  }, [])

  return (
    <div className={styles.rightContent}>
        <IconButton onClick={openSearch}><SearchRoundedIcon/></IconButton>
        <IconButton onClick={openLogin}><LoginRoundedIcon/></IconButton>
        <NoSsr>
          <Badge value={cart.qty} max={9} color="error">
            <IconButton onClick={openCart}><LocalMallRoundedIcon/></IconButton>
          </Badge>
        </NoSsr>
      </div>
  )
}
