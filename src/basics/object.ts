

type Size = "small" | "medium" | "large"; 

type Chai = {
    type: string,
    size: Size 
}


const newChai: Chai = {
    type: "massala",
    size: "small"
}


console.log(newChai)

