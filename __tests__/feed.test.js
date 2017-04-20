import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import HomeFeed from '../frontend/components/feed/home_feed.jsx';
import HomeFeedContainer from '../frontend/components/feed/home_feed_container.js';
import configureStore from 'redux-mock-store';
import selectTrips from '../frontend/reducers/selectors.js';
import {Provider} from 'react-redux';


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
//testing the store

describe('>>HomeFeed with shallow rendering and passing {store directly}', () => {
  const initialState = { trips: {
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
  }};
  const mockStore = configureStore();
  let store,container;

  beforeEach(()=>{
       store = mockStore(initialState);
       container = shallow(<HomeFeedContainer store={store} /> );

       it('+++ render the connected(SMART) component', () => {
          expect(container.length).toEqual(1);
       });

       it('+++ check Prop matches with initialState', () => {
           expect(container.prop('feedTrips')).toEqual(selectTrips(initialState.trips));
        });
   });

});
