import React from 'react';
import Layout from '../components/utils/Layout'
import DomShipping from '../components/utils/DomShipping'

const WhereToBuy = () => {

    return (
        <React.Fragment>
            <Layout>
                <section className="py-5">
                    <h2
                        className="text-marv text-3xl text-center"
                    >Where to buy our wine</h2>
                    <div className="text-center text-marv text-lg py-2">
                        You can find our fine wines in restaurants and retail locations!
                    </div>
                </section>
                <section
                    className="text-marv text-xl grid md:grid-cols-3 justify-items-center"
                >
                    <a
                        href="/where-to0-buy#retail"
                    >Restaurants & Retailers</a>
                    <a
                        href="/where-to0-buy#local"
                    >Local Pickup</a>
                    <a
                        href="/where-to0-buy#ship"
                    >Domestic Shipping</a>
                </section>
                <section></section>
                <section id="local">
                    Ship with vino shipper
                </section>
                <section className="">
                    <h2
                        className="text-center text-marv text-3xl py-2 leading-10"
                    >
                        We can now ship our wines to 37 states!
                    </h2>
                    <div
                        className="text-center font-normal text-lg text-black leading-8"
                    >
                        Alaska, Arizona, Colorado, Washington DC, Florida, Georgia, Hawaii, Iowa, Idaho, Illinois, Indiana, Kansas, Louisiana, Massachusetts, Maryland, Maine, Minnesota, Missouri, North Carolina, North Dakota, Nebraska, New Hampshire, New Mexico, Nevada, New York, Ohio, Oklahoma, Oregon, Pennsylvania, South Carolina, Tennessee, Texas, Virginia, Washington, Wisconsin, West Virginia, Wyoming
                    </div>
                    <section
                        className="flex justify-center py-10"
                    >
                        <DomShipping/>
                    </section>
                </section>
            </Layout>
        </React.Fragment>
    )
}

export default WhereToBuy