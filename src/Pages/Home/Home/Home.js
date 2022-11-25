import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Catagories from '../Catagorise/Catagories';
import Subscription from '../Subscription/Subscription';

const home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Catagories></Catagories>
            <Subscription></Subscription>
        </div>
    );
};

export default home;