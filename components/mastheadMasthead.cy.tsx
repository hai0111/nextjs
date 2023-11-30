import React from 'react'
import Masthead from './masthead'
import '@/styles/global.css'

describe('<Masthead />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<Masthead />)
		cy.get('h1').contains('Margelo')
		cy.get('h2').contains('App Development, done right')
	})
})
