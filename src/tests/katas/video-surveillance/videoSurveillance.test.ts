// Indica al grabador que detenga la grabación cuando el sensor no detecta movimiento. ✅
//     Indica al grabador que comience la grabación cuando el sensor detecta movimiento. ✅
//     Indica al grabador que detenga la grabación cuando el sensor arroja un error inesperado.✅
//     Comprueba el estado del sensor de movimiento una vez por segundo.

import {MotionSensor} from "../../../katas/video-surveillance/interfaces";
import {Recorder, SurveillanceController} from "../../../katas/video-surveillance/video";

class MotionSensorMock implements MotionSensor {
    detectedMotion: boolean;

    isDetectingMotion(): boolean {
        return this.detectedMotion;
    }
}

describe('The video recorder', () => {
        let motionSensor: MotionSensor;
        let recorder: Recorder;
        let controller: SurveillanceController;

        beforeEach(() => {
            motionSensor = new MotionSensorMock();
            recorder = new Recorder();
            controller = new SurveillanceController(motionSensor, recorder);
        });

        it('should stop the record when the sensor does not detect movement', () => {
            const spyRecorder = jest.spyOn(recorder, 'stopRecording');

            controller.recordMotion();

            expect(spyRecorder).toHaveBeenCalled();
        });
        it('should start the record when the sensor detect movement', () => {
            const stubSensor = jest.spyOn(motionSensor, 'isDetectingMotion');
            const spyRecorder = jest.spyOn(recorder, 'startRecording');
            stubSensor.mockImplementation(() => true);

            controller.recordMotion();

            expect(spyRecorder).toHaveBeenCalled();
        })
        it('should stop the record when the sensor sends an error', () => {
            const stubSensor = jest.spyOn(motionSensor, 'isDetectingMotion');
            const spyRecorder = jest.spyOn(recorder, 'stopRecording');
            stubSensor.mockImplementation(() => {
                throw new Error('Error');
            });

            controller.recordMotion();

            expect(spyRecorder).toHaveBeenCalled();
        })
    }
)