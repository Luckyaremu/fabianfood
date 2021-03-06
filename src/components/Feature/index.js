import React from 'react';
import {FeatureContainer, FeatureButton} from "./FeatureElement";

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the day</h1>
            <p>Truffle alfredo sauce topped with 24 caract gold dust</p>
            <FeatureButton>Order now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
