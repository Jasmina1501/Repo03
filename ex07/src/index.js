function main () {
    var studlyCapVarCamelCase;
    var properCamelCase;
    var titleCaseOverCamelCase;

    studlyCapVarCamelCase = 10;
    properCamelCase = "A String";
    titleCaseOverCamelCase = 9000;

    return {
        studlyCapVarCamelCase,
        properCamelCase,
        titleCaseOverCamelCase
    }
}
console.log(main());
module.exports=main;