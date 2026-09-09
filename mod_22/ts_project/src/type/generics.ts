// interface Response{
//     // data: any;
//     // data: string | number | boolean | object | null;
//     status: number;
// }
interface Response<T>{
    // data: any;
    // data: string | number | boolean | object | null;
    data: T ;
    status: number;
}
const transactionResponse: Response<string>={
    data :"Trnsaction Successful",
    // data :false,
    status:200
}

const transactionStatus: Response<boolean>={
    data :true,
    status:200
}

const transactionAmount: Response<number>={
    data: 215,
    status: 401
}


function getLength<T>(array: T[]):number{
    return array.length;
}

getLength<string>([""," ","2"]);
getLength<number>([1, 2, 3]);
