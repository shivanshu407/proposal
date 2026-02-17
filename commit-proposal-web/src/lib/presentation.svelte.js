export class PresentationState {
    currentSlide = $state(0);
    totalSlides = $state(0);

    constructor(total) {
        this.totalSlides = total;
    }

    next() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
        }
    }

    prev() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
        }
    }

    goTo(index) {
        if (index >= 0 && index < this.totalSlides) {
            this.currentSlide = index;
        }
    }
}

export const presentation = new PresentationState(5); // 5 slides total
