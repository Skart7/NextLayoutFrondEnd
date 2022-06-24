import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '../store'

export interface iAlert {
    text: string, show: boolean, status: any
}
export interface iCheckout {
    user: {
        fname: string,
        lname: string,
    },
    delivery: {
        method: string,
    },
    payment: {
        method: string,
        paided: boolean
    },
    other: {
        comment: string
    },
    alert: iAlert
}


const initialState:iCheckout = {
    user: {
        fname: '',
        lname: '',
    },
    delivery: {
        method: '',
    },
    payment: {
        method: '',
        paided: false
    },
    other: {
        comment: ''
    },
    alert: {text: '', show: false, status: 'info'}
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setUserData: (state, action:PayloadAction<{fname: string, lname: string}>) => {
        const fname = action.payload.fname
        const lname = action.payload.lname

        if(fname !== null) state.user.fname = fname
        if(lname !== null) state.user.lname = lname 
    },
    setDeliveryData: (state, action:PayloadAction<{method: string}>) => {
        const deliveryMethod = action.payload.method

        if(deliveryMethod !== null) state.delivery.method = deliveryMethod
    },
    setPaymentData: (state, action:PayloadAction<{method: string}>) => {
        const paymentMethod = action.payload.method

        if(paymentMethod !== null) state.payment.method = paymentMethod
    },
    setOtherData: (state, action:PayloadAction<string>) => {
        state.other.comment = action.payload
    },
    resetCheckout: (state, action:PayloadAction<null>) => {
        Object.assign(state, initialState)
    },
    setAlert: (state, action:PayloadAction<iAlert>) => {
        state.alert = action.payload
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state = action.payload.checkout
    }
  }
})

export const { setUserData, setDeliveryData, setPaymentData, setOtherData, resetCheckout, setAlert } = checkoutSlice.actions

export const selectCheckout = (state: AppState) => state.checkout

export const checkoutReducer = checkoutSlice.reducer

