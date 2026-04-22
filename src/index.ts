const subscriber: number | string = "1m"

const statusCode: "sucess"| "error" | "failure" = "sucess"

const orders = ["12", "20", "28", "42"];


let currentOrder:string | undefined;


for (let order of orders) {
    if (order === "28"){
        currentOrder = order
        break;
    }
    currentOrder ="11"
}


console.log(currentOrder)