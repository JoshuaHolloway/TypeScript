// > tsc --watch index.ts
// ---------- SPREAD OPERATOR ----------
// We can separate values in an array into
// attributs in a function
function theSum(x, y, z) {
    document.write('Sum : ' + (x + y + z) + '<br />');
}
var args = [4, 5, 6];
theSum.apply(void 0, args);
