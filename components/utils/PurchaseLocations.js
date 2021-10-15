import React, { useState } from 'react';
// import {  } from 'graphql-request'
// import env from "react-dotenv";
import RestaurantIcon from './RestaurantIcon'
import RetailIcon from './RetailIcon'



const PurchaseLocations = (props) => {

    const {
        locations
    } = props;


        //! {
        //!     "id": "ckuj8oxxsni9z0c71q66w93ki",
        //!     "locationTitle": "The Social",
        //!     "locationType": "Restaurant",
        //!     "locationWebsite": "http://thesocialvt.com/",
        //!     "phoneNumber": "(802) 223-0722",
        //!     "locationAddress": "147 Main Street\nMontpelier, VT 05602",
        //!     "locationGeoCoords": {
        //!         "latitude": 44.262148,
        //!         "longitude": -72.57243749999999
        //!     }
        //! }

    return (
        <React.Fragment>
            <section
                className="grid grid-cols-2"
            >
                <section>
                    <h4
                        className="text-xl xl:text-2xl 2xl:text-3xl text-marv py-5 font-medium"
                    >Find us at</h4>
                    <div
                        className=""
                    >
                        Filter by
                    </div>
                    <div>
                        <ul
                            className="px-5 py-2"
                        >
                            {locations.map((location) => {
                                return (
                                    <li
                                        key={location.id}
                                        className="py-3 leading-6"
                                    >
                                        <p
                                            className="text-lg text-marv font-medium flex content-center py-2"
                                        >
                                            {location.locationType === "Restaurant" ? 
                                                <RestaurantIcon/>
                                                :
                                                <RetailIcon/>
                                            }
                                            <div
                                                className="pl-5 text-marv font-medium"
                                            >
                                                {location.locationTitle}
                                            </div>
                                        </p>
                                        <p
                                        >{location.locationAddress}</p>
                                        <p
                                        >
                                            <a
                                                href={"tel:" + location.phoneNumber}
                                            >
                                                Tel: {location.phoneNumber}
                                            </a>
                                        </p>
                                        <p
                                            className="text-blueMetal"
                                        >
                                            <a
                                                href={location.locationWebsite}
                                            >
                                                {location.locationWebsite}
                                            </a>
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
                <section></section>
            </section>
        </React.Fragment>
    )
}

export default PurchaseLocations