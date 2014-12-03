var drawing = function (p5) {
    var hintImage, skyImage, stars = [];
    p5.setup = function () {
        p5.createCanvas(1024, 768);
        p5.noCursor();
        p5.noStroke();
        hintImage = p5.loadImage("/media/logo-clusta.jpg");
    };
    p5.draw = function () {
        p5.background(0);
        var position = p5.createVector(random(hintImage.width), random(hintImage.height));
    };
};
var canvas = new p5(drawing);
//# sourceMappingURL=app.combined.js.map