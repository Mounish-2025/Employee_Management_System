// Employee constructo function

function Employee(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
}

// Create a simple employee db object

const employeeDb = {};

// function to add employee to the database

function addEmployee(id, name, department, salary) {
    const employee = new Employee(id, name, department, salary);
    employeeDb[id] = employee;
    console.log("Employee with ID "+id+" added to the database");
}

// function to get all employees (object.values)
function getAllEmployees() {
    const employees = Object.values(employeeDb);
    console.log("List of Employees");
    employees.forEach((employee) => {
        console.log(`Name: ${employee.name},    Department: ${employee.department},     Salary: ${employee.salary}`);
    })
    
}

// function to get employee details by id (object.entries)
function getEmployeeDetails(id) {
    if(employeeDb[id]){
        return Object.entries(employeeDb[id]);
    }else {
        return "Employee with ID "+id+" not found";
    }
}

// function to update employee details
function updateEmployee(id, updateDetails) {
    if(employeeDb[id]){
        Object.assign(employeeDb[id], updateDetails)
    }else {
        console.log("Employee with ID "+id+" not found");
    }
}

// function to freeze employee data
function freezeEmployee(id) {
    if(employeeDb[id]){
        Object.freeze(employeeDb[id]);
        console.log("Employee Data Freezed");
        
    }else {
        console.log("Employee with ID "+id+" not found");
    }
}

// function to seal employee data
function sealEmployee(id) {
    if(employeeDb[id]){
        Object.seal(employeeDb[id]);
        console.log("Employee Data Sealed");
        
    }else {
        console.log("Employee with ID "+id+" not found");
    }
}

// usage
addEmployee(1, "Mounish", "Developer", 40000);
addEmployee(2, "Jack", "Quality", 50000);
addEmployee(3, "Guna", "Designer", 40000);
addEmployee(4, "Mama", "Marketing", 30000);

// View employee
console.log("\n");
getAllEmployees();

// get employee details
console.log("\n");
console.log("View Employee Details");
console.log(getEmployeeDetails(2));

// update employee details
console.log("\n");
console.log("Update Employee Details");
updateEmployee(2, {salary: 55000});
console.log("After Update");
getAllEmployees();

// freze employee data
console.log("\n");
console.log("Freeze Employee Data");
freezeEmployee(2);
// Attempt to modify frozen data
employeeDb[2].salary = 60000; // This will not throw an error but will not update the data either
console.log("After Freeze");
getAllEmployees();

// seal employee data
console.log("\n");
console.log("Seal Employee Data");
sealEmployee(1);
employeeDb[1].salary = 45000;
console.log("After Seal");
console.log(getEmployeeDetails(1));
