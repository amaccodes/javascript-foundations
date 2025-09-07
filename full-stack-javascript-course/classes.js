class User {
    dateJoined = new Date()
    constructor(username, displayName) {
        this.username = username
        this.displayName = displayName
    }

    greet() {
        console.log(`Hello ${this.displayName}! Welcome Back!`)
    }
}

let users = []

function createUser(username, displayName) {
    let user = new User(username, displayName)
    users.push(user)
    return user
}

let user1 = createUser('@botbot12', 'Nubby')

user1.greet()

console.log(user1.dateJoined)


let user2 = createUser('@aaron', 'amacthebigmac')

console.log(user2.dateJoined)

let user3 = createUser('@a', 'amamac')

console.log(users)