import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event/> component', () => {

    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]}/>);
    });

    test('renders summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    test('renders location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test('renders start-date and timezone', () => {
        expect(EventWrapper.find('.start-date')).toHaveLength(1);
    });

    test('renders the show/hide details btn', () => {
        expect(EventWrapper.find('.show-details-btn')).toHaveLength(1);
    });

    //Scenario 1

    test('the event element is collapsed by default', () => {
        EventWrapper.setState({
            collapsed: true,
        });
        expect(EventWrapper.state('collapsed')).toBe(true);
    });

    //Scenario 2 

    test('clisk on the show-details btn to reveal the event details', () => {
        EventWrapper.setState({
            collapsed:true
        });
        EventWrapper.find('.show-details-btn').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(false);
    });

    //Scenario 3

    test('click on hide details btn to hide event details', () => {
        EventWrapper.setState({
            collapsed: false,
        });
        EventWrapper.find('.hide-detials-btn').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(true);
    });
});