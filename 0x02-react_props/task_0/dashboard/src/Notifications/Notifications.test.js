import React from 'react'
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notification component tests', ()=>{
    it('renders Notification component without crashing', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications).toBeDefined();
    });

    it('render ul', ()=> {
        const notifications = shallow(<Notifications />);

        expect(notifications.find('ul')).toBeDefined();
    })

    it("renders three list items", () => {
        const notification = shallow(<Notifications />);
    
        expect(notification.find("li")).toHaveLength(3);
    });
    
    it("renders correct text", () => {
        const notification = shallow(<Notifications />);

        expect(notification.find("p").text()).toBe("Here is the list of notifications");
    });
})