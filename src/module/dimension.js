import {Dimensions} from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
function DIMENSION (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

module.exports = DIMENSION;