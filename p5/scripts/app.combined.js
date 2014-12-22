var Color = (function () {
    function Color(red, green, blue, alpha) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
    return Color;
})();
var drawing = function (sketch) {
    var limit = 3000;
    var hintImage;
    var particles = [];
    var inactiveFill = new Color(60, 60, 60, 0);
    var inactiveStroke = new Color(120, 120, 120, 0.5);
    var activeFill = new Color(0, 0, 255, 1);
    var activeStroke = new Color(0, 0, 120, 20);
    sketch.setup = function () {
        sketch.createCanvas(300, 331);
        sketch.noCursor();
        sketch.noStroke();
        hintImage = sketch.loadImage("/media/logo-clusta.jpg");
    };
    sketch.draw = function () {
        sketch.background(255);
        var position = sketch.createVector(sketch.random(hintImage.width), sketch.random(hintImage.height));
        sketch.ellipse(position.x, position.y, 8, 8);
        var pixelProperties = constructPixelProperties();
        var particle = new Particle(position, pixelProperties.target, pixelProperties.rgbaFill, pixelProperties.rgbaStroke);
        particles.push(particle);
        if (particles.length > limit)
            particles.shift();
        for (var i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
    };
    function constructPixelProperties() {
        var x, y, colorFill = inactiveFill, colorStroke = inactiveStroke;
        for (var i = 0; i < 15; i++) {
            x = sketch.floor(sketch.random(hintImage.width));
            y = sketch.floor(sketch.random(hintImage.height));
            if (sketch.red(hintImage.get(x, y)) < 255) {
                colorFill = activeFill;
                colorStroke = activeStroke;
                break;
            }
        }
        return {
            target: sketch.createVector(x, y),
            rgbaFill: colorFill,
            rgbaStroke: colorStroke
        };
    }
    function Particle(position, target, rgbaFill, rgbaStroke) {
        this.position = position;
        this.target = target;
        this.diameter = sketch.random(1, 5);
        this.fill = {
            r: rgbaFill.red,
            g: rgbaFill.green,
            b: rgbaFill.blue,
            a: rgbaFill.alpha
        };
        this.stroke = {
            r: rgbaStroke.red,
            g: rgbaStroke.green,
            b: rgbaStroke.blue,
            a: rgbaStroke.alpha
        };
    }
    Particle.prototype.update = function () {
        this.position = p5.Vector.lerp(this.position, this.target, 0.04);
    };
    Particle.prototype.draw = function () {
        var alpha = sketch.noise(this.target.x, this.target.y, sketch.millis() / 1000.0);
        sketch.fill(this.fill.r, this.fill.g, this.fill.b, alpha * 255);
        var s = particles[particles.length - 1];
        sketch.stroke(this.stroke.r, this.stroke.g, this.stroke.b, this.stroke.a);
        sketch.line(this.position.x, this.position.y, s.position.x, sketch.random(hintImage.width));
        //sketch.stroke(this.stroke.r, this.stroke.g, this.stroke.b, alpha * 255);
        sketch.noStroke();
        sketch.ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
    };
};
var canvas = new p5(drawing);
//# sourceMappingURL=app.combined.js.map