declare module p5 {

    export interface instance {
        new (s: (context: context) => void);
        Vector : Vector;
    }

    export interface context {

        setup(): any;
        draw(): any;

        createCanvas(width: number, height: number): void;
        noCursor(): void;
        noStroke(): void;

        loadImage(image: string): Image;
        createVector(x: number, y: number): Vector;

        random(min: number, max?: number): number;

        background(grayValue: number): void;
        background(color: string): void;
        background(red: number, green: number, blue: number, opacity?: number): void;
        background(hue: number, saturation: string[], brightness: string[], opacity: string[]): void;

        //Calculation
        floor(n: number): number;

        //Random
        random(min: number, max: number): number;

        //Shape
        ellipse(x: number, y: number, width: number, height: number): void;

        //Color
        red(obj: any): number;

        //Noise
        noise();
    }

    export interface Image {
        width: number;
        height: number;
        pixels: number[];
        loadPixels(): number[];
        get(): any;
        get(x: number, y: number): any;
    }

    export interface Vector {
        x: number;
        y: number;
        z: number;
        lerp(x: any, y?: any, z?: any, amt?: any): void;
    }
}

declare var p5: p5.instance;
