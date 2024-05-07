// Indica al grabador que detenga la grabación cuando el sensor no detecta movimiento.
//     Indica al grabador que comience la grabación cuando el sensor detecta movimiento.
//     Indica al grabador que detenga la grabación cuando el sensor arroja un error inesperado.
//     Comprueba el estado del sensor de movimiento una vez por segundo.

import {MotionSensor} from "../../../katas/video-surveillance/interfaces";
import {VideoRecorder} from "../../../katas/video-surveillance/video";

class MotionSensorMock implements MotionSensor {
    isDetectingMotion(): boolean {
        return true;
    }
}

describe('The video recorder', () => {
        it('should stop the record when the sensor does not detect movement', () => {
            //given
            const sensor = new MotionSensorMock();
            const spy = jest.spyOn(sensor, 'isDetectingMotion');
            const videoRecorder = new VideoRecorder(sensor);

            //when
            videoRecorder.startRecording();

            //then
            expect(spy).toHaveBeenCalled()
        })
    }
)