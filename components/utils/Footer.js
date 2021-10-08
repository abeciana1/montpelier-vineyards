import React from 'react';
import Layout from './Layout'

const Footer = () => {


    return (
            <section className="bg-brown bottom-0 w-full py-5">
                <Layout>
                    <section
                        className="grid grid-cols-2"
                    >
                        <div>
                        <div className="flex items-center">
                                <a
                                    href="http://www.facebook.com/MontpelierVineyards"
                                    target="_blank"
                                    alt="Montpelier Vineyards — Facebook"
                                >    
                                    <button>
                                        <img
                                            src="/facebook-logo.png"
                                            alt="Montpelier Vineyards — Facebook"
                                            className="w-10"
                                        />
                                    </button>
                                </a>
                                <a
                                    href="https://www.instagram.com/montpelier.vineyards/"
                                    target="_blank"
                                    alt="Montpelier Vineyards — Instagram"
                                >    
                                    <button>
                                        <img
                                            src="/instagram-logo.png"
                                            alt="Montpelier Vineyard — Instagram"
                                            className="w-10 ml-5"
                                        />
                                    </button>
                                </a>
                                <a
                                    href="https://www.wunderground.com/personal-weather-station/dashboard?ID=KVTMONTP6"
                                    target="_blank"
                                    alt="Montpelier Vineyards — Weather Underground"
                                >
                                    <button>
                                        <img
                                            src="/weather-underground-logo.png"
                                            alt="Montpelier Vineyard — Weather Underground"
                                            className="w-10 ml-5"
                                        />
                                    </button>
                                </a>
                                <div>
                                </div>
                            </div>
                                <div 
                                    className="text-seaweed pt-5"
                                >
                                    Montpelier Vineyards
                                    <br/>
                                    2446 Elm Street
                                    <br/>
                                    Montpelier, Vermont 05602
                                    <br/>
                                    802-522-4479
                                </div>
                        </div>
                        <div></div>
                    </section>
                    <section
                        className="grid md:grid-cols-5 items-center justify-items-center"
                    >
                        <div></div>
                        <div>
                            <img
                            src="https://media.graphcms.com/output=format:jpg/FU1jNGsSRyKj4981mMkY?_ga=2.212780436.1804149618.1633573467-722458239.1630371733"
                            className="w-20"
                            alt="Vermont Fresh Network logo"
                            />
                        </div>
                        <div>
                            <img
                            src="https://media.graphcms.com/output=format:jpg/FU1jNGsSRyKj4981mMkY?_ga=2.212780436.1804149618.1633573467-722458239.1630371733"
                            className="w-20"
                            alt="Vermont Fresh Network logo"
                            />
                        </div>
                        <div>
                            <img
                            src="https://media.graphcms.com/output=format:jpg/FU1jNGsSRyKj4981mMkY?_ga=2.212780436.1804149618.1633573467-722458239.1630371733"
                            className="w-20"
                            alt="Vermont Fresh Network logo"
                            />
                        </div>
                        <div></div>
                    </section>
                    <div
                        className="text-black text-center font-normal pt-5"
                    >
                        ©Montpelier Vineyards 2021
                    </div>
                </Layout>
            </section>
    )
}

export default Footer