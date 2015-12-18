
var slider = function(container) {
    this.images = [];
    this.currentImage = 0;
    for (i = 0; i < container.childElementCount; i++) {
        this.images.push(container.children[i]);
        this.images[i].style.display = "none";
    }
    var nextSlide = function() {
        for (var i = 0; i < this.images.length; i++) {
            this.images[i].style.display = "none";
        }
        this.images[this.currentImage].style.display = "block";
        this.currentImage++;
        if (this.currentImage >= this.images.length) {
            this.currentImage = 0;
        }
        window.setTimeout(nextSlide.bind(this), 3000);
    };

    nextSlide.call(this);
};
