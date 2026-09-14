const form = document.querySelector('#employeeForm');
const employeeList = document.querySelector('#employeeList');
const totalEmployees = document.querySelector('#totalEmployees');
const activeEmployees = document.querySelector('#activeEmployees');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const roleInput = document.querySelector('#role');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const role = roleInput.value.trim();

    if (name === '' || email === '' || role === '') {
        alert('Please fill in all fields.');
        return;
    }

    const employee = document.createElement('div');

    employee.classList.add('employee');

    employee.innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Role: ${role}</p>
        <p>Status: Active</p>
        <button class="deleteBtn">Delete</button>
    `;

    employeeList.appendChild(employee);

    const deleteButton = employee.querySelector('.deleteBtn');

    deleteButton.addEventListener('click', () => {
        employee.remove();
        updateEmployeeCount();
    });

    updateEmployeeCount();

    form.reset();
});

function updateEmployeeCount() {
    const employees = document.querySelectorAll('.employee');

    totalEmployees.textContent = employees.length;
    activeEmployees.textContent = employees.length;
}