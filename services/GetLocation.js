import satellites from '../satellites/Satellites'
import trilateration from 'node-trilateration'

module.exports = {
    getLocation: () => {

        let postion = [];
        satellites.forEach(satellite => {
            postion.push({
                x: satellite.position.x,
                y: satellite.position.y,
                distance: satellite.distance
            });
        });

        if (postion.find(x => x.distance == undefined) != undefined) {
            throw 'Información insuficiente!!';
        }

        let finalPosition = trilateration.calculate(postion);

        return {
            x: finalPosition.x,
            y: finalPosition.y
        };
    }
};