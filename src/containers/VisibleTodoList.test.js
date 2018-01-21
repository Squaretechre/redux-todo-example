import React from 'react'
import { shallow } from 'enzyme'
import VisibleTodoList from './VisibleTodoList'
import { createStore } from 'redux'

const createComponentWithState = (state) => {
  const store = createStore(state => state, state)
  return shallow(<VisibleTodoList />, { context: { store } }).dive()
}

it('should show correct number of todos with show all filter applied', () => {
  const state = {
    todos: [
      {
        id: 0,
        text: 'hello',
        completed: false
      },
      {
        id: 1,
        text: 'world',
        completed: false
      },
      {
        id: 2,
        text: 'goodbye',
        completed: false
      },
    ],
    visibilityFilter: 'SHOW_ALL'
  }
  const component = createComponentWithState(state)
  expect(component.find('Todo')).toHaveLength(3)
})

it('should show correct number of todos with show complete filter applied', () => {
  const state = {
    todos: [
      {
        id: 0,
        text: 'hello',
        completed: false
      },
      {
        id: 1,
        text: 'world',
        completed: true 
      },
      {
        id: 2,
        text: 'goodbye',
        completed: false
      },
    ],
    visibilityFilter: 'SHOW_COMPLETED'
  }
  const component = createComponentWithState(state)
  expect(component.find('Todo')).toHaveLength(1)
})
