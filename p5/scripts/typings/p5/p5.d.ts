declare module _p5 {

    export interface instance {
        new (s: (context: context) => void);
    }

    export class context {
        setup(): any;
        draw(): any;

        createCanvas(width: number, height: number): void;
        noCursor(): void;
        noStroke(): void;

        loadImage(image: string): Image;
        createVector(x: number, y: number): void;

        background(grayValue: number): void;
        background(color: string): void;
        background(red: number, green: number, blue: number, opacity?: number): void;
    }

    interface Image {
        width: number;
        height: number;
        pixels: number[];
        loadPixels(): number[];
    }

}

declare var p5: _p5.instance;