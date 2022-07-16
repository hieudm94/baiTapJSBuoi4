// ?khối 1: Dữ liệu đang có sẵn (Input)

// ?Khối 2: các bước xử lý code 

// ?Khối 3: kết quả (outout)






function tinhNTT() {
    var month = Number(document.getElementById("month1").value);
    var year = Number(document.getElementById("year1").value);


    if ((year % 4 == 0 && year % 100 != 0)||(year % 400 == 0)) {
        if (month == 1) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        } else if(month == 2) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 29 ngày" + "(Năm nhuận)";
        }else if(month == 3) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        }else if(month == 4) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        }else if(month == 5) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        }else if(month == 6) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        }else if(month == 7) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        }else if(month == 8) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        }else if(month == 9) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        }else if(month == 10) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        }else if(month == 11) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        }else{
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        }
    } else {
        if (month == 1) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        } else if(month == 2) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 28 ngày";
        }else if(month == 3) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        }else if(month == 4) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        }else if(month == 5) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        }else if(month == 6) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        }else if(month == 7) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        }else if(month == 8) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        }else if(month == 9) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        }else if(month == 10) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        }else if(month == 11) {
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        }else{
            return document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        }

    }



}
document.getElementById("btnNTT").onclick = tinhNTT;