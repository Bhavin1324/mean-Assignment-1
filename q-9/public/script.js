const ename = document.querySelector('#nameInput');
const desig = document.querySelector('#designation');
const btn = document.querySelector('#btnSubmit');
const tableBody = document.querySelector('#tableBody');
async function getEmployeeData() {
    try {
        const response = await fetch('/data');
        const { data } = await response.json();
        tableBody.innerHTML += data.map(emp => {
            return `<tr>
                    <th scope="row">${emp.EID}</th>
                    <td>${emp.NAME}</td>
                    <td>${emp.DESIG}</td>
                </tr>`
        }).join(' ')
    } catch (err) {
        console.log(err);
    }
}
getEmployeeData();

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const employeeData = {
        name: ename.value,
        designation: desig.value
    }
    try {
        const response = await fetch('/data', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(employeeData)
        })
        tableBody.innerHTML = "";
        getEmployeeData();
        ename.value = "";
        desig.value = "";
    }
    catch (err) {
        console.log(err);
    }
})
