import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  counter: 0
}

const demoReducer = createSlice({
  name: 'demoReducer',
  initialState: INITIAL_STATE,
  reducers: {
    demoFunc: (state, action) => {
      state.counter = action.payload
      return state
    }
  }
})

export default demoReducer.reducer
const { demoFunc } = demoReducer.actions