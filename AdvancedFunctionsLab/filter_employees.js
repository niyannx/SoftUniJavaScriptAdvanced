function solve(input, filter) {
    function printEmployees(employees) {
        for (let i = 0; i < employees.length; i++) {
            console.log(`${i}. ${employees[i].first_name} ${employees[i].last_name} - ${employees[i].email}`);
        }
    }

    let allEmployees = JSON.parse(input);

    let key = filter.split('-')[0];
    let value = filter.split('-')[1];

    let fittingEmployees = [];
    for (const employee of allEmployees) {
        if (employee[key] === value) {
            fittingEmployees.push(employee);
        }
    }

    printEmployees(fittingEmployees);
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female');