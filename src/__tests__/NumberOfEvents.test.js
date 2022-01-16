import React from 'react';
import NumberOfEvents from '../NumberOfEvents';
import { shallow } from 'enzyme';

describe('NumberOfEvents /> component', () => {

    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents/>)
    });

    test('render textbox element correctly', () => {
        expect(NumberOfEventsWrapper.find('.newValue')).toHaveLength(1);
    });

    test('render text input correctly', () => {
        const numberOfEvents = NumberOfEventsWrapper.prop("numberOfEvents");
        expect(NumberOfEventsWrapper.find(".number-of-events").prop("value")).toBe(numberOfEvents);
    });
});