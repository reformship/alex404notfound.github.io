    function printInput2() {
      var G = parseFloat(document.getElementById("inputG").value);
      var LB = parseFloat(document.getElementById("inputLT").value);
      var B = parseFloat(document.getElementById("inputB").value);
      var A = parseFloat(document.getElementById("inputA").value); 
      var A1 = parseFloat(document.getElementById("inputA1").value);
      var n0 = 1-(1-G)*LB/A1;
      var n1 = Math.log(n0);
      var n = n1/Math.log(G);
      var N = Math.pow(B,(n-1));
      var S = N*A;
      document.getElementById("result").innerText = "结果：" + S;
    }
