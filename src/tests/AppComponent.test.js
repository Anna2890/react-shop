import React from 'react';
import  App  from '../components/App';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme'
import Menu from '../components/Menu';
import Filter from '../components/Filter';
import { Container } from 'semantic-ui-react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


it('checks componentWillMount is called', () => {
   const spy = jest.spyOn(App.prototype, 'componentWillMount');
   shallow(<App />);
   expect(spy).toHaveBeenCalled();
});

describe('<App />', () => {
    it('render <Container/> component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Container)).toHaveLength(1)
    })
});

describe('<App />', () => {
    it('render <Menu/> component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Menu)).toHaveLength(0)
    })
});
    
describe('<App />', () => {
    it('render <Filter/> component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Filter)).toHaveLength(0)
    })
});
    

