import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import HomeFeed from '../frontend/components/feed/home_feed.jsx';
import HomeFeedContainer from '../frontend/components/feed/home_feed_container.jsx';
import configureStore from 'redux-mock-store';

test("When image is clicked, modal opens", () => {
  let wrapper ;
  const feedTrips = {
    1: {
      description:"Part of Sicily's first nature reserve",
      id:1,
      images: [],
      liked: false,
      location: "Sicily, Italy",
      title: "Cala Capreria, Sicilia",
      trip_user: "me",
      user: "me"
    },
      2: {
      description:"Part of Sicily's first nature reserve",
      id: 2,
      images: [],
      liked: false,
      location: "Sicily, Italy",
      title: "Cala Capreria, Sicilia",
      trip_user: "me",
      user: "me"
    }
  };


  beforeEach(() => {
    wrapper = shallow(<HomeFeed feedTrips={ feedTrips }/>);

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1);
    });

    it('+++ contains output', () => {
        expect(wrapper.find('section.home-feed-items')).to.have.length(2);
  });
});

describe('Homefeed', () => {
  it('Creates a home feed', () => {
    const feed = renderer.create(<Homefeed feedTrips={ feedTrips }/>);
    expect(feed).toMatchSnapshot();
  });
});
});

//*********************************************************************
