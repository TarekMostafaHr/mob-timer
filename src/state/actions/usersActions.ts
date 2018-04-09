// tslint:disable:interface-over-type-literal
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const SET_ORDER = 'SET_ORDER'
export const SET_ACTIVE = 'SET_ACTIVE'

export type Actions = {
  ADD_USER: {
    type: typeof ADD_USER
    payload: string
  }
  REMOVE_USER: {
    type: typeof REMOVE_USER
    payload: number
  }
  SET_ORDER: {
    type: typeof SET_ORDER
    payload: string[]
  }
  SET_ACTIVE: {
    type: typeof SET_ACTIVE
    payload: number
  }
}

export type RootAction = Actions[keyof Actions]

export const addUser = (payload: string): Actions[typeof ADD_USER] => ({
  type: ADD_USER,
  payload,
})

export const removeUser = (payload: number): Actions[typeof REMOVE_USER] => ({
  type: REMOVE_USER,
  payload,
})

export const setOrder = (payload: string[]): Actions[typeof SET_ORDER] => ({
  type: SET_ORDER,
  payload,
})

export const setActive = (payload: number): Actions[typeof SET_ACTIVE] => ({
  type: SET_ACTIVE,
  payload,
})
