class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHi() {
        alert(`Hello, ${this.name}`)
    }
}

let user = new User('Aaron', 19)

user.sayHi()

// the extends keyword allows you to make a class that is a child of another and therefore can access all the methods and properties from the parent
class Admin extends User {
    getPassword() {
        let answer = prompt('Confirm the password for access to the exclusive dashboard.')
        console.log(answer)
    }
}

let admin = new Admin('Derek', 24)

admin.sayHi()

admin.getPassword()