//try catch finally block

function sendvalue() {
  try {
    var a = document.getElementById("input1").value;
    var aa = parseInt(a);
    if (aa > 10) throw new Error("Value is greater than 10");
    else if (aa < 5) throw new Error("Value is less than 10");
    else if (isNaN(aa)) throw new Error();

  } catch (err) {
    console.log(err);
  }
  finally {
    console.log("finally block");
  }
}
