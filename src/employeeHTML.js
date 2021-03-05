const employeeCards = (answers) => {
    switch (answers.role) {
        case "Manager":
            return `<article class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h5 class="card-title">${answers.name}</h5>
                    <h5 class="card-title"><i class="fas fa-mug-hot"></i> ${answers.role}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${answers.id}</li>
                        <li class="list-group-item">Email: <a
                                href="mailto:${answers.email}">${answers.email}</a></li>
                        <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </article>`

        case "Engineer":
            return `<article class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h5 class="card-title">${answers.name}</h5>
                    <h5 class="card-title"><i class="fas fa-laptop-code"></i> ${answers.role}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${answers.id}</li>
                        <li class="list-group-item">Email: <a
                                href="mailto:${answers.email}">${answers.email}</a></li>
                        <li class="list-group-item">Github: <a href="https://www.github.com/${answers.github}"
                                target="_blank">${answers.github}</a></li>
                    </ul>
                </div>
            </div>
        </article>`

        case "Intern":
            return `<article class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h5 class="card-title">${answers.name}</h5>
                    <h5 class="card-title"><i class="fas fa-graduation-cap"></i> ${answers.role}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${answers.id}</li>
                        <li class="list-group-item">Email: <a
                                href="mailto:${answers.email}">${answers.email}</a></li>
                        <li class="list-group-item">School: ${answers.school}</li>
                    </ul>
                </div>
            </div>
        </article>`

        default:
            break;
    }
}
module.exports = employeeCards;