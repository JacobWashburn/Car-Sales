import {ADD_FEATURE, REMOVE_FEATURE} from '../Actions/FeatureActions';

export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        {id: 1, name: 'V-6 engine', price: 1500},
        {id: 2, name: 'Racing detail package', price: 1500},
        {id: 3, name: 'Premium sound system', price: 500},
        {id: 4, name: 'Rear spoiler', price: 250}
    ]
};

export const reducer = (state = initialState, action) => {
    console.log('state and action', state, action);
    switch (action.type) {
        case ADD_FEATURE:
            const getId = state.car.features.map(item => {
                return item.id;
            });
            return {
                ...state,
                additionalPrice: getId.includes(action.payload.id) ? state.additionalPrice : state.additionalPrice + action.payload.price,
                car: {
                    ...state.car,
                    features: getId.includes(action.payload.id) ? state.car.features : [...state.car.features, action.payload]
                },
                additionalFeatures: state.additionalFeatures.filter(item => item.id !== action.payload.id)
            };
        case REMOVE_FEATURE:
            const filterFeatures = state.car.features.filter(feature => {
                if (feature.id !== action.payload.id) {
                    return feature;
                }
            });
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    features: filterFeatures
                },
                additionalFeatures: [...state.additionalFeatures, action.payload]
            };
        default:
            return state;
    }
};