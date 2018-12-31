import React from 'react';
import { shallow } from 'enzyme';

import SearchForm from './SearchForm';

describe('Search Form', () => {
  let component;
  let instance;

  const props = {
    searchForGame: jest.fn()
  };

  beforeEach(() => {
    component = shallow(<SearchForm {...props} />);
    instance = component.instance();
  });

  it('snapshot test', () => {
    expect(component).toMatchSnapshot();
  });


  it('updates search term state properly', () => {
    expect(instance.state.searchText).toEqual('');

    const newSearchTerm = 'mario bros';
    instance.handleTextChange(
      {target: 
         {value: newSearchTerm}
       }
    );
    expect(instance.state.searchText).toEqual(newSearchTerm);

  });

  it('calls dispatch function ', () => {
    const newSearchTerm = 'halo';
    instance.handleTextChange(
      {target: 
         {value: newSearchTerm}
       }
    );
    expect(instance.state.searchText).toEqual(newSearchTerm);

    const button = component.find('WithStyles(IconButton)');
    button.props().onClick();

    expect(props.searchForGame).toHaveBeenCalled();

    expect(props.searchForGame).toBeCalledWith('halo');
  });

});
