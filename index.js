let calBtn = $(".cal-btn");
let binInput = $(".bin-input");
let errorMsg = $("#error-msg");
let decOutcome = $("#outcome");
let binaryNum,
  decNum = 0;

$(document).ready(function () {
  calBtn.prop("disabled", true);
  binInput.on("input", function () {
    binaryNum = binInput.val();
    if (binaryNum.length <= 8) {
      errorMsg.text("");
      for (const num of binaryNum) {
        if (Number(num) !== 0 && Number(num) !== 1) {
          errorMsg.text("must be 1 or 0");
          calBtn.prop("disabled", true);
        } else {
          errorMsg.text("");
          calBtn.prop("disabled", false);
        }
      }
    } else {
      errorMsg.text("must be up to 8 digit");
      calBtn.prop("disabled", true);
    }
  });

  calBtn.on("click", function () {
    let exponent = binaryNum.length - 1;
    for (let i = 0; i < binaryNum.length; i++) {
      decNum += binaryNum[i] * Math.pow(2, exponent);
      exponent--;
    }
    decOutcome.text(decNum);
  });
});
