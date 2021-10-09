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
                <section id="ship" className="pb-20">
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
                    <div
                        className="flex lg:justify-center lg:py-10"
                    >
                        <DomShipping/>
                    </div>
                    <section>
                        <h3
                            className="text-center text-marv text-2xl py-2 leading-10"
                        >Shipping, local delivery, or winery pickup Information</h3>
                        <ul
                            className="list-disc font-normal text-lg text-black leading-8"
                        >
                            <li>
                                Please note that shipping and taxes are applied during checkout and are not included in the listed bottle prices.
                            </li>
                            <li>
                                Méthode Champenoise white 2018 is disgorged on demand and take two weeks to process. After you place your order, specify how you would like the wine finished; Brut Zero, Brut, or Sec. Email us at dkbecker@montpeliervineyards.com
                            </li>
                            <li>
                                Orders placed Monday through Sunday will be processed and shipped the following week.
                            </li>
                            <li>
                                When you place your order you will receive a confirmation of your order and payment from VinoShipper. Once your order has shipped, you will receive an additional notification with tracking information.
                            </li>
                            <li>
                                We do not ship to Vermont; however, we do offer local delivery and winery pickup. After you place your order for local delivery and winery pickup, email me to make arrangements for pickup or delivery
                            </li>
                            <li>
                                For any questions please contact us directly, <a href="mailto:dkbecker@montpeliervineyards.com">dkbecker@montpeliervineyards.com</a>
                            </li>
                        </ul>
                    </section>
                </section>
            </Layout>
        </React.Fragment>
    )
}

export default WhereToBuy