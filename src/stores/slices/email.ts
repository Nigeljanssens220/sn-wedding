import type { StateCreator } from 'zustand'

interface EmailState {
  email: string[]
}

interface EmailActions {
  setEmail: (email: string[]) => void
  getEmail: () => string[]
  resetEmail: () => void
}

export interface EmailSlice extends EmailState, EmailActions {}

const initialState = { email: [''] }

export const createEmailSlice: StateCreator<EmailSlice, [], [], EmailSlice> = (set, get) => ({
  ...initialState,
  setEmail: (email: string[]) => set({ email }),
  getEmail: () => get().email,
  resetEmail: () => set(initialState),
})
