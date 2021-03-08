function Image(image, name, tags) {
    this.image = image; 
    this.name = name;
    this.tags = tags;
    this.display = function() {

        var container = $("<div>")
        this.tags.forEach(function(tag){
            container.addClass(tag)

        })

        var imgString = "";
        imgString += "<img src=>" + this.image + "</img>";
        imgString += "<name>" + this.name + "</name>";

        container.html(imgString)
        $(".images").prepend(container)
        // $(".name").prepend(container)
    }

}

var images1 = [
    new Image("<img src=imgs/2007.jpg>", "2007", ["pre-2018", "butterscotch"]),
    new Image("<img src=imgs/angel.jpg>", "Angel", ["post-2018", "butterscotch"]),
    new Image("<img src=imgs/bottom_heavy.jpg>", "Bottom Heavy", ["post-2018", "butterscotch", "filter"]),
    new Image("<img src=imgs/brothers.jpg>", "Brothers", ["post-2018", "butterscotch", "peanut", "filter"]),
    new Image("<img src=imgs/clean_toes.jpg>", "Clean Toes", ["2021", "butterscotch"]),
    new Image("<img src=imgs/forest_man.jpg>", "Forest Man", ["post-2018", "butterscotch", "nature"]),
    new Image("<img src=imgs/late_night_bathroom_party.jpg>", "Late Night Bathroom Party", ["post-2018", "butterscotch", "peanut"]),
    new Image("<img src=imgs/majestic.jpg>", "Majestic", ["pre-2018", "butterscotch", "filter", "nature"]),
    new Image("<img src=imgs/rare_cuddle.jpg>", "Rare Cuddle", ["2021", "butterscotch", "peanut"]),
    new Image("<img src=imgs/vibes.jpg>", "Vibes", ["post-2018", "filter", "butterscotch"]),
    new Image("<img src=imgs/foot.jpg>", "Foot", ["pre-2018", "butterscotch", "filter"]),
    new Image("<img src=imgs/friends.jpg>", "Friends(Sometimes)", ["2021", "butterscotch", "peanut", "filter"])
]

var taglist = []
images1.forEach(function(image, name){
    image.display();
    // name.display();
    image.tags.forEach(function(tag){

        if(!taglist.includes(tag)){

            taglist.push(tag);
        $(".buttons").prepend("<button class='filter' id='"  + tag + " '>" + tag + "</button>")
        }
    })
})


console.log(taglist)

$(".filter").on("click", function() {
    var tag = $(this).text()
    $("." + tag).fadeIn();
    $("div > div").not("." + tag).hide();
    $(".filter").removeClass("active")

    $(this).addClass("active")
})