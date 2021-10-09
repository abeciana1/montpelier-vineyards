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
                        <br/>
                        We can also now ship our wines to 37 states!
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
                <section>
                    <DomShipping/>
                </section>
            </Layout>
        </React.Fragment>
    )
}

export default WhereToBuy