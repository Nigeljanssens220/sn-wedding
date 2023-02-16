import type { StateCreator } from 'zustand'

interface NameState {
  name: string[]
}

interface NameActions {
  setName: (persoon: string[]) => void
  getName: () => string[]
  resetName: () => void
}

export interface NameSlice extends NameState, NameActions {}

const initialState = { name: [''] }

export const createNameSlice: StateCreator<NameSlice, [], [], NameSlice> = (set, get) => ({
  ...initialState,
  setName: (name: string[]) => set({ name }),
  getName: () => get().name,
  resetName: () => set(initialState),
})
