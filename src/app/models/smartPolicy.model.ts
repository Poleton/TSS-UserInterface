export class SmartPolicy{

    //These are in common with the policy
    policyName!: string;
    policyHolderCIF!: string;
    policyHolderName!: string; 
    product!: string;
    territorialScope!: string;
    contractPremium!: number;
    contractLiability!: number;
    expiryTimestamp!: number;
    //Added for the customer, also in common
    description!: string;
    holderName!: string;
    mailAdress!: string;
    duration!: string;
    
    //These are exclusive to the smartpolicy
    policyId!: number;
    contractAdress!: string;
    clientAdress!: string;
    insuranceAddress!: string;
    brokerAdress!: string;
    shipmentID!:number;
    shipmentLiability!:number;

    //MISSING MAP(String,SENSOR) *Do not put empty sensors!* 

    sensorID!:number;
    sensorType!:number;
    levelDepth!:number;
    levelType!:number;
    levelMinimumRange!:number;
    levelMaximumRange!:number;
    percentualWeight!:number;

    /*
    meansOfTransport!: string;
    numSensors!: number;
    conditions!: string;
    */
    
}