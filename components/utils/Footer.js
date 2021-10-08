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
                                <button>
                                    <img
                                        src="/facebook-logo.png"
                                        alt="Montpelier Vineyard — Facebook"
                                        className="w-10"
                                    />
                                </button>
                                <button>
                                    <img
                                        src="/instagram-logo.png"
                                        alt="Montpelier Vineyard — Instagram"
                                        className="w-10 ml-5"
                                    />
                                </button>
                                <button>
                                    <img
                                        src="/weather-underground-logo.png"
                                        alt="Montpelier Vineyard — Weather Underground"
                                        className="w-10 ml-5"
                                    />
                                </button>
                            </div>
                        </div>
                        <div></div>
                    </section>
                </Layout>
            </section>
    )
}

export default Footer