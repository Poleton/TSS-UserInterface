export class SmartPolicy{
    //these are common with the policy
    id!: number;
    product!: string;
    description!: string;
    holderName!: string;
    mailAdress!: string;
    duration!: string;
    //these are exclusive to the smartpolicy
    territorialScope!: string;
    meansOfTransport!: string;
    numSensors!: number;
    conditions!: string;
    policyId!: number;
    
    clientAdress!: string;
    insuranceAddress!: string;
    brokerAdress!: string;

    shipmentID!:number;
    shipmentLiability!:number;
    sensorID!:number;
    sensorType!:number;
    levelDepth!:number;
    levelType!:number;
    levelMinimumRange!:number;
    levelMaximumRange!:number;
    percentualWeight!:number;

    contractPremium!:number;
    contractLiability!:number;
}