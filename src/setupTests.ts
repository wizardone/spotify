import * as enzyme from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new ReactSixteenAdapter() });
require('jest-localstorage-mock');
