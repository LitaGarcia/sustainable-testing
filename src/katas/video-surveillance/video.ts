import {MotionSensor, VideoRecorder} from "./interfaces";

export class Recorder implements VideoRecorder {
    isRecording: boolean;

    startRecording(): void {
        this.isRecording = true;
    }

    stopRecording(): void {
        this.isRecording = false;
    }
}

export class SurveillanceController {
    constructor(private sensor: MotionSensor, private recorder: VideoRecorder) {
    }

    recordMotion(timesToCheck: number = 1) {
        Array.from({length: timesToCheck}, (_, i) => i).forEach(() => {
            try {
                this.sensor.isDetectingMotion() ? this.recorder.startRecording() : this.recorder.stopRecording();
            } catch (e) {
                this.recorder.stopRecording();
            }
        });

    }
}