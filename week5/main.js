const Dialog = document.getElementById('dialog');
const Form = document.forms['employee-edit-form'];
const DepartmentA = document.getElementById('department-a');
const DepartmentB = document.getElementById('department-b');
var employeeList = [];
var departmentASelectedList = [];
var departmentBSelectedList = [];


function toggleDialog(hide = false) {
    if (hide) {
        Dialog.classList.add('d-none');
    } else {
        Dialog.classList.remove('d-none');
    }
}

function submit() {
    employeeList.push({ ...getFormRawValue(Form), ...{ id: employeeList.length + 1 } });
    toggleDialog(true);
    rerender();
}

function onNameFieldChanged(value) {
    const SubmitButton = document.getElementById('btn-submit');
    if (value) {
        SubmitButton.removeAttribute('disabled');
    } else {
        SubmitButton.setAttribute('disabled', true);
    }
}

function onEmployeeChecked(employeeId, checked) {
    const Employee = employeeList.find(({ id }) => id === +employeeId);
    switch (Employee.department) {
        case 'A':
            if (checked) {
                departmentASelectedList.push(Employee);
            } else {
                departmentASelectedList = departmentASelectedList.filter(({ id }) => id !== +employeeId);
            }
            break;
        case 'B':
            if (checked) {
                departmentBSelectedList.push(Employee);
            } else {
                departmentBSelectedList = departmentBSelectedList.filter(({ id }) => id !== +employeeId);
            }
            break;
        default: break;
    }
}

function rerender() {
    const DepartmentAEmployee = employeeList.filter(({ department }) => department === 'A');
    const DepartmentBEmployee = employeeList.filter(({ department }) => department === 'B');
    DepartmentA.children[1].innerHTML = '';
    DepartmentB.children[1].innerHTML = '';
    DepartmentA.children[1].insertAdjacentHTML('afterbegin', DepartmentAEmployee.map(employee => getEmployeeHtml(employee)).join(''));
    DepartmentB.children[1].insertAdjacentHTML('afterbegin', DepartmentBEmployee.map(employee => getEmployeeHtml(employee)).join(''));
}

function getEmployeeHtml({ name, gender, id }) {
    return `<li>
    <input id="${id}" type="checkbox" onchange="onEmployeeChecked(this.id, this.checked)">
    <label class="ml-1 text-${gender === 'male' ? 'warning' : 'danger'}" for="${id}">${name}</label>
    </li>`
}

function switchDepartment(department) {
    switch (department) {
        case 'A':
            employeeList = employeeList.map(employee => {
                if (departmentBSelectedList.some(({ id }) => id === employee.id)) {
                    employee.department = 'A';
                }
                return employee;
            });
            departmentBSelectedList = [];
            break;
        case 'B':
            employeeList = employeeList.map(employee => {
                if (departmentASelectedList.some(({ id }) => id === employee.id)) {
                    employee.department = 'B';
                }
                return employee;
            });
            departmentASelectedList = [];
            break;
    }
    rerender();
}

function getFormRawValue(formElement) {
    return Object.fromEntries(Object.entries(formElement.elements)
        .filter(([id]) => !/^[0-9]+$/.test(id))
        .map(([id, { value }]) => [id, value]));
}