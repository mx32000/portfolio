const $projects = $(".projects");
$.ajax("./json/projects.json")
.then(data => {
    data.forEach(project => {
        const $project = $("<div>");
        const $title = $("<h2>").addClass("name").text(`${project.name}`);
        const $description = $("<h3>").addClass("description").text(`${project.description}`);
        $project.append($title).append($description);
        $projects.append($project);
    })
})
.catch(error => {console.log(error)});