enum ShapeKind {
    Circle,
    Square
}

const myShape = ShapeKind.Circle;


interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

const circle1: Circle = {
    radius: 2,
    kind: 0,
}

enum StatusCode {
    ERROR = 500,
    NOT_FOUND = 505,
    NOT_AUTH = 403,
}

enum Grades {
    Junior = 'junior',
    Middle = 'middle',
    Senior = 'senior',
}


const dev2: Dev = {
    level: Grades.Junior,
    login: 'michey',
    skills: ['HTML', 'CSS', 'JS'],
}

function upGrade(user: { level: Grades }) {
    if (user.level === 'junior') {
        user.level = Grades.Middle;
    } else if (user.level === 'middle') {
        user.level = Grades.Senior;
    }

}