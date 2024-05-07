import {MotionSensor} from "./interfaces";

export class VideoRecorder implements VideoRecorder {
    recorder: boolean;

    constructor(private readonly motionSensor: MotionSensor) {
    }

    startRecording(): void {
        if (!this.motionSensor.isDetectingMotion()) {
            this.recorder = false;
        }

    }

    stopRecording(): void {
        console.log('Recording stopped');
    }
}