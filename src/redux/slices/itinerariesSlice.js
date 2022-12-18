import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  filtered: [],
  isFiltering: false,
  status: 'idle',
};

export const fetchItineraries = createAsyncThunk(
  'itineraries/fetchItineraries',
  async () => {
    let response = await fetch(`${import.meta.env.VITE_API_URL}/itineraries`)
      .then((response) => response.json())
    return response;
  }
);

export const itinerariesSlice = createSlice({
  name: 'itineraries',
  initialState,
  reducers: {
    orderByRate: (state) => {
      const oldState = state.value;
      state.value = oldState.sort((a, b) => b['agent_rating'] - a['agent_rating'])
    },
    orderByPrice: (state) => {
      const oldState = state.value;
      state.value = oldState.sort((a, b) =>
        a['price'].replace(/[£,]+/g,'') - b['price'].replace(/[£,]+/g,''))
    },
    orderById: (state) => {
      const oldState = state.value;
      state.value = oldState.sort((a, b) =>
        a['id'].replace('it_','') - b['id'].replace('it_',''))
    },
    filterById: (state, action) => {
      const oldState = state.value;
      state.isFiltering = action.payload.length > 0
      state.filtered = oldState.filter(v => v.id.includes(action.payload))
    },
    changeFilter: (state) => {
      state.isFiltering = false;
    },
    selectItinerary: (state, action) => {
      state.selected = action.payload.legs
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItineraries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItineraries.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload.map((e, i) => {
          e['key'] = i
          return e
        });
      });
  },
});
export const selectItineraries = (state) => state.reducer.itineraries;

export const {
  orderByRate,
  orderByPrice,
  orderById,
  filterById,
  changeFilter
} = itinerariesSlice.actions;
export default itinerariesSlice.reducer;