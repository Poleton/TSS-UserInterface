import { SensorEvent } from "./sensorEvent.model";
export class Alert{
    id!: number;
    state!: string;
    events!: Map<string,SensorEvent>

}
