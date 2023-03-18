import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../middleware/api';

const url = 'api/users';

interface User {
  avatar: string;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export const getUsers = createAsyncThunk(
  'users/getUser',
  async (test, { rejectWithValue }) => {
    try {
      const response = await API.get(`/${url}`);
      return response.data?.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (user: User, { rejectWithValue }) => {
    try {
      const response = await API.patch(`/${url}/${user.id}`, user);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await API.delete(`/${url}/${userId}`);
      return response.request;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: {},
    status: 0,
    error: '',
    loading: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      // @ts-ignore
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 200;
        // @ts-ignore
        state.users = state.users.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(updateUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.status;
        const url = action.payload.responseURL;
        const newArray = url.split('/');
        const index = newArray.length - 1;
        // @ts-ignore
        const id = state.users.findIndex(
          (user: any) => user.id === parseInt(newArray[index])
        );
        if (id > -1) {
          // @ts-ignore
          state.users.splice(id, 1);
          // @ts-ignore
          // eslint-disable-next-line no-self-assign
          state.users = state.users;
        }
      })
      .addCase(deleteUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { setCurrentPage } = userSlice.actions;

export default userSlice.reducer;
