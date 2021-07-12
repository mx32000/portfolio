const $projects = $(".projects");
$.ajax("./json/projects.json")
.then(data => {
    data.forEach(project => {
        const $project = $("<div>").addClass("card");
        const $image = $("<img>").addClass("card-img-top").attr("src", `${project.image}`);
        const $body = $("<div>").addClass("card-body");
        const $title = $("<h5>").addClass("card-title").text(`${project.name}`);
        const $description = $("<p>").addClass("card-text").text(`${project.description}`);
        const $links = $("<div>").addClass("card-links");
        const $github = $("<a>").addClass("btn btn-primary").attr("href", `${project.github}`).text("Code");
        const $deployed = $("<a>").addClass("btn btn-primary").attr("href", `${project.deployed}`).text("Link");

        $links.append($github, $deployed);
        $body.append($title, $description, $links);
        $project.append($image, $body);

        $projects.append($project);
    })
})
.catch(error => {console.log(error)});