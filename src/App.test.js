import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EmployeeApp from './components/EmployeeApp/EmployeeApp';

// Connect enzyme to react
configure({adapter: new Adapter()});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('<App>',()=>{
  it('should render <EmployeeApp> element when server started',()=>{
    const wrapper = shallow(<EmployeeApp/>);
    expect(wrapper.exists);
  });
  it('should render <EmployeeApp> element when server started',()=>{
    const wrapper = shallow(<EmployeeApp/>);
    expect(wrapper);
  });
});