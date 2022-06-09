const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

export const getGreeting = createAsyncThunk(
  'greeting/getGreeting',
  async () => {
    const response = await fetch('http://localhost:4000/api/v1/greetings');
    const data = await response.json();
    return data;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    message: null,
    status: null,
  },
  extraReducers: {
    [getGreeting.pending]: (state) => {
      state.status = 'Loading';
    },
    [getGreeting.rejected]: (state) => {
      state.status = 'error: "Failed to retrieve message"';
    },
    [getGreeting.fulfilled]: (state, action) => {
      console.log(action)
      state.status = 'Success'
      state.message = `"${action.payload.message}"`;
    },
  }
});

export default greetingSlice.reducer;