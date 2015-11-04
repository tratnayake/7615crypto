var RS = "10101010110011011110111100010010"
var key = "000100100011010001010110011110001001101010111100"


var DESvalues = [32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,10,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1];

var output = "";

for (var i = 0; i < DESvalues.length; i++) {
    var output = output + RS[DESvalues[i] - 1];
}
console.log ("*** OUTPUT FROM EBOX ***")
console.log("Input is " + RS + " with length " + RS.length )
console.log("Output is " + output + "with length" + output.length)
console.log("Hex String is " + convertToHex(output));
console.log("\n")

for (var i = 0; i < output.length; i++) {
    output[i] = output[i] ^ key[i]
}
console.log("***OUTPUT AFTER XOR ***")
console.log("OUT: " + output)
console.log("KEY: " + key)
console.log ("XOR'd is " + output)
console.log("XOR'd Hex String is " + convertToHex(output))
console.log("\n")

//Split the output into 6 bit chunks
var parts = output.match(/.{1,6}/g);
for (var i = 0; i < parts.length; i++) {
    console.log("X Axis = " + parts[i][0] + "yyyy" + parts[i][5] + " Y Axis = x" + parts[i][1] + parts[i][2] + parts[i][3] + parts[i][4] + "x");
}



//Helper functions
 
//Convert to hex
//Takes in a binary string
function convertToHex(binary){
    var parts = binary.match(/.{1,4}/g);
    var hexString ="";
    //console.log(parts)
    for (var i = 0; i < parts.length; i++) {
        //console.log(parseInt(parts[i],2));
        hexString = hexString + parseInt(parts[i],2).toString(16);
    }
    //console.log(hexString)
    return hexString
}