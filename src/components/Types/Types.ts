export type First = {
    transactions: {
        id: number;
        description: string;
        amount: number;
    }[];
};

export type Actions = {
    type: "ADD_TRANSACTION";
    payload: {
        id: number | any;
        amount: number;
        description: string;
    };
} | {
    type: "DELETE_TRANSACTION";
    payload: number;
};

export type Second = {
    id: number;
    amount: number;
    description: string;
}