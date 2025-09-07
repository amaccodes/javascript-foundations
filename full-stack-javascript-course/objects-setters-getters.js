const createPerson = function(birthdate, firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        birthdate: birthdate,

        get fullName() {
            return `${firstName} ${lastName}`
        },

        get age() {
            currYear = new Date().getFullYear() 
            if (new Date().getMonth() > this.birthdate.getMonth() || 
            new Date().getMonth() === this.birthdate.getMonth() && 
            new Date().getDate() >= this.birthdate.getDate()) {
                return currYear - this.birthdate.getFullYear()
            } else {
                return currYear - this.birthdate.getFullYear() - 1
            }
        },
    }
}

let aaron = createPerson(new Date(2005, 9, 25), 'Aaron', 'McDonald')

console.log(aaron.fullName)



let anthony = createPerson(new Date(2005, 9, 25), 'Anthony', 'McDonald')

console.log(anthony.age)


function newUser(username) {
    return {
        username: username,

        get displayName() {
            return this._displayName
        },

        set displayName(val) {
            this._displayName = val
        }
    }
}

user1 = newUser('@aaronmcdonald')
user1.displayName = 'Aaron'
console.log(user1.displayName)