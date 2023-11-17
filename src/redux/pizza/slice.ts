import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Pizza, PizzaSliseState, SearchPizzaParams, Status } from './types';
import { fetchPizzas } from './asyncActions';

const initialState: PizzaSliseState = {
  items: [],
  status: Status.LOADING, // loading sucsess error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,

  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },

  // Без тайп скрипта экстраредюсерс :
  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = 'loading';
  //     state.items = [];
  //   },

  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = 'sucsess';
  //   },
  //   [fetchPizzas.rejected]: (state) => {
  //     state.items = [];
  //     state.status = 'error';
  //   },
  // },
  // Без тайп скрипта экстраредюсерс

  // С тайп скриптом экстраредюсерс :
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCSESS;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
