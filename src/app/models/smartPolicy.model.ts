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

    inceptionTimestamp!: number
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
    shipmentID!: number;
    shipmentLiability!: number;

    //MISSING MAP(String,SENSOR) *Do not put empty sensors!* 

    sensor!: string;
    //sensors!:Sensor[];

    /*
    meansOfTransport!: string;
    conditions!: string;
    */
    
}