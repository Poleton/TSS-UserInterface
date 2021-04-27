export class Policy {
    id!: number;
    name!: string;
    duration!: string;
    territorialScope!: string; //countries where the delivery will take place 
    meansOfTransportation!: string; 
    numSensors!: number;
    conditions!: number; //[dictionary ( values range –  % reserve per min )] sets the conditions in which the shipped goods will have to be compensated all time units in the conditions measurements are in minutes 


}