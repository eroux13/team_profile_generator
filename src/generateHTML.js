const generateHTML = (answers) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <!-- Link CSS -->
        <link rel="stylesheet" href="./style.css">
        <!-- Link Fonts Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
            integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
        <!-- Link Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    </head>
    
    <body>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-md">
                <h2>The Dream Team</h2>
            </div>
        </nav>
    
        <main class="container">
            <!-- Generated Manager Cards Go Here -->
            <section class="row">
                ${answers.managers}
            </section>
            <!-- Generated Engineer Cards Go Here -->
            <section class="row">
                ${answers.engineers}
            </section>
            <!-- Generated Intern Cards Go Here -->
            <section class="row">
                ${answers.interns}
            </section>
        </main>
    </body>
    
    </html>`
}
module.exports = generateHTML;