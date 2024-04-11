type Square = {
  name: string;
  sideLength: number;
};
type Circle = {
  name: string;
  radius: number;
};

function calculateArea(type: string, data: Square & Circle) {
  if (type == "square") {
    // tinsh ddienj ticsh hinhf vuoong
    return data.sideLength * data.sideLength;
  } else {
    // dien tich ht
    return data.radius * data.radius * 3.14;
  }
}

let square: Square & Circle = {
  name: "square",
  sideLength: 3,
  radius: 10,
};
console.log(calculateArea("Circle", square));
