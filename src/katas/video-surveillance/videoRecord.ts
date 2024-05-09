import {VideoRecorder} from "./interfaces";

export class Recorder implements VideoRecorder {
    isRecording: boolean;

    startRecording(): void {
        this.isRecording = true;
    }

    stopRecording(): void {
        this.isRecording = false;
    }
}