// Indica al grabador que detenga la grabación cuando el sensor no detecta movimiento.
//     Indica al grabador que comience la grabación cuando el sensor detecta movimiento.
//     Indica al grabador que detenga la grabación cuando el sensor arroja un error inesperado.
//     Comprueba el estado del sensor de movimiento una vez por segundo.

import {MotionSensor} from "../../../katas/video-surveillance/interfaces";
import {Recorder} from "../../../katas/video-surveillance/video";

class MotionSensorMock implements MotionSensor {
    detectedMotion: boolean;

    isDetectingMotion(): boolean {
        return this.detectedMotion;
    }
}

describe('The video recorder', () => {
        it('should stop the record when the sensor does not detect movement', () => {
            //given
            const motionSensor = new MotionSensorMock();
            const mockedDetectingMotion = jest.spyOn(motionSensor, 'isDetectingMotion');
            const videoRecorder = new Recorder(motionSensor);

            //when
            mockedDetectingMotion.mockImplementation(() => false)
            const startRecording = videoRecorder.startRecording();

            //then
            expect(mockedDetectingMotion).toHaveBeenCalled()
            expect(videoRecorder.isRecording).toBe(false)
        })
    }
)