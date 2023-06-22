import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ClassicLego from './ClassicLego';
import LegoCity from './LegoCity';
import LegoRides from './LegoRides';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [classicLego, setClassicLego] = useState([]);
    const [legoCity, setLegoCity] = useState([]);
    const [legoRides, setLegoRides] = useState([]);


    return (
        <div className='my-3 md:my-16'>
            <h2 className='text-center font-bold text-3xl my-5'>Shop By Category</h2>
            <Tabs>
                <TabList>
                    <Tab><span className='text-semibold'>Lego Classics</span></Tab>
                    <Tab><span className='text-semibold'>Lego City</span></Tab>
                    <Tab><span className='text-semibold'>Lego Rides</span></Tab>
                </TabList>

                <TabPanel>
                    <div>
                        <ClassicLego classicLego={classicLego} setClassicLego={setClassicLego}></ClassicLego>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <LegoCity legoCity={legoCity} setLegoCity={setLegoCity}></LegoCity>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <LegoRides legoRides={legoRides} setLegoRides={setLegoRides}></LegoRides>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;