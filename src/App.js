import React from 'react';
import {connect} from 'react-redux';

import {addFeature, removeFeature} from './Actions/FeatureActions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  console.log('app prop', props.car.features)

    const removeFeature = feature => {
      props.removeFeature(feature)
    };

    const buyItem = item => {
      props.addFeature(item)
    };

    return (
        <div className="boxes">
            <div className="box">
                <Header car={props.car}/>
                <AddedFeatures car={props.car} remove={removeFeature}/>
            </div>
            <div className="box">
                <AdditionalFeatures additionalFeatures={props.additionalFeatures} add={buyItem}/>
                <Total car={props.car} additionalPrice={props.additionalPrice}/>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ...state
    };
};

export default connect(mapStateToProps, {
  addFeature,
  removeFeature
})(App);
