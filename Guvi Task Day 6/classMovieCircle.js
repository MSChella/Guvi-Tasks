//Question (1) The class Movie is stated below. An instance of class Movie represents a film. 
// This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments,
//  and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies
//  in the input array with a rating of "PG". You may assume the input array is full of Movie instances.
//   The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”,
//  and the rating “PG­13”


class Movie {

    constructor(title, studio, rating) {

        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(movies) {

        return movies.filter(movie => movie.rating === "PG");
    }
}

const movieInst = new Movie("Casino Royale", "Eon Productions", "PG13");

const movieArr = [

    new Movie("Jurasic Park", "Warner Bros", "PG"),
    new Movie("Men in Black", "Universal Pic", "PG13"),
    new Movie("MASK", "Paramount", "PG13"),
    new Movie("Ratatouile", "Walt Disney", "PG"),
    new Movie("Hangover", "MGM", "R")
];

const pgMovies = Movie.getPG(movieArr);
console.log(movieInst);
console.log(pgMovies);

//Question (2).Convert the UML diagram to Javascript class. - use number for double
//        Circle
// -radius:double = 1.0
// -color:String = "red"
// +Circle()
// +Circle(radius:double)
// +Circle(radius: double, color: String)
// +getRadius(): double
// +setRadius (radius:double):void
// +getColor(): String
// +setColor(color: String):void
// +toString(): String
// +getArea(): double
// +getCircumference(): double
// "Circle[radius=?, color=?]"

class Circle {
    // Default values for radius and color
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    // Getter for radius
    getRadius() {
        return this.radius;
    }

    // Setter for radius
    setRadius(radius) {
        this.radius = radius;
    }

    // Getter for color
    getColor() {
        return this.color;
    }

    // Setter for color
    setColor(color) {
        this.color = color;
    }

    // Method to get a string representation of the Circle
    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    // Method to calculate the area of the Circle
    getArea() {
        return Math.PI * this.radius ** 2;
    }

    // Method to calculate the circumference of the Circle
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
const myCircle = new Circle(2.5, "blue");
console.log(myCircle.toString()); // Output: Circle[radius=2.5, color=blue]
console.log(myCircle.getArea()); // Output: Some calculated area value
console.log(myCircle.getCircumference()); // Output: Some calculated circumference value






// Question (3). Write a person class to hold all the details

class Person {

    constructor(name, age, nationality) {
        this.name = name,
            this.age = age,
            this.nationality = nationality

    }
}

const somePerson = new Person("Ravi", "25", "Indian");

console.log(somePerson);