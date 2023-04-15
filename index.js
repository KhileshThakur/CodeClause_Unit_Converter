{
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname) {
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab")
    }
}



let length = document.getElementById("length")
let temperature = document.getElementById("temperature")
let area = document.getElementById("area")
let volume = document.getElementById("volume")
let weight = document.getElementById("weight")
let time = document.getElementById("time")

let lengthc = document.getElementById("length")
let temperaturec = document.getElementById("temperature")
let areac = document.getElementById("area")
let volumec = document.getElementById("volume")
let weightc = document.getElementById("weight")
let timec = document.getElementById("time")


// for length 

if (length == lengthc) {

    let input = document.getElementById('input');
    let result = document.getElementById('result');
    let inputType = document.getElementById('inputType');
    let resultType = document.getElementById('resultType');
    let inputTypeValue, resultTypeValue;

    input.addEventListener("keyup", myResult);
    inputType.addEventListener("change", myResult);
    resultType.addEventListener("change", myResult);

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    function myResult() {
        inputTypeValue = inputType.value;
        resultTypeValue = resultType.value;
        // meter to 
        if (inputTypeValue === "meter" && resultTypeValue === "meter") {
            result.value = input.value;
        }
        else if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {
            result.value = Number(input.value) * 100;
        }
        else if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
            result.value = Number(input.value) * 0.001;
        }
        else if (inputTypeValue === "meter" && resultTypeValue === "milimeter") {
            result.value = Number(input.value) * 1000;
        }
        else if (inputTypeValue === "meter" && resultTypeValue === "micrometer") {
            result.value = Number(input.value) * 1000000;
        }
        else if (inputTypeValue === "meter" && resultTypeValue === "nanometer") {
            result.value = Number(input.value) * 1000000000;
        }
        else if (inputTypeValue === "meter" && resultTypeValue === "mile") {
            result.value = Number(input.value) / 1609;
        }
        else if (inputTypeValue === "meter" && resultTypeValue === "yard") {
            result.value = Number(input.value) * 1.094;
        }
        else if (inputTypeValue === "meter" && resultTypeValue === "foot") {
            result.value = Number(input.value) * 3.281;
        }
        else if (inputTypeValue === "meter" && resultTypeValue === "inch") {
            result.value = Number(input.value) * 39.37;
        }
        // kilometer to 
        if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer") {
            result.value = input.value;
        } else if (inputTypeValue === "kilometer" && resultTypeValue === "centimeter") {
            result.value = Number(input.value) * 100000;
        }
        else if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
            result.value = Number(input.value) * 1000;
        }
        else if (inputTypeValue === "kilometer" && resultTypeValue === "milimeter") {
            result.value = Number(input.value) * 1000000;
        }
        else if (inputTypeValue === "kilometer" && resultTypeValue === "micrometer") {
            result.value = Number(input.value) * 1000000000;
        }
        else if (inputTypeValue === "kilometer" && resultTypeValue === "nanometer") {
            result.value = Number(input.value) * 1000000000000;
        }
        else if (inputTypeValue === "kilometer" && resultTypeValue === "mile") {
            result.value = Number(input.value) / 1.609;
        }
        else if (inputTypeValue === "kilometer" && resultTypeValue === "yard") {
            result.value = Number(input.value) * 1094;
        }
        else if (inputTypeValue === "kilometer" && resultTypeValue === "foot") {
            result.value = Number(input.value) * 3281;
        }
        else if (inputTypeValue === "kilometer" && resultTypeValue === "inch") {
            result.value = Number(input.value) * 39370;
        }
        // centimeter to 
        if (inputTypeValue === "centimeter" && resultTypeValue === "centimeter") {
            result.value = input.value;
        } else if (inputTypeValue === "centimeter" && resultTypeValue === "kilometer") {
            result.value = Number(input.value) / 100000;
        }
        else if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {
            result.value = Number(input.value) / 100;
        }
        else if (inputTypeValue === "centimeter" && resultTypeValue === "milimeter") {
            result.value = Number(input.value) * 10;
        }
        else if (inputTypeValue === "centimeter" && resultTypeValue === "micrometer") {
            result.value = Number(input.value) * 10000;
        }
        else if (inputTypeValue === "centimeter" && resultTypeValue === "nanometer") {
            result.value = Number(input.value) * 10000000;
        }
        else if (inputTypeValue === "centimeter" && resultTypeValue === "mile") {
            result.value = Number(input.value) / 160934.4;
        }
        else if (inputTypeValue === "centimeter" && resultTypeValue === "yard") {
            result.value = Number(input.value) / 91.44;
        }
        else if (inputTypeValue === "centimeter" && resultTypeValue === "foot") {
            result.value = Number(input.value) / 30.48;
        }
        else if (inputTypeValue === "centimeter" && resultTypeValue === "inch") {
            result.value = Number(input.value) / 2.54;
        }


        // milimeter to 
        if (inputTypeValue === "milimeter" && resultTypeValue === "milimeter") {
            result.value = input.value;
        } else if (inputTypeValue === "milimeter" && resultTypeValue === "centimeter") {
            result.value = Number(input.value) * 0.1;
        }
        else if (inputTypeValue === "milimeter" && resultTypeValue === "meter") {
            result.value = Number(input.value) * 0.001;
        }
        else if (inputTypeValue === "milimeter" && resultTypeValue === "kilometer") {
            result.value = Number(input.value) * 0.000001;
        }
        else if (inputTypeValue === "milimeter" && resultTypeValue === "micrometer") {
            result.value = Number(input.value) * 1000;
        }
        else if (inputTypeValue === "milimeter" && resultTypeValue === "nanometer") {
            result.value = Number(input.value) * 1000000;
        }
        else if (inputTypeValue === "milimeter" && resultTypeValue === "mile") {
            result.value = Number(input.value) * 0.00000062137;
        }
        else if (inputTypeValue === "milimeter" && resultTypeValue === "yard") {
            result.value = Number(input.value) * 0.0010936;
        }
        else if (inputTypeValue === "milimeter" && resultTypeValue === "foot") {
            result.value = Number(input.value) * 0.0032808;
        }
        else if (inputTypeValue === "milimeter" && resultTypeValue === "inch") {
            result.value = Number(input.value) * 0.03937;
        }
        // micrometer to 
        if (inputTypeValue === "micrometer" && resultTypeValue === "micrometer") {
            result.value = input.value;
        } else if (inputTypeValue === "micrometer" && resultTypeValue === "centimeter") {
            result.value = Number(input.value) / 10000;
        }
        else if (inputTypeValue === "micrometer" && resultTypeValue === "meter") {
            result.value = Number(input.value) / 1000000;
        }
        else if (inputTypeValue === "micrometer" && resultTypeValue === "milimeter") {
            result.value = Number(input.value) / 1000;
        }
        else if (inputTypeValue === "micrometer" && resultTypeValue === "nanometer") {
            result.value = Number(input.value) * 1000;
        }
        else if (inputTypeValue === "micrometer" && resultTypeValue === "kilometer") {
            result.value = Number(input.value) / 1000000000;
        }
        else if (inputTypeValue === "micrometer" && resultTypeValue === "mile") {
            result.value = Number(input.value) / 1609000000;
        }
        else if (inputTypeValue === "micrometer" && resultTypeValue === "yard") {
            result.value = Number(input.value) / 914400;
        }
        else if (inputTypeValue === "micrometer" && resultTypeValue === "foot") {
            result.value = Number(input.value) / 304800;
        }
        else if (inputTypeValue === "micrometer" && resultTypeValue === "inch") {
            result.value = Number(input.value) / 25400;
        }

        // nonometer to 
        if (inputTypeValue === "nanometer" && resultTypeValue === "nanometer") {
            result.value = input.value;
        } else if (inputTypeValue === "nanometer" && resultTypeValue === "centimeter") {
            result.value = Number(input.value) / 10000000;
        }
        else if (inputTypeValue === "nanometer" && resultTypeValue === "meter") {
            result.value = Number(input.value) / 1000000000;
        }
        else if (inputTypeValue === "nanometer" && resultTypeValue === "milimeter") {
            result.value = Number(input.value) / 1000000;
        }
        else if (inputTypeValue === "nanometer" && resultTypeValue === "micrometer") {
            result.value = Number(input.value) / 1000;
        }
        else if (inputTypeValue === "nanometer" && resultTypeValue === "kilometer") {
            result.value = Number(input.value) / 1000000000000;
        }
        else if (inputTypeValue === "nanometer" && resultTypeValue === "mile") {
            result.value = Number(input.value) / 1609344000;
        }
        else if (inputTypeValue === "nanometer" && resultTypeValue === "yard") {
            result.value = Number(input.value) / 914400000;
        }
        else if (inputTypeValue === "nanometer" && resultTypeValue === "foot") {
            result.value = Number(input.value) / 304800000;
        }
        else if (inputTypeValue === "nanometer" && resultTypeValue === "inch") {
            result.value = Number(input.value) / 25400000;
        }

        // mile to 

        if (inputTypeValue === "mile" && resultTypeValue === "mile") {
            result.value = input.value;
        } else if (inputTypeValue === "mile" && resultTypeValue === "centimeter") {
            result.value = Number(input.value) * 160934.4;
        }
        else if (inputTypeValue === "mile" && resultTypeValue === "meter") {
            result.value = Number(input.value) * 1609.344;
        }
        else if (inputTypeValue === "mile" && resultTypeValue === "milimeter") {
            result.value = Number(input.value) * 1609344;
        }
        else if (inputTypeValue === "mile" && resultTypeValue === "micrometer") {
            result.value = Number(input.value) * 1609344000;
        }
        else if (inputTypeValue === "mile" && resultTypeValue === "nanometer") {
            result.value = Number(input.value) * 1609344000000;
        }
        else if (inputTypeValue === "mile" && resultTypeValue === "kilometer") {
            result.value = Number(input.value) * 1.609;
        }
        else if (inputTypeValue === "mile" && resultTypeValue === "yard") {
            result.value = Number(input.value) * 1760;
        }
        else if (inputTypeValue === "mile" && resultTypeValue === "foot") {
            result.value = Number(input.value) * 5280;
        }
        else if (inputTypeValue === "mile" && resultTypeValue === "inch") {
            result.value = Number(input.value) * 63360;
        }

        // yard to 
        if (inputTypeValue === "yard" && resultTypeValue === "yard") {
            result.value = input.value;
        } else if (inputTypeValue === "yard" && resultTypeValue === "centimeter") {
            result.value = Number(input.value) * 91.44;
        }
        else if (inputTypeValue === "yard" && resultTypeValue === "meter") {
            result.value = Number(input.value) * 0.9144;
        }
        else if (inputTypeValue === "yard" && resultTypeValue === "milimeter") {
            result.value = Number(input.value) * 914.4;
        }
        else if (inputTypeValue === "yard" && resultTypeValue === "micrometer") {
            result.value = Number(input.value) * 914400;
        }
        else if (inputTypeValue === "yard" && resultTypeValue === "nanometer") {
            result.value = Number(input.value) * 914400000;
        }
        else if (inputTypeValue === "yard" && resultTypeValue === "mile") {
            result.value = Number(input.value) / 1760;
        }
        else if (inputTypeValue === "yard" && resultTypeValue === "kilometer") {
            result.value = Number(input.value) * 0.0009144;
        }
        else if (inputTypeValue === "yard" && resultTypeValue === "foot") {
            result.value = Number(input.value) * 3;
        }
        else if (inputTypeValue === "yard" && resultTypeValue === "inch") {
            result.value = Number(input.value) * 36;
        }
        // foot to 

        if (inputTypeValue === "foot" && resultTypeValue === "foot") {
            result.value = input.value;
        } else if (inputTypeValue === "foot" && resultTypeValue === "centimeter") {
            result.value = Number(input.value) * 30.48;
        }
        else if (inputTypeValue === "foot" && resultTypeValue === "meter") {
            result.value = Number(input.value) * 0.3048;
        }
        else if (inputTypeValue === "foot" && resultTypeValue === "milimeter") {
            result.value = Number(input.value) * 304.8;
        }
        else if (inputTypeValue === "foot" && resultTypeValue === "micrometer") {
            result.value = Number(input.value) * 304800;
        }
        else if (inputTypeValue === "foot" && resultTypeValue === "nanometer") {
            result.value = Number(input.value) * 3.048e+8;
        }
        else if (inputTypeValue === "foot" && resultTypeValue === "mile") {
            result.value = Number(input.value) / 5280;
        }
        else if (inputTypeValue === "foot" && resultTypeValue === "yard") {
            result.value = Number(input.value) * 0.33333;
        }
        else if (inputTypeValue === "foot" && resultTypeValue === "kilometer") {
            result.value = Number(input.value) * 0.0003048;
        }
        else if (inputTypeValue === "foot" && resultTypeValue === "inch") {
            result.value = Number(input.value) * 12;
        }

        // inch to     
        if (inputTypeValue === "inch" && resultTypeValue === "inch") {
            result.value = input.value;
        } else if (inputTypeValue === "inch" && resultTypeValue === "centimeter") {
            result.value = Number(input.value) * 2.54;
        }
        else if (inputTypeValue === "inch" && resultTypeValue === "meter") {
            result.value = Number(input.value) * 0.0254;
        }
        else if (inputTypeValue === "inch" && resultTypeValue === "milimeter") {
            result.value = Number(input.value) * 25.4;
        }
        else if (inputTypeValue === "inch" && resultTypeValue === "micrometer") {
            result.value = Number(input.value) * 25400;
        }
        else if (inputTypeValue === "inch" && resultTypeValue === "nanometer") {
            result.value = Number(input.value) * 25400000;
        }
        else if (inputTypeValue === "inch" && resultTypeValue === "mile") {
            result.value = Number(input.value) / 63360;
        }
        else if (inputTypeValue === "inch" && resultTypeValue === "yard") {
            result.value = Number(input.value) / 36;
        }
        else if (inputTypeValue === "inch" && resultTypeValue === "foot") {
            result.value = Number(input.value) / 12;
        }
        else if (inputTypeValue === "inch" && resultTypeValue === "kilometer") {
            result.value = Number(input.value) * 0.0000254;
        }

    }
}

// for temperature

// for temperature
if (temperature == temperaturec) {
    let inputtemp = document.getElementById('inputtemp');
    let resulttemp = document.getElementById('resulttemp');
    let inputTypetemp = document.getElementById('inputTypetemp');
    let resultTypetemp = document.getElementById('resultTypetemp');
    let inputTypeValuetemp, resultTypeValuetemp;

    inputtemp.addEventListener("keyup", myResult);
    inputTypetemp.addEventListener("change", myResult);
    resultTypetemp.addEventListener("change", myResult);

    inputTypeValuetemp = inputTypetemp.value;
    resultTypeValuetemp = resultTypetemp.value;

    function myResult() {
        inputTypeValuetemp = inputTypetemp.value;
        resultTypeValuetemp = resultTypetemp.value;

        if (inputTypeValuetemp === "celsius" && resultTypeValuetemp === "kelvin") {
            resulttemp.value = inputtemp.value + 273.15;
        }
        else if (inputTypeValuetemp === "celsius" && resultTypeValuetemp === "faranheit") {
            resulttemp.value = Number((inputtemp.value * (9 / 5)) + 32);
        }
        else if (inputTypeValuetemp === "celsius" && resultTypeValuetemp === "celsius") {
            resulttemp.value = inputtemp.value;
        }

        if (inputTypeValuetemp === "faranheit" && resultTypeValuetemp === "celsius") {
            resulttemp.value = Number((inputtemp.value - 32) * (5 / 9));
        }
        else if (inputTypeValuetemp === "faranheit" && resultTypeValuetemp === "kelvin") {
            resulttemp.value = Number((inputtemp.value - 32) * (5 / 9) + 273.15);
        }
        else if (inputTypeValuetemp === "faranheit" && resultTypeValuetemp === "faranheit") {
            resulttemp.value = inputtemp.value;
        }

        if (inputTypeValuetemp === "kelvin" && resultTypeValuetemp === "celsius") {
            resulttemp.value = Number(inputtemp.value) - 273.15;
        }
        else if (inputTypeValuetemp === "kelvin" && resultTypeValuetemp === "faranheit") {
            resulttemp.value = Number((inputtemp.value - 273.15) * (9 / 5) + 32);
        }
        else if (inputTypeValuetemp === "kelvin" && resultTypeValuetemp === "kelvin") {
            resulttemp.value = Number(inputtemp.value);
        }
    }
}

if (area == areac) {

    // for area 

    var inputa = document.getElementById('inputa');
    var resulta = document.getElementById('resulta');
    var inputTypea = document.getElementById('inputTypea');
    var resultTypea = document.getElementById('resultTypea');
    var inputTypeValuea, resultTypeValuea;

    inputa.addEventListener("keyup", myResult);
    inputTypea.addEventListener("change", myResult);
    resultTypea.addEventListener("change", myResult);

    inputTypeValuea = inputTypea.value;
    resultTypeValuea = resultTypea.value;

    function myResult() {
        inputTypeValuea = inputTypea.value;
        resultTypeValuea = resultTypea.value;

        if (inputTypeValuea === "sqmeter" && resultTypeValuea === "sqmeter") {
            resulta.value = inputa.value;
        }
        else if (inputTypeValuea === "sqmeter" && resultTypeValuea === "sqkilometer") {
            resulta.value = Number(inputa.value) / 1000000;
        }
        else if (inputTypeValuea === "sqmeter" && resultTypeValuea === "sqcentimeter") {
            resulta.value = Number(inputa.value) * 10000;
        }
        else if (inputTypeValuea === "sqmeter" && resultTypeValuea === "sqmilimeter") {
            resulta.value = Number(inputa.value) * 1000000;
        }
        else if (inputTypeValuea === "sqmeter" && resultTypeValuea === "sqmicrometer") {
            resulta.value = Number(inputa.value) * 1000000000000;
        }
        else if (inputTypeValuea === "sqmeter" && resultTypeValuea === "hectare") {
            resulta.value = Number(inputa.value) / 10000;
        }
        else if (inputTypeValuea === "sqmeter" && resultTypeValuea === "sqmile") {
            resulta.value = Number(inputa.value) / 2590000;
        }
        else if (inputTypeValuea === "sqmeter" && resultTypeValuea === "sqyard") {
            resulta.value = Number(inputa.value) * 1.196;
        }
        else if (inputTypeValuea === "sqmeter" && resultTypeValuea === "sqfoot") {
            resulta.value = Number(inputa.value) * 10.764;
        }
        else if (inputTypeValuea === "sqmeter" && resultTypeValuea === "sqinch") {
            resulta.value = Number(inputa.value) * 1550;
        }
        else if (inputTypeValuea === "sqmeter" && resultTypeValuea === "acre") {
            resulta.value = Number(inputa.value) / 4047;
        }

        if (inputTypeValuea === "sqkilometer" && resultTypeValuea === "sqmeter") {
            resulta.value = Number(inputa.value) * 1000000;
        }
        else if (inputTypeValuea === "sqkilometer" && resultTypeValuea === "sqkilometer") {
            resulta.value = inputa.value;
        }
        else if (inputTypeValuea === "sqkilometer" && resultTypeValuea === "sqcentimeter") {
            resulta.value = Number(inputa.value) * 10000000000;
        }
        else if (inputTypeValuea === "sqkilometer" && resultTypeValuea === "sqmilimeter") {
            resulta.value = Number(inputa.value) * 1000000000000;
        }
        else if (inputTypeValuea === "sqkilometer" && resultTypeValuea === "sqmicrometer") {
            resulta.value = Number(inputa.value) * 1000000000000000000;
        }
        else if (inputTypeValuea === "sqkilometer" && resultTypeValuea === "hectare") {
            resulta.value = Number(inputa.value) * 10000;
        }
        else if (inputTypeValuea === "sqkilometer" && resultTypeValuea === "sqmile") {
            resulta.value = Number(inputa.value) * 0.386102;
        }
        else if (inputTypeValuea === "sqkilometer" && resultTypeValuea === "sqyard") {
            resulta.value = Number(inputa.value) * 1195990.0463;
        }
        else if (inputTypeValuea === "sqkilometer" && resultTypeValuea === "sqfoot") {
            resulta.value = Number(inputa.value) * 10763910.417;
        }
        else if (inputTypeValuea === "sqkilometer" && resultTypeValuea === "sqinch") {
            resulta.value = Number(inputa.value) * 1550000000;
        }
        else if (inputTypeValuea === "sqkilometer" && resultTypeValuea === "acre") {
            resulta.value = Number(inputa.value) * 247.105;
        }

        if (inputTypeValuea === "sqmilimeter" && resultTypeValuea === "sqmilimeter") {
            resulta.value = inputa.value;
        }
        else if (inputTypeValuea === "sqmilimeter" && resultTypeValuea === "sqmeter") {
            resulta.value = Number(inputa.value) / 1000000;
        }
        else if (inputTypeValuea === "sqmilimeter" && resultTypeValuea === "sqkilometer") {
            resulta.value = Number(inputa.value) / 1000000000000;
        }
        else if (inputTypeValuea === "sqmilimeter" && resultTypeValuea === "sqcentimeter") {
            resulta.value = Number(inputa.value) / 100;
        }
        else if (inputTypeValuea === "sqmilimeter" && resultTypeValuea === "sqmicrometer") {
            resulta.value = Number(inputa.value) * 1000000;
        }
        else if (inputTypeValuea === "sqmilimeter" && resultTypeValuea === "hectare") {
            resulta.value = Number(inputa.value) / 100000000;
        }
        else if (inputTypeValuea === "sqmilimeter" && resultTypeValuea === "sqmile") {
            resulta.value = Number(inputa.value) / 2590000000;
        }
        else if (inputTypeValuea === "sqmilimeter" && resultTypeValuea === "sqyard") {
            resulta.value = Number(inputa.value) / 836127;
        }
        else if (inputTypeValuea === "sqmilimeter" && resultTypeValuea === "sqfoot") {
            resulta.value = Number(inputa.value) / 92903;
        }
        else if (inputTypeValuea === "sqmilimeter" && resultTypeValuea === "sqinch") {
            resulta.value = Number(inputa.value) / 645.16;
        }
        else if (inputTypeValuea === "sqmilimeter" && resultTypeValuea === "acre") {
            resulta.value = Number(inputa.value) / 40468564.224;
        }

        if (inputTypeValuea === "sqcentimeter" && resultTypeValuea === "sqcentimeter") {
            resulta.value = inputa.value;
        }
        else if (inputTypeValuea === "sqcentimeter" && resultTypeValuea === "sqmeter") {
            resulta.value = Number(inputa.value) / 10000;
        }
        else if (inputTypeValuea === "sqcentimeter" && resultTypeValuea === "sqkilometer") {
            resulta.value = Number(inputa.value) / 10000000000;
        }
        else if (inputTypeValuea === "sqcentimeter" && resultTypeValuea === "sqmilimeter") {
            resulta.value = Number(inputa.value) * 100;
        }
        else if (inputTypeValuea === "sqcentimeter" && resultTypeValuea === "sqmicrometer") {
            resulta.value = Number(inputa.value) * 1000000;
        }
        else if (inputTypeValuea === "sqcentimeter" && resultTypeValuea === "hectare") {
            resulta.value = Number(inputa.value) / 100000000;
        }
        else if (inputTypeValuea === "sqcentimeter" && resultTypeValuea === "sqmile") {
            resulta.value = Number(inputa.value) / 258998811;
        }
        else if (inputTypeValuea === "sqcentimeter" && resultTypeValuea === "sqyard") {
            resulta.value = Number(inputa.value) / 8361;
        }
        else if (inputTypeValuea === "sqcentimeter" && resultTypeValuea === "sqfoot") {
            resulta.value = Number(inputa.value) / 929;
        }
        else if (inputTypeValuea === "sqcentimeter" && resultTypeValuea === "sqinch") {
            resulta.value = Number(inputa.value) / 6.452;
        }
        else if (inputTypeValuea === "sqcentimeter" && resultTypeValuea === "acre") {
            resulta.value = Number(inputa.value) / 40468521;
        }

        if (inputTypeValuea === "sqmicrometer" && resultTypeValuea === "sqmicrometer") {
            resulta.value = inputa.value;
        } else if (inputTypeValuea === "sqmicrometer" && resultTypeValuea === "sqmeter") {
            resulta.value = Number(inputa.value) / 1000000000000;
        } else if (inputTypeValuea === "sqmicrometer" && resultTypeValuea === "sqkilometer") {
            resulta.value = Number(inputa.value) / 1000000000000000000;
        } else if (inputTypeValuea === "sqmicrometer" && resultTypeValuea === "sqcentimeter") {
            resulta.value = Number(inputa.value) / 10000;
        } else if (inputTypeValuea === "sqmicrometer" && resultTypeValuea === "sqmillimeter") {
            resulta.value = Number(inputa.value) / 1000000;
        } else if (inputTypeValuea === "sqmicrometer" && resultTypeValuea === "hectare") {
            resulta.value = Number(inputa.value) / 100000000;
        } else if (inputTypeValuea === "sqmicrometer" && resultTypeValuea === "sqmile") {
            resulta.value = Number(inputa.value) / 2589988110000;
        } else if (inputTypeValuea === "sqmicrometer" && resultTypeValuea === "sqyard") {
            resulta.value = Number(inputa.value) / 83612736;
        } else if (inputTypeValuea === "sqmicrometer" && resultTypeValuea === "sqfoot") {
            resulta.value = Number(inputa.value) / 929030.4;
        } else if (inputTypeValuea === "sqmicrometer" && resultTypeValuea === "sqinch") {
            resulta.value = Number(inputa.value) / 645160000;
        } else if (inputTypeValuea === "sqmicrometer" && resultTypeValuea === "acre") {
            resulta.value = Number(inputa.value) / 4046856422.4;
        }

        if (inputTypeValuea === "hectare" && resultTypeValuea === "hectare") {
            resulta.value = inputa.value;
        }
        else if (inputTypeValuea === "hectare" && resultTypeValuea === "sqmeter") {
            resulta.value = Number(inputa.value) * 10000;
        }
        else if (inputTypeValuea === "hectare" && resultTypeValuea === "sqkilometer") {
            resulta.value = Number(inputa.value) / 100;
        }
        else if (inputTypeValuea === "hectare" && resultTypeValuea === "sqcentimeter") {
            resulta.value = Number(inputa.value) * 100000000;
        }
        else if (inputTypeValuea === "hectare" && resultTypeValuea === "sqmilimeter") {
            resulta.value = Number(inputa.value) * 10000000000;
        }
        else if (inputTypeValuea === "hectare" && resultTypeValuea === "sqmicrometer") {
            resulta.value = Number(inputa.value) * 10000000000000000;
        }
        else if (inputTypeValuea === "hectare" && resultTypeValuea === "sqmile") {
            resulta.value = Number(inputa.value) / 258.999;
        }
        else if (inputTypeValuea === "hectare" && resultTypeValuea === "sqyard") {
            resulta.value = Number(inputa.value) * 11960.5;
        }
        else if (inputTypeValuea === "hectare" && resultTypeValuea === "sqfoot") {
            resulta.value = Number(inputa.value) * 107639;
        }
        else if (inputTypeValuea === "hectare" && resultTypeValuea === "sqinch") {
            resulta.value = Number(inputa.value) * 15500031;
        }
        else if (inputTypeValuea === "hectare" && resultTypeValuea === "acre") {
            resulta.value = Number(inputa.value) * 2.47105;
        }

        if (inputTypeValuea === "sqmile" && resultTypeValuea === "sqmile") {
            resulta.value = inputa.value;
        }
        else if (inputTypeValuea === "sqmile" && resultTypeValuea === "sqkilometer") {
            resulta.value = Number(inputa.value) * 2.59;
        }
        else if (inputTypeValuea === "sqmile" && resultTypeValuea === "sqmeter") {
            resulta.value = Number(inputa.value) * 2589988.11;
        }
        else if (inputTypeValuea === "sqmile" && resultTypeValuea === "sqcentimeter") {
            resulta.value = Number(inputa.value) * 25899881103.36;
        }
        else if (inputTypeValuea === "sqmile" && resultTypeValuea === "sqmilimeter") {
            resulta.value = Number(inputa.value) * 2589988110336;
        }
        else if (inputTypeValuea === "sqmile" && resultTypeValuea === "sqmicrometer") {
            resulta.value = Number(inputa.value) * 2.58999e+18;
        }
        else if (inputTypeValuea === "sqmile" && resultTypeValuea === "hectare") {
            resulta.value = Number(inputa.value) * 259.0;
        }
        else if (inputTypeValuea === "sqmile" && resultTypeValuea === "sqyard") {
            resulta.value = Number(inputa.value) * 3097600;
        }
        else if (inputTypeValuea === "sqmile" && resultTypeValuea === "sqfoot") {
            resulta.value = Number(inputa.value) * 27878400;
        }
        else if (inputTypeValuea === "sqmile" && resultTypeValuea === "sqinch") {
            resulta.value = Number(inputa.value) * 4014492800;
        }
        else if (inputTypeValuea === "sqmile" && resultTypeValuea === "acre") {
            resulta.value = Number(inputa.value) * 640;
        }

        if (inputTypeValuea === "sqyard" && resultTypeValuea === "sqyard") {
            resulta.value = inputa.value;
        }
        else if (inputTypeValuea === "sqyard" && resultTypeValuea === "sqmeter") {
            resulta.value = Number(inputa.value) / 1.196;
        }
        else if (inputTypeValuea === "sqyard" && resultTypeValuea === "sqkilometer") {
            resulta.value = Number(inputa.value) / 1196000;
        }
        else if (inputTypeValuea === "sqyard" && resultTypeValuea === "sqcentimeter") {
            resulta.value = Number(inputa.value) * 8361.27;
        }
        else if (inputTypeValuea === "sqyard" && resultTypeValuea === "sqmilimeter") {
            resulta.value = Number(inputa.value) * 836127;
        }
        else if (inputTypeValuea === "sqyard" && resultTypeValuea === "sqmicrometer") {
            resulta.value = Number(inputa.value) * 836127000000;
        }
        else if (inputTypeValuea === "sqyard" && resultTypeValuea === "hectare") {
            resulta.value = Number(inputa.value) / 11959.9;
        }
        else if (inputTypeValuea === "sqyard" && resultTypeValuea === "sqmile") {
            resulta.value = Number(inputa.value) / 3098000;
        }
        else if (inputTypeValuea === "sqyard" && resultTypeValuea === "sqfoot") {
            resulta.value = Number(inputa.value) * 9;
        }
        else if (inputTypeValuea === "sqyard" && resultTypeValuea === "sqinch") {
            resulta.value = Number(inputa.value) * 1296;
        }
        else if (inputTypeValuea === "sqyard" && resultTypeValuea === "acre") {
            resulta.value = Number(inputa.value) / 4840;
        }

        if (inputTypeValuea === "sqfoot" && resultTypeValuea === "sqfoot") {
            resulta.value = inputa.value;
        }
        else if (inputTypeValuea === "sqfoot" && resultTypeValuea === "sqmeter") {
            resulta.value = Number(inputa.value) / 10.764;
        }
        else if (inputTypeValuea === "sqfoot" && resultTypeValuea === "sqkilometer") {
            resulta.value = Number(inputa.value) / 10763910.4;
        }
        else if (inputTypeValuea === "sqfoot" && resultTypeValuea === "sqcentimeter") {
            resulta.value = Number(inputa.value) * 929.0304;
        }
        else if (inputTypeValuea === "sqfoot" && resultTypeValuea === "sqmilimeter") {
            resulta.value = Number(inputa.value) * 92903.04;
        }
        else if (inputTypeValuea === "sqfoot" && resultTypeValuea === "sqmicrometer") {
            resulta.value = Number(inputa.value) * 92903040000;
        }
        else if (inputTypeValuea === "sqfoot" && resultTypeValuea === "hectare") {
            resulta.value = Number(inputa.value) / 107639.104;
        }
        else if (inputTypeValuea === "sqfoot" && resultTypeValuea === "sqmile") {
            resulta.value = Number(inputa.value) / 27878400;
        }
        else if (inputTypeValuea === "sqfoot" && resultTypeValuea === "sqyard") {
            resulta.value = Number(inputa.value) / 9;
        }
        else if (inputTypeValuea === "sqfoot" && resultTypeValuea === "sqinch") {
            resulta.value = Number(inputa.value) * 144;
        }
        else if (inputTypeValuea === "sqfoot" && resultTypeValuea === "acre") {
            resulta.value = Number(inputa.value) / 43560;
        }

        if (inputTypeValuea === "sqinch" && resultTypeValuea === "sqinch") {
            resulta.value = inputa.value;
        }
        else if (inputTypeValuea === "sqinch" && resultTypeValuea === "sqfoot") {
            resulta.value = Number(inputa.value) / 144;
        }
        else if (inputTypeValuea === "sqinch" && resultTypeValuea === "sqyard") {
            resulta.value = Number(inputa.value) / 1296;
        }
        else if (inputTypeValuea === "sqinch" && resultTypeValuea === "sqmeter") {
            resulta.value = Number(inputa.value) / 1550;
        }
        else if (inputTypeValuea === "sqinch" && resultTypeValuea === "sqkilometer") {
            resulta.value = Number(inputa.value) / 1550000000;
        }
        else if (inputTypeValuea === "sqinch" && resultTypeValuea === "sqcentimeter") {
            resulta.value = Number(inputa.value) * 6.452;
        }
        else if (inputTypeValuea === "sqinch" && resultTypeValuea === "sqmilimeter") {
            resulta.value = Number(inputa.value) * 645.16;
        }
        else if (inputTypeValuea === "sqinch" && resultTypeValuea === "sqmicrometer") {
            resulta.value = Number(inputa.value) * 645160000;
        }
        else if (inputTypeValuea === "sqinch" && resultTypeValuea === "hectare") {
            resulta.value = Number(inputa.value) / 10763910;
        }
        else if (inputTypeValuea === "sqinch" && resultTypeValuea === "sqmile") {
            resulta.value = Number(inputa.value) / 4014000000;
        }
        else if (inputTypeValuea === "sqinch" && resultTypeValuea === "acre") {
            resulta.value = Number(inputa.value) / 627300;
        }

        if (inputTypeValuea === "acre" && resultTypeValuea === "acre") {
            resulta.value = inputa.value;
        }
        else if (inputTypeValuea === "acre" && resultTypeValuea === "sqmeter") {
            resulta.value = Number(inputa.value) * 4047;
        }
        else if (inputTypeValuea === "acre" && resultTypeValuea === "sqkilometer") {
            resulta.value = Number(inputa.value) / 247.105;
        }
        else if (inputTypeValuea === "acre" && resultTypeValuea === "sqcentimeter") {
            resulta.value = Number(inputa.value) * 40468564.224;
        }
        else if (inputTypeValuea === "acre" && resultTypeValuea === "sqmilimeter") {
            resulta.value = Number(inputa.value) * 4046856422.4;
        }
        else if (inputTypeValuea === "acre" && resultTypeValuea === "sqmicrometer") {
            resulta.value = Number(inputa.value) * 4046856422400000;
        }
        else if (inputTypeValuea === "acre" && resultTypeValuea === "hectare") {
            resulta.value = Number(inputa.value) * 0.40468564;
        }
        else if (inputTypeValuea === "acre" && resultTypeValuea === "sqmile") {
            resulta.value = Number(inputa.value) / 640;
        }
        else if (inputTypeValuea === "acre" && resultTypeValuea === "sqyard") {
            resulta.value = Number(inputa.value) * 4840;
        }
        else if (inputTypeValuea === "acre" && resultTypeValuea === "sqfoot") {
            resulta.value = Number(inputa.value) * 43560;
        }
        else if (inputTypeValuea === "acre" && resultTypeValuea === "sqinch") {
            resulta.value = Number(inputa.value) * 6272640;
        }

    }

}

if (volume == volumec) {

    // for volume
    var inputv = document.getElementById('inputv');
    var resultv = document.getElementById('resultv');
    var inputTypev = document.getElementById('inputTypev');
    var resultTypev = document.getElementById('resultTypev');
    var inputTypeValuev, resultTypeValuev;

    inputv.addEventListener("input", myResult);
    inputTypev.addEventListener("change", myResult);
    resultTypev.addEventListener("change", myResult);

    function myResult() {
        inputTypeValuev = inputTypev.value;
        resultTypeValuev = resultTypev.value;

        if (inputTypeValuev === "cumeter" && resultTypeValuev === "cumeter") {
            resultv.value = inputv.value;
        }
        else if (inputTypeValuev === "cumeter" && resultTypeValuev === "cukilometer") {
            resultv.value = Number(inputv.value) / 1000000;
        }
        else if (inputTypeValuev === "cumeter" && resultTypeValuev === "cucentimeter") {
            resultv.value = Number(inputv.value) * 100000;
        }
        else if (inputTypeValuev === "cumeter" && resultTypeValuev === "cumilimeter") {
            resultv.value = Number(inputv.value) * 1000000;
        }
        else if (inputTypeValuev === "cumeter" && resultTypeValuev === "liter") {
            resultv.value = Number(inputv.value) * 1000;
        }
        else if (inputTypeValuev === "cumeter" && resultTypeValuev === "mililiter") {
            resultv.value = Number(inputv.value) * 1000000;
        }
        else if (inputTypeValuev === "cumeter" && resultTypeValuev === "cumile") {
            resultv.value = Number(inputv.value) / 1609.34;
        }
        else if (inputTypeValuev === "cumeter" && resultTypeValuev === "cuyard") {
            resultv.value = Number(inputv.value) * 1.308;
        }
        else if (inputTypeValuev === "cumeter" && resultTypeValuev === "cufoot") {
            resultv.value = Number(inputv.value) * 35.315;
        }
        else if (inputTypeValuev === "cumeter" && resultTypeValuev === "cuinch") {
            resultv.value = Number(inputv.value) * 61024;
        }


        if (inputTypeValuev === "cukilometer" && resultTypeValuev === "cukilometer") {
            resultv.value = inputv.value;
        }
        else if (inputTypeValuev === "cukilometer" && resultTypeValuev === "cumeter") {
            resultv.value = Number(inputv.value) * 1000000;
        }
        else if (inputTypeValuev === "cukilometer" && resultTypeValuev === "cucentimeter") {
            resultv.value = Number(inputv.value) * 100000000;
        }
        else if (inputTypeValuev === "cukilometer" && resultTypeValuev === "cumilimeter") {
            resultv.value = Number(inputv.value) * 1000000000;
        }
        else if (inputTypeValuev === "cukilometer" && resultTypeValuev === "liter") {
            resultv.value = Number(inputv.value) * 1e+12;
        }
        else if (inputTypeValuev === "cukilometer" && resultTypeValuev === "mililiter") {
            resultv.value = Number(inputv.value) * 1e+15;
        }
        else if (inputTypeValuev === "cukilometer" && resultTypeValuev === "cumile") {
            resultv.value = Number(inputv.value) / 1.609;
        }
        else if (inputTypeValuev === "cukilometer" && resultTypeValuev === "cuyard") {
            resultv.value = Number(inputv.value) * 1.196e+6;
        }
        else if (inputTypeValuev === "cukilometer" && resultTypeValuev === "cufoot") {
            resultv.value = Number(inputv.value) * 3.531e+7;
        }
        else if (inputTypeValuev === "cukilometer" && resultTypeValuev === "cuinch") {
            resultv.value = Number(inputv.value) * 6.272e+10;
        }


        if (inputTypeValuev === "cucentimeter" && resultTypeValuev === "cucentimeter") {
            resultv.value = inputv.value;
        }
        else if (inputTypeValuev === "cucentimeter" && resultTypeValuev === "cumeter") {
            resultv.value = Number(inputv.value) / 1000000;
        }
        else if (inputTypeValuev === "cucentimeter" && resultTypeValuev === "cumilimeter") {
            resultv.value = Number(inputv.value) * 10;
        }
        else if (inputTypeValuev === "cucentimeter" && resultTypeValuev === "liter") {
            resultv.value = Number(inputv.value) / 1000;
        }
        else if (inputTypeValuev === "cucentimeter" && resultTypeValuev === "mililiter") {
            resultv.value = Number(inputv.value) * 1;
        }
        else if (inputTypeValuev === "cucentimeter" && resultTypeValuev === "cumile") {
            resultv.value = Number(inputv.value) / 160934;
        }
        else if (inputTypeValuev === "cucentimeter" && resultTypeValuev === "cuyard") {
            resultv.value = Number(inputv.value) / 76456;
        }
        else if (inputTypeValuev === "cucentimeter" && resultTypeValuev === "cufoot") {
            resultv.value = Number(inputv.value) / 28317;
        }
        else if (inputTypeValuev === "cucentimeter" && resultTypeValuev === "cuinch") {
            resultv.value = Number(inputv.value) / 16.387;
        }
        else if (inputTypeValuev === "cucentimeter" && resultTypeValuev === "cukilometer") {
            resultv.value = Number(inputv.value) / 1000000000000;
        }

        if (inputTypeValuev === "cumilimeter" && resultTypeValuev === "cumilimeter") {
            resultv.value = inputv.value;
        }
        else if (inputTypeValuev === "cumilimeter" && resultTypeValuev === "cumeter") {
            resultv.value = Number(inputv.value) / 1000000000;
        }
        else if (inputTypeValuev === "cumilimeter" && resultTypeValuev === "cucentimeter") {
            resultv.value = Number(inputv.value) / 1000;
        }
        else if (inputTypeValuev === "cumilimeter" && resultTypeValuev === "cukilometer") {
            resultv.value = Number(inputv.value) / 1000000000000000;
        }
        else if (inputTypeValuev === "cumilimeter" && resultTypeValuev === "liter") {
            resultv.value = Number(inputv.value) / 1000000;
        }
        else if (inputTypeValuev === "cumilimeter" && resultTypeValuev === "mililiter") {
            resultv.value = Number(inputv.value);
        }
        else if (inputTypeValuev === "cumilimeter" && resultTypeValuev === "cumile") {
            resultv.value = Number(inputv.value) / 4168181825.4;
        }
        else if (inputTypeValuev === "cumilimeter" && resultTypeValuev === "cuyard") {
            resultv.value = Number(inputv.value) / 764554.858;
        }
        else if (inputTypeValuev === "cumilimeter" && resultTypeValuev === "cufoot") {
            resultv.value = Number(inputv.value) / 28316.846;
        }
        else if (inputTypeValuev === "cumilimeter" && resultTypeValuev === "cuinch") {
            resultv.value = Number(inputv.value) / 16387.064;
        }


        if (inputTypeValuev === "liter" && resultTypeValuev === "liter") {
            resultv.value = inputv.value;
        }
        else if (inputTypeValuev === "liter" && resultTypeValuev === "cumeter") {
            resultv.value = Number(inputv.value) / 1000;
        }
        else if (inputTypeValuev === "liter" && resultTypeValuev === "cucentimeter") {
            resultv.value = Number(inputv.value) * 1000;
        }
        else if (inputTypeValuev === "liter" && resultTypeValuev === "cumilimeter") {
            resultv.value = Number(inputv.value) * 1000000;
        }
        else if (inputTypeValuev === "liter" && resultTypeValuev === "mililiter") {
            resultv.value = Number(inputv.value) * 1000;
        }
        else if (inputTypeValuev === "liter" && resultTypeValuev === "cumile") {
            resultv.value = Number(inputv.value) / 2589988.11;
        }
        else if (inputTypeValuev === "liter" && resultTypeValuev === "cuyard") {
            resultv.value = Number(inputv.value) * 1.308;
        }
        else if (inputTypeValuev === "liter" && resultTypeValuev === "cufoot") {
            resultv.value = Number(inputv.value) * 28.317;
        }
        else if (inputTypeValuev === "liter" && resultTypeValuev === "cuinch") {
            resultv.value = Number(inputv.value) * 61.024;
        }
        else if (inputTypeValuev === "liter" && resultTypeValuev === "cukilometer") {
            resultv.value = Number(inputv.value) / 1000000000;
        }

        if (inputTypeValuev === "mililiter" && resultTypeValuev === "mililiter") {
            resultv.value = inputv.value;
        }
        else if (inputTypeValuev === "mililiter" && resultTypeValuev === "cukilometer") {
            resultv.value = Number(inputv.value) / 1000000000;
        }
        else if (inputTypeValuev === "mililiter" && resultTypeValuev === "cucentimeter") {
            resultv.value = Number(inputv.value) / 0.001;
        }
        else if (inputTypeValuev === "mililiter" && resultTypeValuev === "cumilimeter") {
            resultv.value = Number(inputv.value) * 1000;
        }
        else if (inputTypeValuev === "mililiter" && resultTypeValuev === "liter") {
            resultv.value = Number(inputv.value) / 1000;
        }
        else if (inputTypeValuev === "mililiter" && resultTypeValuev === "cumeter") {
            resultv.value = Number(inputv.value) / 1000000;
        }
        else if (inputTypeValuev === "mililiter" && resultTypeValuev === "cumile") {
            resultv.value = Number(inputv.value) / 4.0e+9;
        }
        else if (inputTypeValuev === "mililiter" && resultTypeValuev === "cuyard") {
            resultv.value = Number(inputv.value) / 764554.858;
        }
        else if (inputTypeValuev === "mililiter" && resultTypeValuev === "cufoot") {
            resultv.value = Number(inputv.value) / 28316.8466;
        }
        else if (inputTypeValuev === "mililiter" && resultTypeValuev === "cuinch") {
            resultv.value = Number(inputv.value) / 16.387064;
        }

        if (inputTypeValuev === "cumile" && resultTypeValuev === "cumile") {
            resultv.value = inputv.value;
        }
        else if (inputTypeValuev === "cumile" && resultTypeValuev === "cukilometer") {
            resultv.value = Number(inputv.value) * 1.60934;
        }
        else if (inputTypeValuev === "cumile" && resultTypeValuev === "cucentimeter") {
            resultv.value = Number(inputv.value) * 160934;
        }
        else if (inputTypeValuev === "cumile" && resultTypeValuev === "cumilimeter") {
            resultv.value = Number(inputv.value) * 1.609e+6;
        }
        else if (inputTypeValuev === "cumile" && resultTypeValuev === "liter") {
            resultv.value = Number(inputv.value) * 4.169e+12;
        }
        else if (inputTypeValuev === "cumile" && resultTypeValuev === "mililiter") {
            resultv.value = Number(inputv.value) * 4.169e+15;
        }
        else if (inputTypeValuev === "cumile" && resultTypeValuev === "cumeter") {
            resultv.value = Number(inputv.value) * 1609.34;
        }
        else if (inputTypeValuev === "cumile" && resultTypeValuev === "cuyard") {
            resultv.value = Number(inputv.value) * 1760;
        }
        else if (inputTypeValuev === "cumile" && resultTypeValuev === "cufoot") {
            resultv.value = Number(inputv.value) * 5280;
        }
        else if (inputTypeValuev === "cumile" && resultTypeValuev === "cuinch") {
            resultv.value = Number(inputv.value) * 6.273e+7;
        }

        if (inputTypeValuev === "cuyard" && resultTypeValuev === "cuyard") {
            resultv.value = inputv.value;
        }
        else if (inputTypeValuev === "cuyard" && resultTypeValuev === "cumeter") {
            resultv.value = Number(inputv.value) / 1.196;
        }
        else if (inputTypeValuev === "cuyard" && resultTypeValuev === "cukilometer") {
            resultv.value = Number(inputv.value) / 1196000;
        }
        else if (inputTypeValuev === "cuyard" && resultTypeValuev === "cucentimeter") {
            resultv.value = Number(inputv.value) * 764560;
        }
        else if (inputTypeValuev === "cuyard" && resultTypeValuev === "cumilimeter") {
            resultv.value = Number(inputv.value) * 764560000;
        }
        else if (inputTypeValuev === "cuyard" && resultTypeValuev === "liter") {
            resultv.value = Number(inputv.value) * 764.56;
        }
        else if (inputTypeValuev === "cuyard" && resultTypeValuev === "mililiter") {
            resultv.value = Number(inputv.value) * 764560;
        }
        else if (inputTypeValuev === "cuyard" && resultTypeValuev === "cumile") {
            resultv.value = Number(inputv.value) / 3098.48;
        }
        else if (inputTypeValuev === "cuyard" && resultTypeValuev === "cufoot") {
            resultv.value = Number(inputv.value) * 27;
        }
        else if (inputTypeValuev === "cuyard" && resultTypeValuev === "cuinch") {
            resultv.value = Number(inputv.value) * 46656;
        }

        if (inputTypeValuev === "cufoot" && resultTypeValuev === "cufoot") {
            resultv.value = inputv.value;
        }
        else if (inputTypeValuev === "cufoot" && resultTypeValuev === "cumeter") {
            resultv.value = Number(inputv.value) / 35.315;
        }
        else if (inputTypeValuev === "cufoot" && resultTypeValuev === "cucentimeter") {
            resultv.value = Number(inputv.value) * 28317;
        }
        else if (inputTypeValuev === "cufoot" && resultTypeValuev === "cumilimeter") {
            resultv.value = Number(inputv.value) * 28317000;
        }
        else if (inputTypeValuev === "cufoot" && resultTypeValuev === "liter") {
            resultv.value = Number(inputv.value) * 28.317;
        }
        else if (inputTypeValuev === "cufoot" && resultTypeValuev === "mililiter") {
            resultv.value = Number(inputv.value) * 28317;
        }
        else if (inputTypeValuev === "cufoot" && resultTypeValuev === "cumile") {
            resultv.value = Number(inputv.value) / 5280;
        }
        else if (inputTypeValuev === "cufoot" && resultTypeValuev === "cuyard") {
            resultv.value = Number(inputv.value) / 27;
        }
        else if (inputTypeValuev === "cufoot" && resultTypeValuev === "cumeter") {
            resultv.value = Number(inputv.value) / 35.315;
        }
        else if (inputTypeValuev === "cufoot" && resultTypeValuev === "cuinch") {
            resultv.value = Number(inputv.value) * 1728;
        }

        if (inputTypeValuev === "cuinch" && resultTypeValuev === "cuinch") {
            resultv.value = inputv.value;
        }
        else if (inputTypeValuev === "cuinch" && resultTypeValuev === "cumeter") {
            resultv.value = Number(inputv.value) / 61024;
        }
        else if (inputTypeValuev === "cuinch" && resultTypeValuev === "cukilometer") {
            resultv.value = Number(inputv.value) / 61024000;
        }
        else if (inputTypeValuev === "cuinch" && resultTypeValuev === "cucentimeter") {
            resultv.value = Number(inputv.value) * 16.387;
        }
        else if (inputTypeValuev === "cuinch" && resultTypeValuev === "cumilimeter") {
            resultv.value = Number(inputv.value) * 16387;
        }
        else if (inputTypeValuev === "cuinch" && resultTypeValuev === "liter") {
            resultv.value = Number(inputv.value) / 61.024;
        }
        else if (inputTypeValuev === "cuinch" && resultTypeValuev === "mililiter") {
            resultv.value = Number(inputv.value) * 16.387;
        }
        else if (inputTypeValuev === "cuinch" && resultTypeValuev === "cumile") {
            resultv.value = Number(inputv.value) / 3.531e+8;
        }
        else if (inputTypeValuev === "cuinch" && resultTypeValuev === "cuyard") {
            resultv.value = Number(inputv.value) / 46_656;
        }
        else if (inputTypeValuev === "cuinch" && resultTypeValuev === "cufoot") {
            resultv.value = Number(inputv.value) / 1728;
        }


    }


}

// for weight 

if (weight == weightc) {

    let inputw = document.getElementById('inputw');
    let resultw = document.getElementById('resultw');
    let inputTypew = document.getElementById('inputTypew');
    let resultTypew = document.getElementById('resultTypew');
    let inputTypeValuew, resultTypeValuew;

    inputw.addEventListener("keyup", myResult);
    inputTypew.addEventListener("change", myResult);
    resultTypew.addEventListener("change", myResult);

    inputTypeValuew = inputTypew.value;
    resultTypeValuew = resultTypew.value;

    function myResult() {
        inputTypeValuew = inputTypew.value;
        resultTypeValuew = resultTypew.value;
        if (inputTypeValuew === "kilogram" && resultTypeValuew === "kilogram") {
            resultw.value = inputw.value;
        }
        else if (inputTypeValuew === "kilogram" && resultTypeValuew === "gram") {
            resultw.value = Number(inputw.value) * 1000;
        }
        else if (inputTypeValuew === "kilogram" && resultTypeValuew === "miligram") {
            resultw.value = Number(inputw.value) * 1000000;
        }
        else if (inputTypeValuew === "kilogram" && resultTypeValuew === "pound") {
            resultw.value = Number(inputw.value) * 2.20462;
        }
        else if (inputTypeValuew === "kilogram" && resultTypeValuew === "carat") {
            resultw.value = Number(inputw.value) * 5000;
        }
        else if (inputTypeValuew === "kilogram" && resultTypeValuew === "amu") {
            resultw.value = Number(inputw.value) * 6.022e+26;
        }

        if (inputTypeValuew === "gram" && resultTypeValuew === "gram") {
            resultw.value = inputw.value;
        }
        else if (inputTypeValuew === "gram" && resultTypeValuew === "kilogram") {
            resultw.value = Number(inputw.value) / 1000;
        }
        else if (inputTypeValuew === "gram" && resultTypeValuew === "miligram") {
            resultw.value = Number(inputw.value) * 1000;
        }
        else if (inputTypeValuew === "gram" && resultTypeValuew === "pound") {
            resultw.value = Number(inputw.value) * 0.00220462;
        }
        else if (inputTypeValuew === "gram" && resultTypeValuew === "carat") {
            resultw.value = Number(inputw.value) * 5;
        }
        else if (inputTypeValuew === "gram" && resultTypeValuew === "amu") {
            resultw.value = Number(inputw.value) / (6.022e+23);
        }

        if (inputTypeValuew === "miligram" && resultTypeValuew === "miligram") {
            resultw.value = inputw.value;
        }
        else if (inputTypeValuew === "miligram" && resultTypeValuew === "gram") {
            resultw.value = Number(inputw.value) / 1000;
        }
        else if (inputTypeValuew === "miligram" && resultTypeValuew === "kilogram") {
            resultw.value = Number(inputw.value) / 1000000;
        }
        else if (inputTypeValuew === "miligram" && resultTypeValuew === "pound") {
            resultw.value = Number(inputw.value) / 453592.37;
        }
        else if (inputTypeValuew === "miligram" && resultTypeValuew === "carat") {
            resultw.value = Number(inputw.value) / 200;
        }
        else if (inputTypeValuew === "miligram" && resultTypeValuew === "amu") {
            resultw.value = Number(inputw.value) / 1.6605e-21;
        }


        if (inputTypeValuew === "pound" && resultTypeValuew === "pound") {
            resultw.value = inputw.value;
        }
        else if (inputTypeValuew === "pound" && resultTypeValuew === "kilogram") {
            resultw.value = Number(inputw.value) * 0.453592;
        }
        else if (inputTypeValuew === "pound" && resultTypeValuew === "gram") {
            resultw.value = Number(inputw.value) * 453.592;
        }
        else if (inputTypeValuew === "pound" && resultTypeValuew === "miligram") {
            resultw.value = Number(inputw.value) * 453592;
        }
        else if (inputTypeValuew === "pound" && resultTypeValuew === "carat") {
            resultw.value = Number(inputw.value) * 2267.96;
        }
        else if (inputTypeValuew === "pound" && resultTypeValuew === "amu") {
            resultw.value = Number(inputw.value) * 2.59e+26;
        }


        if (inputTypeValuew === "carat" && resultTypeValuew === "carat") {
            resultw.value = inputw.value;
        }
        else if (inputTypeValuew === "carat" && resultTypeValuew === "gram") {
            resultw.value = Number(inputw.value) * 0.2;
        }
        else if (inputTypeValuew === "carat" && resultTypeValuew === "milligram") {
            resultw.value = Number(inputw.value) * 200;
        }
        else if (inputTypeValuew === "carat" && resultTypeValuew === "kilogram") {
            resultw.value = Number(inputw.value) * 0.0002;
        }
        else if (inputTypeValuew === "carat" && resultTypeValuew === "pound") {
            resultw.value = Number(inputw.value) * 0.000440925;
        }
        else if (inputTypeValuew === "carat" && resultTypeValuew === "amu") {
            resultw.value = Number(inputw.value) * 2.4288712e+22;
        }

        if (inputTypeValuew === "amu" && resultTypeValuew === "amu") {
            resultw.value = inputw.value;
        }
        else if (inputTypeValuew === "amu" && resultTypeValuew === "kilogram") {
            resultw.value = Number(inputw.value) / 6.022e+26;
        }
        else if (inputTypeValuew === "amu" && resultTypeValuew === "gram") {
            resultw.value = Number(inputw.value) / 6.022e+23;
        }
        else if (inputTypeValuew === "amu" && resultTypeValuew === "milligram") {
            resultw.value = Number(inputw.value) / 6.022e+20;
        }
        else if (inputTypeValuew === "amu" && resultTypeValuew === "pound") {
            resultw.value = Number(inputw.value) / 2.7316e+26;
        }
        else if (inputTypeValuew === "amu" && resultTypeValuew === "carat") {
            resultw.value = Number(inputw.value) / 1.20443e+23;
        }

    }
}


if (time == timec) {

    let inputtime = document.getElementById('inputtime');
    let resulttime = document.getElementById('resulttime');
    let inputTypetime = document.getElementById('inputTypetime');
    let resultTypetime = document.getElementById('resultTypetime');
    let inputTypeValuetime, resultTypeValuetime;

    inputtime.addEventListener("keyup", myResult);
    inputTypetime.addEventListener("change", myResult);
    resultTypetime.addEventListener("change", myResult);

    inputTypeValuetime = inputTypetime.value;
    resultTypeValuetime = resultTypetime.value;

    function myResult() {
        inputTypeValuetime = inputTypetime.value;
        resultTypeValuetime = resultTypetime.value;


        if (inputTypeValuetime === "second" && resultTypeValuetime === "second") {
            resulttime.value = inputtime.value;
        }
        else if (inputTypeValuetime === "second" && resultTypeValuetime === "milisecond") {
            resulttime.value = Number(inputtime.value) * 1000;
        }
        else if (inputTypeValuetime === "second" && resultTypeValuetime === "microsecond") {
            resulttime.value = Number(inputtime.value) * 1000000;
        }
        else if (inputTypeValuetime === "second" && resultTypeValuetime === "minute") {
            resulttime.value = Number(inputtime.value) / 60;
        }
        else if (inputTypeValuetime === "second" && resultTypeValuetime === "hour") {
            resulttime.value = Number(inputtime.value) / 3600;
        }
        else if (inputTypeValuetime === "second" && resultTypeValuetime === "day") {
            resulttime.value = Number(inputtime.value) / 86400;
        }
        if (inputTypeValuetime === "milisecond" && resultTypeValuetime === "milisecond") {
            resulttime.value = inputtime.value;
        }
        else if (inputTypeValuetime === "milisecond" && resultTypeValuetime === "second") {
            resulttime.value = Number(inputtime.value) / 1000;
        }
        else if (inputTypeValuetime === "milisecond" && resultTypeValuetime === "microsecond") {
            resulttime.value = Number(inputtime.value) * 1000;
        }
        else if (inputTypeValuetime === "milisecond" && resultTypeValuetime === "minute") {
            resulttime.value = Number(inputtime.value) / 60000;
        }
        else if (inputTypeValuetime === "milisecond" && resultTypeValuetime === "hour") {
            resulttime.value = Number(inputtime.value) / 3600000;
        }
        else if (inputTypeValuetime === "milisecond" && resultTypeValuetime === "day") {
            resulttime.value = Number(inputtime.value) / 86400000;
        }
        if (inputTypeValuetime === "microsecond" && resultTypeValuetime === "microsecond") {
            resulttime.value = inputtime.value;
        }
        else if (inputTypeValuetime === "microsecond" && resultTypeValuetime === "milisecond") {
            resulttime.value = Number(inputtime.value) / 1000;
        }
        else if (inputTypeValuetime === "microsecond" && resultTypeValuetime === "second") {
            resulttime.value = Number(inputtime.value) / 1000000;
        }
        else if (inputTypeValuetime === "microsecond" && resultTypeValuetime === "minute") {
            resulttime.value = Number(inputtime.value) / 60000000;
        }
        else if (inputTypeValuetime === "microsecond" && resultTypeValuetime === "hour") {
            resulttime.value = Number(inputtime.value) / 3600000000;
        }
        else if (inputTypeValuetime === "microsecond" && resultTypeValuetime === "day") {
            resulttime.value = Number(inputtime.value) / 86400000000;
        }

        if (inputTypeValuetime === "minute" && resultTypeValuetime === "minute") {
            resulttime.value = inputtime.value;
        }
        else if (inputTypeValuetime === "minute" && resultTypeValuetime === "second") {
            resulttime.value = Number(inputtime.value) * 60;
        }
        else if (inputTypeValuetime === "minute" && resultTypeValuetime === "millisecond") {
            resulttime.value = Number(inputtime.value) * 60000;
        }
        else if (inputTypeValuetime === "minute" && resultTypeValuetime === "microsecond") {
            resulttime.value = Number(inputtime.value) * 60000000;
        }
        else if (inputTypeValuetime === "minute" && resultTypeValuetime === "hour") {
            resulttime.value = Number(inputtime.value) / 60;
        }
        else if (inputTypeValuetime === "minute" && resultTypeValuetime === "day") {
            resulttime.value = Number(inputtime.value) / 1440;
        }
        if (inputTypeValuetime === "hour" && resultTypeValuetime === "hour") {
            resulttime.value = inputtime.value;
        }
        else if (inputTypeValuetime === "hour" && resultTypeValuetime === "minute") {
            resulttime.value = Number(inputtime.value) * 60;
        }
        else if (inputTypeValuetime === "hour" && resultTypeValuetime === "second") {
            resulttime.value = Number(inputtime.value) * 3600;
        }
        else if (inputTypeValuetime === "hour" && resultTypeValuetime === "millisecond") {
            resulttime.value = Number(inputtime.value) * 3.6e+6;
        }
        else if (inputTypeValuetime === "hour" && resultTypeValuetime === "microsecond") {
            resulttime.value = Number(inputtime.value) * 3.6e+9;
        }
        else if (inputTypeValuetime === "hour" && resultTypeValuetime === "day") {
            resulttime.value = Number(inputtime.value) / 24;
        }
        if (inputTypeValuetime === "day" && resultTypeValuetime === "day") {
            resulttime.value = inputtime.value;
        }
        else if (inputTypeValuetime === "day" && resultTypeValuetime === "hour") {
            resulttime.value = Number(inputtime.value) * 24;
        }
        else if (inputTypeValuetime === "day" && resultTypeValuetime === "minute") {
            resulttime.value = Number(inputtime.value) * 1440;
        }
        else if (inputTypeValuetime === "day" && resultTypeValuetime === "second") {
            resulttime.value = Number(inputtime.value) * 86400;
        }
        else if (inputTypeValuetime === "day" && resultTypeValuetime === "millisecond") {
            resulttime.value = Number(inputtime.value) * 8.64e+7;
        }
        else if (inputTypeValuetime === "day" && resultTypeValuetime === "microsecond") {
            resulttime.value = Number(inputtime.value) * 8.64e+10;
        }
        
        
    }
}