import {MotionSensor} from "./interfaces";

export class VideoRecorder implements VideoRecorder {
    constructor(private readonly motionSensor: MotionSensor) {
    }

    startRecording(): void {
        if (this.motionSensor.isDetectingMotion()) {
            console.log('Recording started');
        }

    }

    stopRecording(): void {
        console.log('Recording stopped');
    }
}