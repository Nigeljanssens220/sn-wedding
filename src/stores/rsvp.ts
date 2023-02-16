import { create, type StateCreator } from 'zustand'
import { createEmailSlice, EmailSlice } from './slices/email'
import { createNameSlice, NameSlice } from './slices/name'

interface RsvpSlice extends NameSlice, EmailSlice {}

interface RsvpActions {
  resetAll: () => void
}

// create a slice that takes all the reset functions of underlying slices and combines it into one function
export const createRsvpSlice: StateCreator<RsvpSlice & RsvpActions, [], [], RsvpActions> = (...a) => ({
  resetAll: () => {
    createNameSlice(...a).resetName(), createEmailSlice(...a).resetEmail()
  },
})

export const useRsvpStore = create<RsvpSlice & RsvpActions>()((...a) => ({
  ...createNameSlice(...a),
  ...createEmailSlice(...a),
  ...createRsvpSlice(...a),
}))
