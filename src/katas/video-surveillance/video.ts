import {MotionSensor} from "./interfaces";

export class VideoRecorder implements VideoRecorder {
    isRecording: boolean;

    constructor(private readonly motionSensor: MotionSensor) {
    }

    startRecording(): void {
        if (!this.motionSensor.isDetectingMotion()) {
            this.isRecording = false;
        }

    }

    stopRecording(): void {
        console.log('Recording stopped');
    }
}