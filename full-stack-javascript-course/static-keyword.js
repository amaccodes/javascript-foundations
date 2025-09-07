// Allows us to access properties and methods specific to a class rather than accessing them through an instance of the class.


class User {
    static snapscore = 3
    static name = 'Instagram User'

    constructor(age) {
        this.age = age
    }

    static greeting() {
        alert(`Hello, my name is ${User.name}`)
        console.log(`Hello, my name is ${User.name}`)
    }
}

User.greeting()

console.log(User.snapscore)

let user = new User('Aaron')

user.greeting() // produces an error, because the instance method .greeting doesn't exist. .greeting() is a static method