import React from 'react'
import { useRouter } from 'next/router'
import Cart from '../components/cart/Cart'
import Loading from '../components/common/Loading'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { User } from '../types/User'
import { Alert, AlertIcon } from '@chakra-ui/react'

const CartPage = () => {

  const router = useRouter()
  const { loading, error, data } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) router.push('/')
  const user: User = data.currentUser
  if (!user.isActivated) return <Alert status='warning'><AlertIcon/>Seems your account is not activated</Alert>
  
  return (
    <Cart/>
  )
}

export default CartPage