import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from './Button';

// TODO: These are just a few example tests copied from enzyme docs

describe('<Button />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Button>
        <div className="unique" />
      </Button>,
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('simulates click events', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Button onClick={onClick}>Click me</Button>);
    wrapper.find('button').simulate('click');
    expect(onClick).to.have.property('callCount', 1);
  });
});
