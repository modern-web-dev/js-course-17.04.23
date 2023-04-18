// Model
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// View Model = Component
class EmployeeComponent {
    constructor(docApi) {
        this.docApi = docApi;
        console.log(this.docApi);
        this.docApi.querySelector('form').addEventListener('submit',
            (event) => {
                event.preventDefault();
                console.log(this.docApi.querySelector('#firstName').value);
            });
    }

    initWith(employee) {
        const firstNameInput = this.docApi.querySelector('#firstName');
        firstNameInput.value = employee.firstName;
    }
}

const component = new EmployeeComponent(document);
component.initWith(new Employee('Jan', 'Kowalski'));
