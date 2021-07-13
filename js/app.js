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
        const $github = $("<a>").addClass("btn btn-primary card-link").attr("href", `${project.github}`).text("Code");
        const $deployed = $("<a>").addClass("btn btn-primary card-link").attr("href", `${project.deployed}`).text("Link");

        $links.append($github, $deployed);
        $body.append($title, $description, $links);
        $project.append($image, $body);

        $projects.append($project);
    })
})
.catch(error => {console.log(error)});

const $skills = $(".skills");
const $ul = $("<ul>");
$skills.append($ul);

/* if doesn't match i or img, just don't do anything - I'm entering data, so should be okay */
$.ajax("./json/skills.json")
.then(data => {
    data.sort((a,b) => (a.name > b.name) ? 1 : -1)
    data.forEach(skill => {
        const $skill = $("<li>")
        if (skill.tag === "i") {
            $skill.html(
                `<i class="${skill.icon}"></i>${skill.name}`
            );
        } else if (skill.tag === "img") {
            $skill.html(
                `<img src="${skill.icon}"></img>${skill.name}`
            );
        } else {
            return;
        }
        $ul.append($skill);
    })
})
.catch(error => {console.log(error)});