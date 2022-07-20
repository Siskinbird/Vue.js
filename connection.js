/* hello im got started */
function inicials(str) {
    let newArr = []
    str.split(' ').forEach(el => {
        newArr.push(el.substring(0, 1).toUpperCase() + '.')
    });
    
   /*  for(let i in arr) {
        newArr.push(arr[i].substr(0, 1) + '.')
    } */
    /* newArr.push(arr[0].charAt(0))
    newArr.push(arr[1].charAt(0)) */
    /* let newArr = arr.forEach((el, index) => {
        el[index][0];
    }) */
    return newArr.join('')
}

console.log(inicials('bobby Dildon mAyham'))

/* function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.getName = function() {
        return this.name;
    }
    this.getLastName = function() {
        return this.lastName;
    }
    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var n = new NameMe('John', 'Doe');
console.log(n.firstName)    
console.log(n.lastName)   
console.log(n.getFullName())   */  

class NamedOne {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    set fullName(value) {
        let reg = '/ /';
        if(reg.test(value)) {
            [this.firstName, this.lastName] = value.split(' ')
        }
    }
}
NamedOne('John','Smith')
/* function NamedOne(first, last) {
    // -- SHOULD be changed --
        this.firstName = first;
        this.lastName = last;
      return {

      get fullName() {
        return `${this.firstName} ${this.lastName}`;
      },
    
      set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
      }
    }
} */
