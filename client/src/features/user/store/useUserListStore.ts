import { create } from 'zustand'
import type { User } from '../../../shared/types/user.type';

type UserState = {
  userList: User[];
  userListDrawing: Map<string, "drawing" | "not drawing">;
}

type UserAction = {
  setUserList: (users: User[]) => void,
  setUserListDrawing: (users: Map<string, "drawing" | "not drawing">) => void,
};

export const useUserListStore = create<UserState & UserAction>((set) => ({
  userList: [],
  setUserList: (userList) => set({ userList }),
  userListDrawing: new Map(),
  setUserListDrawing: (userListDrawing) => set({ userListDrawing })
}));