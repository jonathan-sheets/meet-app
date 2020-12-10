import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render the NumberOfEvents component', () => {
    expect(NumberOfEventsWrapper).toHaveLength(1);
  });

  test('render the NumberOfEvents element', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });

  test('render label for number of events', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-label')).toHaveLength(1);
  })

  test('render number of events text input', () => {
    expect(NumberOfEventsWrapper.find('.events-number')).toHaveLength(1);
  });

  test('textbox input is rendered correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.events-number').prop('value')).toBe(numberOfEvents);
  });

  test('updates to text input changes state', () => {
    const numberOfEventsObject = { target: { value: '24' }};
    NumberOfEventsWrapper.find('.events-number').simulate('change', numberOfEventsObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('24');
  });
})