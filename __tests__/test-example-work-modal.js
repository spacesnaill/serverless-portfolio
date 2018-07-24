import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const myExample = {
        'title': "Work Example",
        'href': "http://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Nulla porttitor massa id neque.",
        'image': {
            'desc': "example screenshot of a project involving code",
            'src': "images/example1.png",
            'comment': ""
        }
    };

describe("ExampleWorkModal component", () => {
    let mockCloseModalFn = jest.fn();
    let component = shallow(<ExampleWorkModal example={ myExample } open={false}/>);
    let openComponent = shallow(<ExampleWorkModal example={ myExample } open={true} closeModal={mockCloseModalFn}/>);
    let anchors = component.find("a");
    

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should link to our project", () => {
        expect(anchors.prop('href')).toEqual(myExample.href)
    });

    it("Should have the modal class set correctly", () => {
        expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
    });

    it("Should have the modal class set correctly", () => {
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
    });
    
    it("Should call the closeModal handler when clicked", () => {
        openComponent.find(".modal__closeButton").simulate("click");
        expect(mockCloseModalFn).toHaveBeenCalled();
    })
});