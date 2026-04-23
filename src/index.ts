function getchai(kind: string | number) {
    if( typeof kind === "string"){
        return `making ${kind} chai....`;
    }

    return `chai order: ${kind}`;
}

function serveChai(msg?: string) {
    if(msg) {
        return `serving ${msg}`;
    }
    return `serving default masala chai`
}


function orderChai(size: "small"| "medium" | "larger" | number) {
    if(size === "small"){
        return `small cutting chai....`
    }
    if (size === "medium" || size === "larger"){
        return ` make extra chai..`
    }

    return `chai order ${size}`
}


class Kulhadchai{
    serve(){
        return `serving cutting chai`
    }
}


class cutting{
    serve(){
        return `serving cutting chai`
    }
}


