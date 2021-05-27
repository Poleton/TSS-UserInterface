export class Policy {
    //Angular->API
    policyName!: string;
    policyHolderCIF!: string;
    policyHolderName!: string; 
    product!: string;
    territorialScope!: string;
    contractPremium!: number;
    contractLiability!: number;
    expiryTimestamp!: number;

    //API->Angular
    id!: number;
    inceptionTimestamp!: number;
    isSmart!: boolean;

    //Added for the customer. Igual se quitan pq petará si no

}