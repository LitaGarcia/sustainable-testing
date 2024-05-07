import {MotionSensor, VideoRecorder} from "./interfaces";

export class Recorder implements VideoRecorder {
    isRecording: boolean;

    constructor(private readonly motionSensor: MotionSensor) {
    }

    startRecording(): void {
        if (!this.motionSensor.isDetectingMotion()) {
            this.isRecording = false;
        } else {
            this.isRecording = true;
        }
    }

    stopRecording(): void {
        console.log('Recording stopped');
    }
}