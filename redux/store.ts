import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { userReducer } from './slices/user'
import { cartReducer } from './slices/cart'
import { checkoutReducer } from './slices/checkout'
import { modalReducer } from './slices/modal'
import { searchReducer } from './slices/search'

export function makeStore() {
  return configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        checkout: checkoutReducer,
        modal: modalReducer,
        search: searchReducer,
    },
    devTools: true
  })
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,AppState,unknown,Action<string>>

export const wrapper = createWrapper<AppStore>(makeStore)