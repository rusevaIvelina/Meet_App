import { loadFeature, defineFeature } from 'jest-cucumber';
import { mockData } from '../mock-data';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from "../Event";

const feature = loadFeature('./src/features/showHideanEventsDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user is on the home page', () => {
        });

        let EventListWrapper;
        when('An eventlist is displayed', () => {
            EventListWrapper = shallow(<EventList events={mockData}/>);
            expect(EventListWrapper.find('.EventList')).toHaveLength(1);
        });
        let EventWrapper;
        then('the event element is collapsed by default', () => {
            EventWrapper = shallow(<Event event={mockData[0]}/>);
            expect(EventWrapper.state('collapsed')).toBe(true);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let EventWrapper;
        given('the user is on the main page and list of events has been loaded', () => {
            EventWrapper = shallow(<Event event={mockData[0]}/>)
            expect(EventWrapper.state('collapsed')).toBe(true);
        });

        when('the user clicks on the show-details-button of an event', () => {
            const showDetailsButton = EventWrapper.find('.show-details');
            showDetailsButton.simulate('click');
        });

        then('the event element will be expanded to show the event details', () => {
            expect(EventWrapper.state('collapsed')).toBe(false);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let EventWrapper;
        given('the user has expanded an event to see its details', () => {
            EventWrapper = shallow(<Event event={mockData[0]}/>);
            EventWrapper.setState({ collapsed: false });
        });

        when('the user has clicked on hide-details-button', () => {
            const hideDetailsButton = EventWrapper.find('.hide-details');
            hideDetailsButton.simulate('click');
        });

        then('the event details will be hidden', () => {
            expect(EventWrapper.state('collapsed')).toBe(true);
        });
    });
});