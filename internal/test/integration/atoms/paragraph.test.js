import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './paragraph.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'paragraph')
})

test('Calls event handler', () => {
  eventHandlerTest(Fixture, 'paragraph')
})
