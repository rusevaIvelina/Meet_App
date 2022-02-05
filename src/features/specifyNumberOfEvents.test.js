import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow, mount } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        given('the user is on the app home page', () => {
        });

        let NumberOfEventsWrapper;

        when('the user does not specify certain number of events', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents/>)
        });

        then('the initial number of events will be thirty-two', () => {
            NumberOfEventsWrapper.setState({ numberOfEvenets: 32} )
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {

        let AppWrapper;

        given('the user is on the app home page', () => {
            AppWrapper = mount(<App/>);
        });

        when('the user puts a specific number of events they are interested to see', () => {
            const eventNumberInput = { target: { value: 5 }};
            AppWrapper.find(".NumberOfEvents").simulate( 'change', eventNumberInput ); 
        });

        then('that specified number will be shown', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            NumberOfEventsWrapper.setState({ numberOfEvents: 5 });
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(5);

        });
    });
});