const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Recruitment' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Accounting' },
    //... More employee records can be added here
];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map((employee) => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Function to calculate total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// Function to display HR employees
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee) => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Function to find employee by ID
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = 
            `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
}

// Function to find employees by specialization
function findBySpecialization(specialization) {
    const specializedEmployees = employees.filter(employee => employee.specialization === specialization);
    const specializedEmployeesDisplay = specializedEmployees.map((employee) => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = specializedEmployeesDisplay;
}
