import { Sensor } from "./sensor.model";

export class SmartPolicy{
    id!: number;
    //These are in common with the policy
    policyName!: string;
    policyHolderCIF!: string;
    policyHolderName!: string; 
    product!: string;
    territorialScope!: string;
    contractPremium!: number;
    contractLiability!: number;
    expiryTimestamp!: number;

    inceptionTimestamp!: number
    //Added for the customer, also in common
    holderName!: string;
    //These are exclusive to the smartpolicy
    policyId!: number;
    contractAddress!: string;
    clientAddress!: string;
    insuranceAddress!: string;
    brokerAddress!: string;
    shipmentID!: number;
    shipmentLiability!: number;

    sensors!:Map<string, Sensor>
   
    //String o que ????
    state!:any
    
}