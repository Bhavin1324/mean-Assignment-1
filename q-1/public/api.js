const email = document.querySelector('#exampleFormControlInput1');
const about = document.querySelector('#exampleFormControlTextarea1');
let count = 0;
async function postIntoPeoplesList() {
    const fdata = {
        email: email.value,
        desc: about.value
    }
    email.value = "";
    about.value = "";
    try {
        const options = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(fdata)
        }
        const response = await fetch('/api/v1/peoples', options);
        const { data } = await response.json();
        await getPeoplesList();
        const cardsList = document.querySelector('.cardsList');
        const { email, description } = data;
        cardsList.innerHTML += `
                    <div class="card m-2" style="width: 20rem;">
                        <div class="card-body">
                            <h5 class="card-title"><span class="text-primary">Email : </span>${email}</h5>
                            <p class="card-text"><span class="text-primary fw-bold">Description: </span>${description}</p>
                        </div>
                    </div>
                    `
    }
    catch (err) {
        console.log(err);
    }
}

async function getPeoplesList() {
    if (count == 0) {
        try {
            const response = await fetch('/api/v1/peoples');
            const { data } = await response.json();
            const cardsList = document.querySelector('.cardsList');
            const title = document.createElement('div');
            title.classList.add('fs-3');
            title.textContent = "List of poeples";
            cardsList.prepend(title);
            cardsList.innerHTML += data.map(person => {
                return `
                    <div class="card m-2" style="width: 20rem;">
                        <div class="card-body">
                            <h5 class="card-title"><span class="text-primary">Email : </span>${person.email}</h5>
                            <p class="card-text"><span class="text-primary fw-bold">Description: </span>${person.description}</p>
                        </div>
                    </div>
                    `;
            }).join(' ');
        }
        catch (err) {
            const cardsList = document.querySelector('.cardsList');
            const title = document.createElement('div');
            title.classList.add('fs-3');
            title.textContent = "List of poeples";
            cardsList.prepend(title);
            cardsList.innerHTML += "<div class='fs-6'>No People found</div>";
            console.log(err);
        }
        count++;
    }
}

document.querySelector('#getBtn').addEventListener('click', getPeoplesList);
document.querySelector('#postBtn').addEventListener('click', postIntoPeoplesList)
document.querySelector('#clrBtn').addEventListener('click', () => {
    const cardsList = document.querySelector('.cardsList');
    cardsList.innerHTML = ""
    count = 0;
})   