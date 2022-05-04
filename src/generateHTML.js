// Generate text for HTML file
function generateHTML(teamArray) {

  //head and header of HTML
  let htmlTemplate =
  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${teamArray[0]} Roster</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="../src/style.css">
      <script src="https://kit.fontawesome.com/647037a1b1.js" crossorigin="anonymous"></script>
    </head>
    <body>
      <header>
        <h1>${teamArray[0]} Roster </h1>
      <header>
      <div class="class-container d-flex justify-content-evenly flex-wrap">
  `;

  //add team member card
  for ( let i = 1; i < teamArray.length; i++) {
    htmlTemplate +=
    `
      <div class='card shadow rounded'>
        <div class='card-body'>
          <h2>${teamArray[i].name}</h2>
    `;

    // add appropriate icon of team member's role
    if ( teamArray[i].role === 'Manager') {
      htmlTemplate += `<h4 class = 'fa-solid fa-mug-hot'> ${teamArray[i].role} </h4>`;
    }
    else if ( teamArray[i].role === 'Engineer') {
      htmlTemplate += `<h4 class = 'fa-solid fa-glasses'> ${teamArray[i].role} </h4>`;
    }
    else if ( teamArray[i].role === 'Intern') {
      htmlTemplate += `<h4 class = 'fa-solid fa-graduation-cap'> ${teamArray[i].role} </h4>`;
    };

    htmlTemplate +=
    `
    </div>
    <ul class='list-group list-group-flush'>
      <li class='list-group-item'><b> Employee ID: </b> ${teamArray[i].id} </li>
      <li class='list-group-item'><b> Email: </b><br> <a href="mailto:${teamArray[i].email}"> ${teamArray[i].email} </a></li>
    `;
  
    //if manager, display office number
    if ( teamArray[i].office) {
      htmlTemplate += `<li class='list-group-item'><b> Office Number: </b><br> ${teamArray[i].office} </li>`;
    }
    // if engineer, display github username
    else if ( teamArray[i].github) {
      htmlTemplate += `<li class='list-group-item'><b> GitHub: </b><br> <a href="https://github.com/${teamArray[i].github}">${teamArray[i].github} </a></li>`;
    }
    // if intern, display school
    else if ( teamArray[i].school) {
      htmlTemplate += `<li class='list-group-item'><b> School: </b><br> ${teamArray[i].school} </li>`
    };

    htmlTemplate +=
    `
    </ul>
    </div>
    `

  };
 

  // footer of HTML
  htmlTemplate +=
  `    
        </div>
      </body>
      </html> 
  `;


  // Return HTML string
  return htmlTemplate;

};

module.exports = generateHTML;