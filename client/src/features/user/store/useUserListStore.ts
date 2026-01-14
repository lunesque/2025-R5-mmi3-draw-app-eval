import { create } from 'zustand'
import type { User } from '../../../shared/types/user.type';

type UserState = {
  userList: User[];
  userListDrawing: Map<string, "drawing" | "not drawing">;
}

type UserAction = {
  setUserList: (users: User[]) => void,
  setUserListDrawing: (userId: string, drawing: "drawing" | "not drawing") => void,
};

export const useUserListStore = create<UserState & UserAction>((set) => ({
  userList: [],
  userListDrawing: new Map(),
  setUserList: (userList) => set({ userList }),
  setUserListDrawing: (userId, drawing) =>
    set((state) => {
      const updatedUsersDrawing = new Map(state.userListDrawing);
      updatedUsersDrawing.set(userId, drawing);
      return { userListDrawing: updatedUsersDrawing };
    })
}));