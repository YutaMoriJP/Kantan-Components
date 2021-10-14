//returns an array with numbers with their floor
const getFloor = (...rest: number[]) => rest.map(Math.floor);
//calculates actual available space from top, right, bottom, and left
const calculateActualRect = (rect: DOMRect, w: number, h: number) => {
  const { left: l, right: r, top: t, bottom: b } = rect;
  //gets the floor of all numbers
  const [left, right, top, bottom, width, height] = getFloor(l, r, t, b, w, h);
  //calculates actual space available on the right side
  const calcualtedRight = width - right;
  //calculates actual space available below
  const calculatedBottom = height - bottom;
  return {
    top,
    right: calcualtedRight,
    bottom: calculatedBottom,
    left,
  };
};
//returns which side has the most space available, if left:500px is the highest integer
//then getPlacement returns left

//NEEDS TO BE IMPROVED!
const getPlacement = ({
  top,
  right,
  bottom,
  left,
}: {
  top: number;
  right: number;
  bottom: number;
  left: number;
}) => {
  if (100 > left && right > 150) return "right";
  if (100 > right && left > 150) return "left";
  if (bottom > 150 && right > 150 && left > 150) return "bottom";
  if (top > 150 && right > 150 && left > 150) return "top";
  if (right > 200 && top > 100 && bottom > 100) return "right";
  if (left > 200 && top > 100 && bottom > 100) return "left";
  const formattedRect = [
    ["top", top],
    ["right", right],
    ["bottom", bottom],
    ["left", left],
  ];
  return formattedRect.sort(([_, a], [__, b]) => +b - +a)[0][0];
};
//returns placement like right, top, bottom, or left
export const calculatePlacement = (
  rect: DOMRect,
  width: number,
  height: number
) => {
  const adjustedSpace = calculateActualRect(rect, width, height);
  return getPlacement(adjustedSpace);
};
