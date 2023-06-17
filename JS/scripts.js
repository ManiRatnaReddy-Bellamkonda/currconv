/* Author - Mani Ratna Reddy - C0887487  
date: 6/16/2023 */



function function1() {
    let sel = document.getElementById("USD").value;
    let usdOpt = document.getElementById("USDcurr").value;/* gets input  */
    let cadOpt = document.getElementById("CADcurr").value;

    if (usdOpt == cadOpt) {     /* validates 2 inputs should not be the same  */
        alert("same currency cannot be converted")
    }
    else if (sel == null || sel == undefined || sel == "") {/* validation of input field */
        alert("please provide input to convert")
    }
    else if (usdOpt == "CAD") {
        document.getElementById("CAD").value = parseFloat(sel * 0.756);/* conversion  */
        alert(sel + " CAD is equal to " + parseFloat(sel * 0.756) + " USD");
    }
    else if (usdOpt == "USD") {
        document.getElementById("CAD").value = parseFloat(sel * 1.322)/*  */
        alert(sel + " USD is equal to " + parseFloat(sel * 1.322)+" CAD");
    }



}