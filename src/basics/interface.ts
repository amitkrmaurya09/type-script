

interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId: string,

    startTrail(): string,
    getCoupon(couponName: string, value: number ): number
}

interface User {
    gitHubtoken: string
}

interface Admin extends User {

    // literal..
    role: "admin" | "ta" | "lerner"
}

const hitesh: Admin =  {
    dbId: 22,
    email: "a@g.com",
    userId: 2211,
    role: "admin",
    gitHubtoken: "github",
    startTrail:() => {
    return "trail started.."        
    },

    getCoupon: (name: "hitesh10", off: 10) => {
        return 10
    }

}

console.log(hitesh.startTrail()) 
console.log(hitesh)