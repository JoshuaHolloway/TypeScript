// > tsc --watch index.ts
var _a;
// ---------- DESTRUCTORING ----------
// You can assign multiple values on one line
var randVals = { x: 1, y: 2, z: 3 };
var x = randVals.x, y = randVals.y, z = randVals.z;
document.write(x + y + z + '<br />');
// Do the same with arrays
_a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
document.write('Switch : ' + x + y + z + '<br />');
