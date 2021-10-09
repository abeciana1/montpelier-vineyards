import React from 'react';
import USAMap from "react-usa-map";

const statesCustomConfig = () => {

    return {
        "AK": {
        fill: "#53293b"
        },
        "AZ": {
        fill: "#53293b"
        },
        "CO": {
        fill: "#53293b"
        },
        "AK": {
        fill: "#53293b"
        },
        "DC2": {
        fill: "#53293b"
        },
        "GA": {
        fill: "#53293b"
        },
        "FL": {
        fill: "#53293b"
        },
        "HI": {
        fill: "#53293b"
        },
        "IA": {
        fill: "#53293b"
        },
        "ID": {
        fill: "#53293b"
        },
        "IL": {
        fill: "#53293b"
        },
        "LA": {
        fill: "#53293b"
        },
        "KS": {
        fill: "#53293b"
        },
        "MA": {
        fill: "#53293b"
        },
        "MD": {
        fill: "#53293b"
        },
        "ME": {
        fill: "#53293b"
        },
        "MN": {
        fill: "#53293b"
        },
        "AK": {
        fill: "#53293b"
        },
        "MO": {
        fill: "#53293b"
        },
        "NC": {
        fill: "#53293b"
        },
        "NE": {
        fill: "#53293b"
        },
        "ND": {
        fill: "#53293b"
        },
        "NH": {
        fill: "#53293b"
        },
        "NM": {
        fill: "#53293b"
        },
        "NM": {
        fill: "#53293b"
        },
        "NY": {
        fill: "#53293b"
        },
        "OH": {
        fill: "#53293b"
        },
        "OK": {
        fill: "#53293b"
        },
        "OR": {
        fill: "#53293b"
        },
        "PA": {
        fill: "#53293b"
        },
        "SC": {
        fill: "#53293b"
        },
        "TN": {
        fill: "#53293b"
        },
        "VA": {
        fill: "#53293b"
        },
        "TX": {
        fill: "#53293b"
        },
        "WA": {
        fill: "#53293b"
        },
        "WI": {
        fill: "#53293b"
        },
        "WV": {
        fill: "#53293b"
        },
        "WY": {
        fill: "#53293b"
        }
    }
}

const DomShipping = () => {

    return (
        <React.Fragment>
            <USAMap
                customize={statesCustomConfig()}
            />
        </React.Fragment>
    )
}

export default DomShipping