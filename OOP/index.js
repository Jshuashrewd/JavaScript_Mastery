
// // Factory Function
// function creatCirlce(radius) {
//     return {
//         radius,
//         draw : function () {
//             console.log("draw");
//         }
//     };
// }

// const circle = creatCirlce(1);
// circle.draw();

//Constructor Function, Abstraction
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocaion = function () {
        return defaultLocation;
    }

    this.draw = function () {
        console.log("draw");
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error("Invalid location.");
            defaultLocation = value;
        }
    })
}

const secondCircle = new Circle(1);
secondCircle.defaultLocation = 1;
secondCircle.draw();

//Iteration
// for (let key in secondCircle) {
//     console.log(key, circle[key]);
// }