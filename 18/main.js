var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesTovisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesTovisit);
console.log("Alphabetical order:", __spreadArray([], countriesTovisit, true).sort());
console.log("Still in Original Order:", countriesTovisit);
console.log("Reverse Order:", __spreadArray([], countriesTovisit, true).reverse());
console.log("still in original order:", countriesTovisit);
console.log("Original Array Reversed:", countriesTovisit.reverse());
console.log("Back to original order:", countriesTovisit.reverse());
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());
console.log("Original Arry Reversed Again:", countriesTovisit.reverse());
