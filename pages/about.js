import React from 'react';
import Layout from '../components/utils/Layout'

const About = () => {

    return (
        <React.Fragment>
            <Layout>
                <section
                    className="flex items-center py-8"
                >
                    <div>
                        <div
                            className="font-bold text-marv text-2xl leading-8"
                        >
                        It's All In The Family
                            <div
                                className="font-normal text-lg text-black leading-8"
                            >
                                The Becker family started making organic wine back in 1992 on our small back yard organic vineyard in Port Huron, Michigan. The first grapes from those vines were crushed by the feet of my infant son Christopher, and since this time we dreamed of producing quality organic wines. We moved to Vermont in 1997 and started establishing an organic vineyard. Our goal is to produce small-batch organically farmed wines by hand
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://media.graphcms.com/LkNJP9FRACGrr6eyPxEb"
                        alt="Montpelier Vineyards — squishing grapes"
                        className="w-2/5 pl-8"
                    />
                </section>
            </Layout>
        </React.Fragment>
    )
}

export default About