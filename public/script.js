Handlebars.templates = Handlebars.templates || {};

var templates = document.querySelectorAll(
    'script[type="text/x-handlebars-template"]'
);

Array.prototype.slice.call(templates).forEach(function(script) {
    Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
});

///////////////////////////////

$("#plantation").on("click", function() {
    $(".content").css("display", "block");
    $(".images-container").css("display", "flex");
    $(".content-text").html(loadDataPlant);
});

$("#pranic").on("click", function() {
    $(".content").css("display", "block");
    $(".images-container").css("display", "none");
    $(".content-text").html(loadDataPranic);
});

function loadDataPlant() {
    var html = "";
    html += "<h1>Plantation Project</h1>";
    html +=
        "<p>While in India in April, a time of the year where the sweltering heat is almost unbearable (45°), I noticed there were a lot of empty spaces outside many homes in my village. I decided to walk around and ask my neighbors if they were willing to plant a few trees in their yards, if I were to donate plants that bore fruits or flowers, which would be of use to them. They readily agreed and that was the inception of this project. So far I have donated 9000 Lemon, Jasmine, Mango,Custard Apple, Guava and some other varieties in 12 villages. The project is simple: I find a volunteer in the target village who would distribute the plants to every villager with space and willingness to plant them. I then order the saplings from a regional wholesale plantation to be delivered to the volunteer.</p>";
    html +=
        "<p>So far, I have funded the project with my savings. With additional funds I can scale up the plant donations exponentially. I invite you all to join me on this quest. With every yoga session you do with us, you help in making the planet just a little greener. 10% of what you pay for the class or a healing session goes towards Plantations. Alternatively you can purchase 400 plant donations for 100€ or 40 plant donations for 10€.</p>";
    html +=
        "<p>Together we can help beat pollution, fight Co2 levels, invite rains, nurture unused land and ultimately provide fruits to the villagers.</p>";
    return html;
}

function loadDataPranic() {
    var html = "";
    html += "<h1>Pranic Healing</h1>";
    html +=
        "<p>Pranic Healing® is not intended to replace conventional medicine, but rather to complement it. Pranic Healing® is a highly developed system of energy based healing techniques that utilizes 'prana' to balance, harmonize and transform the body's energy processes. 'Prana' is a Sanskrit word that means 'life-force'. This invisible bioenergy or vital energy keeps the body alive and maintains a state of good health. In acupuncture, the Chinese refer to this subtle energy as 'Chi'.</p>";
    html +=
        "<p>Pranic Healing® is a simple, powerful and effective no-touch energy healing technique. It is based on the fundamental principle that the body is a 'self-repairing' living entity that possesses the innate ability to heal itself. Pranic Healing® works on the principle that the healing process is accelerated by increasing the life force or vital energy on the affected part of the physical body.</p>";
    html +=
        "<p>GrandMaster Choa Kok Sui, modern founder of Pranic Healing®, developed Pranic Healing over a 20 year period using experimentation and evidence-based research.</p>";
    html +=
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/I6bdx7zM9bw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    return html;
}

var images = [
    "./assets/gallery/001.jpg",
    "./assets/gallery/002.jpg",
    "./assets/gallery/003.jpg",
    "./assets/gallery/004.jpg",
    "./assets/gallery/005.jpg",
    "./assets/gallery/006.jpg",
    "./assets/gallery/007.jpg",
    "./assets/gallery/008.jpg",
    "./assets/gallery/009.jpg",
    "./assets/gallery/010.jpg",
    "./assets/gallery/011.jpg",
    "./assets/gallery/012.jpg",
    "./assets/gallery/013.jpg",
    "./assets/gallery/014.jpg",
    "./assets/gallery/015.jpg",
    "./assets/gallery/016.jpg",
    "./assets/gallery/017.jpg",
    "./assets/gallery/018.jpg",
    "./assets/gallery/019.jpg",
    "./assets/gallery/020.jpg",
    "./assets/gallery/021.jpg",
    "./assets/gallery/022.jpg",
    "./assets/gallery/023.jpg",
    "./assets/gallery/024.jpg",
    "./assets/gallery/025.jpg",
    "./assets/gallery/026.jpg",
    "./assets/gallery/027.jpg",
    "./assets/gallery/028.jpg",
    "./assets/gallery/029.jpg",
    "./assets/gallery/030.jpg",
    "./assets/gallery/031.jpg",
    "./assets/gallery/032.jpg",
    "./assets/gallery/033.jpg",
    "./assets/gallery/034.jpg"
];

var imagesContainer = document.querySelector(".images-container");
imagesContainer.innerHTML = Handlebars.templates.images({
    images: images
});
