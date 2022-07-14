let first = {
    name: 'John',
    surname: 'Piterson',
    phone: 9263080768,
    work: true
}

let three = {
    name: 'John',
    surname: 'Piterson',
    phone: 9263080768,
    work: false
}

let second = {
    name: 'Bill',
    surname: 'Anderson',
    phone: 9263080768,
    work: false
}

function checkObj(a, b) {
    let firstString = JSON.stringify(a);
    let secondString = JSON.stringify(b);
    console.log(firstString)
    console.log(secondString)
    if(firstString === secondString) {
        return console.log('is equal')
    } else {
        return console.log('is not equal')
    }
}
checkObj(first, three)