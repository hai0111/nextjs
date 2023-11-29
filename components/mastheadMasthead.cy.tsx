import React from 'react'
import Masthead from './masthead'

describe('<Masthead />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Masthead />)
  })
})