import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../config/store';
import { StatusEnum } from '../enums/StatusEnum';
import { Page } from '../types/Page';
import { useAxios } from '../hooks/useAxios';

export interface PagesState {
  pages: Page[];
  status: StatusEnum;
}

const initialState: PagesState = {
  pages: [],
  status: StatusEnum.IDLE,
};

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPages.pending, (state) => {
      state.status = StatusEnum.LOADING;
    });
    builder.addCase(getPages.fulfilled, (state, action) => {
      state.status = StatusEnum.IDLE;
      state.pages = action.payload || [];
    });
  },
});

export const getPages = createAsyncThunk('/pages', async () => {
  try {
    const response = await useAxios().get<Page[]>(
      `${process.env.REACT_APP_API_URL}/pages`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
});

export const pagesState = (state: RootState) => state.pages;

export default pagesSlice.reducer;
