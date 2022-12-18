import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  data: [],
  status: 'idle',
}

export const fetchLegs = createAsyncThunk('legs/fetchLegs', async ({ value }) => {
  let response = await fetch(`${import.meta.env.VITE_API_URL}/legs`).then((response) =>
    response.json(),
  )
  return response.filter(r => r.id === value[0] || r.id === value[1])
})

export const legsSlice = createSlice({
  name: 'legs',
  initialState,
  reducers: {
    selectLegs: (state, action) => {
      state.value = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLegs.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchLegs.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data = action.payload
      })
  },
})
export const selectedLegs = (state) => state.reducer.legs;

export const { selectLegs } = legsSlice.actions
export default legsSlice.reducer
