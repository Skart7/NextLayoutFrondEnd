import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '../store'

export interface iUserData {
  data: {
    id: string,
    fname: string,
    lname: string,
    email: string,
    auth: boolean,
    session: {
      ip: string,
      source: string,
      accessToken: string,
    }
  }
}

const initialState: iUserData = {
  data: {
    id: undefined,
    fname: undefined,
    lname: undefined,
    email: undefined,
    auth: false,
    session: {
      ip: 'localhost',
      source: undefined,
      accessToken: undefined,
    }
  }
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload
    },
    resetUser: (state, action) => {
      Object.assign(state, initialState)
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.data = action.payload.user.data
    }
  }
})

export const { setUser, resetUser } = userSlice.actions

export const selectUser = (state: AppState) => state.user

export const userReducer = userSlice.reducer

