//CartProduct.js

import styled from '@emotion/styled'
import { Add, ArrowBackIos, Remove } from '@mui/icons-material'
import { Box,Button,IconButton,Paper,Table,TableBody,TableCell,tableCellClasses,TableContainer,TableHead,TableRow,TextField,Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import { clearAllCart, decreaseCartQuantity, getTotal, increaseCartQuantity } from '../rtk/app/features/cartSlice'
import { theme } from '../style/theme'


export const CartProduct = () => {

  const cart = useSelector((state)=>state.cart);
  const cartItems = useSelector((state)=>state.cart.cartItems);
  const totalQuantity = useSelector(state=> state.cart.totalQuantity);
  const totalAmount = useSelector(state=>state.cart.totalAmount);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));

  const SHIPPING_FEES = 7.99;
  const dispatch = useDispatch();
 
  function handleBack() {
    window.history.back();
  }

  function handleRemoveItem(cartItem) {
    dispatch(decreaseCartQuantity(cartItem));
  }

  function handleAddItem(cartItem) {
    dispatch(increaseCartQuantity(cartItem));
  }

  function clearCart() {
    dispatch(clearAllCart());
  }

  React.useEffect(()=>{
    dispatch(getTotal());
  },[cart,dispatch])
  

console.log(cartItems);

  return (
  )
}


           