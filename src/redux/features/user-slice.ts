import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSliceProps {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  userLogged: boolean;
}

interface UserProps {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

const initialState: UserSliceProps = {
  firstName: null,
  lastName: null,
  email: null,
  userLogged: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, { payload }: PayloadAction<UserProps>) => {
      const { firstName, lastName, email } = payload;
      if (firstName && lastName && email) {
        state.firstName = firstName;
        state.lastName = lastName;
        state.email = email;
        state.userLogged = true;
      }
    }
  }
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
