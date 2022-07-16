// ?khối 1: Dữ liệu đang có sẵn (Input)
/** Nhập 3 số nguyên tố
 * 
 */

// ?Khối 2: các bước xử lý code 
/** B1: Tạo biến 3 số nguyên tố.
 *  B2: Gán giá trị 3 biến cho 3 số nguyên tố vừa nhập.
 *  B3: Lập công thức so sánh:
 *  TH1: so sánh Num1 > Num2 && Num1 > Num3 && Num2 > Num3
 *  ==> Num3 < Num2 < Num1
 *  TH2: so sánh Num1 > Num2 && Num3 > Num2 && Num1 > Num3
 *  ==> Num2 < Num3 < Num1
 *  TH3: so sánh Num1 > Num2 && Num3 > Num1
 *  ==> Num2 < Num1< Num3
 * TH4: so sánh Num2 > Num1 && Num2 > Num3
 *  ==> Num3 < Num1 < Num2
 * TH5: so sánh Num2 > Num3 && Num2 > Num1 && Num1 > Num3
 *  ==> Num1 < Num3 < Num2
 * TH6:
 *  ==> Num1 < Num2 < Num3
 * 
 *  B4: Thông báo kết quả ở console.log
 * 
 */

// ?Khối 3: kết quả (outout)
/** Trả kết quả theo thứ tự từ nhỏ đến lớn tại id= txtResult
 * 
 */



function ketQua() {
    var Number1 = Number(document.getElementById("Num1").value);
    var Number2 = Number(document.getElementById("Num2").value);
    var Number3 = Number(document.getElementById("Num3").value);
    console.log(Number1, Number2, Number3)
    if (Number1 > Number2 && Number1 > Number3 && Number2 > Number3) {
        document.getElementById("txtResult").innerHTML = Number3 + "," + Number2 + "," + Number1;
    } else if (Number1 > Number2 && Number3 > Number2 && Number1 > Number3) {
        document.getElementById("txtResult").innerHTML = Number2 + "," + Number3 + "," + Number1;
    } else if (Number1 > Number2 && Number3 > Number1) {
        document.getElementById("txtResult").innerHTML = Number2 + "," + Number1 + "," + Number3;
    } else if (Number2 > Number1 && Number2 > Number3 && Number1 > Number3) {
        document.getElementById("txtResult").innerHTML = Number3 + "," + Number1 + "," + Number2;
    } else if (Number2 > Number3 && Number3 > Number1) {
        document.getElementById("txtResult").innerHTML = Number1 + "," + Number3 + "," + Number2;
    } else {
        document.getElementById("txtResult").innerHTML = Number1 + "," + Number2 + "," + Number3;
    }
}

document.getElementById("submit").onclick = ketQua;



                                
                                            //!  Viết chương trình chào hỏi


// ?khối 1: Dữ liệu đang có sẵn (Input)
/**  Lựa chọn option Cha, Mẹ, Anh Trai, Em Gái
 */
// ?Khối 2: các bước xử lý code 
/**  B1: Tạo biến nguoiDn;
 *   B2: Lấy id tenNguoiDN gán cho biến nguoiDN;
 *   B3: Lập Công thức check value của id tenNguoiDN   
 *    TH1: Nếu B thì ==> Xin chào Bố!
 *    TH2: Nếu M thì ==> Xin chào Mẹ!
 *    TH3: Nếu A thì ==> Xin chào Anh Trai!
 *    TH4: Nếu E thì ==> Xin chào Em Gái!
 */
// ?Khối 3: kết quả (outout)
// Trả kết quả câu chào tại id txtResult1



function KetQua() {
    var nguoiDN = document.getElementById("tenNguoiDN").value;
    if (nguoiDN == "B") {
        document.getElementById("txtResult1").innerHTML = "Xin chào Bố! ";
    } else if (nguoiDN == "M") {
        document.getElementById("txtResult1").innerHTML = "Xin chào Mẹ! ";
    } else if (nguoiDN == "A") {
        document.getElementById("txtResult1").innerHTML = "Xin chào Anh Trai! ";
    } else {
        document.getElementById("txtResult1").innerHTML = "Xin chào Em Gái! ";
    }
}

document.getElementById("Submit").onclick = KetQua;


                            //! Viết chương trình số nguyên chẳn và lẽ

// ?khối 1: Dữ liệu đang có sẵn (Input)
/**Nhập 3 số nguyên tố
 * 
 */
// ?Khối 2: các bước xử lý code 
/**
 *  B1: Tạo biến 3 số nguyên tố, 2 biến số chẵn lẻ;
 *  B2: Gán giá trị biến cho 3 số nguyên tố vừa nhập, và 2 số chẵn lẻ ;
 *  B3: Lập công thức tính toán:
 *  Số 1 : Nếu chia hết cho 2 thì soChan tăng lên 1;
 *         Nếu không chia hết cho 2 thì soLe tăng lên 1;
 *  Số 2 : Nếu chia hết cho 2 thì soChan tăng lên 1;
 *         Nếu không chia hết cho 2 thì soLe tăng lên 1;
 *  Số 3 : Nếu chia hết cho 2 thì soChan tăng lên 1;
 *         Nếu không chia hết cho 2 thì soLe tăng lên 1;
 */
// ?Khối 3: kết quả (outout)
/** Trả kết quả câu chào tại id txtResult2
 * 
 */



function soND() {
    var Number4 = Number(document.getElementById("Num4").value);
    var Number5 = Number(document.getElementById("Num5").value);
    var Number6 = Number(document.getElementById("Num6").value);
    var soChan = 0;
    var soLe = 0;

    if (Number4 % 2 == 0) {
        soChan++;
    } else {
        soLe++;
    }
    if (Number5 % 2 == 0) {
        soChan++;
    } else {
        soLe++;
    }
    if (Number6 % 2 == 0) {
        soChan++;
    } else {
        soLe++;
    }

    document.getElementById("txtResult2").innerHTML = "Số chẵn là: " + soChan + "</br>" + "Số lẽ là: " + soLe;
}
document.getElementById("SubMit").onclick = soND;




                            // !Viết chương trình nhập 3 cạnh của tam giác


// ?khối 1: Dữ liệu đang có sẵn (Input)
/**
 * Nhập 3 cạnh tam giác
 */

// ?Khối 2: các bước xử lý code 
/**
 *  B1: Tạo biến cho 3 cạnh của tam giác
 *  B2: Gán giá trị biến cho 3 cạnh của tam giác vừa tạo;
 *  B3: Lập công thức so sánh:
 * TH1: canhA == canhB && canhB == canhC;
 * ==> Tam giác cân
 * TH2: canhA == canhB || canhA == canhC || canhB == canhC;
 * ==> Tam giác cân
  * TH3: canhA*canhA == canhB*canhB + canhC*canhC;
 * ==> Tam giác vuông
  * TH4: canhB*canhB == canhA*canhA + canhC*canhC;
 * ==> Tam giác cân
  * TH5: canhC*canhC == canhB*canhB + canhA*canhA;
 * ==> Tam giác cân
 * TH6: ==> Tam giác thường
 */
// ?Khối 3: kết quả (outout)
// /** Trả kết quả là tam giác gì id txtResult3


function checkTamGiac() {
    var canhA = Number(document.getElementById("Canha").value);
    var canhB = Number(document.getElementById("Canhb").value);
    var canhC = Number(document.getElementById("Canhc").value);


    if (canhA == canhB && canhA == canhC) {
        document.getElementById("txtResult3").innerHTML = "Tam giác đều!";
    } else if (canhA == canhB || canhA == canhC || canhB == canhC) {
        document.getElementById("txtResult3").innerHTML = "Tam giác cân!";
    } else if (canhA * canhA + canhB * canhB == canhC * canhC) {
        document.getElementById("txtResult3").innerHTML = "Tam giác vuông!";
    } else if (canhC * canhC + canhB * canhB == canhA * canhA) {
        document.getElementById("txtResult3").innerHTML = "Tam giác vuông!";
    } else if (canhA * canhA + canhC * canhC == canhB * canhB) {
        document.getElementById("txtResult3").innerHTML = "Tam giác vuông!";
    } else {
        document.getElementById("txtResult3").innerHTML = "Tam giác thường!";
    }

}

document.getElementById("SUBMIT").onclick = checkTamGiac;



                                     //! Viết chương trình tính ngày tháng năm



// ?khối 1: Dữ liệu đang có sẵn (Input)
//  Nhập 3 dữ liệu ngày,tháng, năm

// ?Khối 2: các bước xử lý code 
/**
 *  B1: Tạo biến cho ngay, thang, nam
 *  B2: Gán giá trị biến cho 3 biến vừa tạo;
 *  B3: Lập công thức tính toán:
 * 
 *  -  TÍNH TOÁN 1 (Ngày hôm qua): 
 *  +    Tìm lần lượt ngày cuối cùng của từng tháng bằng cách dùng hàm if
 *           tháng 12: có 31 ngày ==> in ra mặc định ngày hôm qua của tháng 1/1 là 31/12
 *           tháng 1: có 31 ngày ==> in ra mặc định ngày hôm qua của tháng 1/2 là 31/1
 *           tháng 2: có 28 ngày ==> in ra mặc định ngày hôm qua của tháng 1/3 là 28/2
 *           tháng 3: có 31 ngày ==> in ra mặc định ngày hôm qua của tháng 1/4 là 31/3
 *           tháng 4: có 30 ngày ==> in ra mặc định ngày hôm qua của tháng 1/5 là 30/4
 *           tháng 5: có 31 ngày ==> in ra mặc định ngày hôm qua của tháng 1/6 là 31/5
 *           tháng 6: có 30 ngày ==> in ra mặc định ngày hôm qua của tháng 1/7 là 30/6
 *           tháng 7: có 31 ngày ==> in ra mặc định ngày hôm qua của tháng 1/8 là 31/7
 *           tháng 8: có 31 ngày ==> in ra mặc định ngày hôm qua của tháng 1/9 là 31/8
 *           tháng 9: có 30 ngày ==> in ra mặc định ngày hôm qua của tháng 1/10 là 31/9
 *           tháng 10: có 31 ngày ==> in ra mặc định ngày hôm qua của tháng 1/11 là 31/10
 *           tháng 11: có 30 ngày ==> in ra nmặc định ngày hôm qua của tháng 1/12 là 31/11
 *           Những ngày bình thường trong tháng :    (Ngay - 1) + "/" + Thang + "/" + Nam;
 * 
 * 
 * -  TÍNH TOÁN 2 (Ngày mai): 
 *  +    Liệt kê lần lượt ngày cuối cùng đầu từng tháng bằng cách dùng hàm if
 *           tháng 12: có 31 ngày ==> in ra mặc định ngày mai của tháng 31/12 là 1/1
 *           tháng 1: có 31 ngày ==> in ra mặc định ngày mai của tháng 31/1 là 1/2
 *           tháng 2: có 28 ngày ==> in ra mặc định ngày mai của tháng 28/2 là 1/3
 *           tháng 3: có 31 ngày ==> in ra mặc định ngày mai của tháng 31/3 là 1/4
 *           tháng 4: có 30 ngày ==> in ra mặc định ngày mai của tháng 30/4 là 1/5
 *           tháng 5: có 31 ngày ==> in ra mặc định ngày mai của tháng 31/5 là 1/6
 *           tháng 6: có 30 ngày ==> in ra mặc định ngày mai của tháng 30/6 là 1/7
 *           tháng 7: có 31 ngày ==> in ra mặc định ngày mai của tháng 31/7 là 1/8
 *           tháng 8: có 31 ngày ==> in ra mặc định ngày mai của tháng 31/8 là 1/9
 *           tháng 9: có 30 ngày ==> in ra mặc định ngày mai của tháng 30/9 là 1/10
 *           tháng 10: có 31 ngày ==> in ra mặc định ngày mai của tháng 31/10 là 1/11
 *           tháng 11: có 30 ngày ==> in ra mặc định ngày mai của tháng 30/11 là 1/12
 *           Những ngày bình thường trong tháng :    (Ngay - 1) + "/" + Thang + "/" + Nam;
 */
// ?Khối 3: kết quả (outout)
// /** In kết quả mong muốn tại id txtResult4 và txtResult5




function ngayHomQua() {
    var ngay = Number(document.getElementById("date").value);
    var thang = Number(document.getElementById("month").value);
    var nam = Number(document.getElementById("year").value);

    if (ngay == 1 && thang == 1) {
        document.getElementById("txtResult4").innerHTML = "Ngày hôm qua là:" + "31/12" + "/" + (nam - 1);
    } else if (ngay == 1 && thang == 2) {
        document.getElementById("txtResult4").innerHTML = "Ngày hôm qua là:" + "31/1" + "/" + nam;
    } else if (ngay == 1 && thang == 3) {
        document.getElementById("txtResult4").innerHTML = "Ngày hôm qua là:" + "28/2" + "/" + nam;
    } else if (ngay == 1 && thang == 4) {
        document.getElementById("txtResult4").innerHTML = "Ngày hôm qua là:" + "31/3" + "/" + nam;
    } else if (ngay == 1 && thang == 5) {
        document.getElementById("txtResult4").innerHTML = "Ngày hôm qua là:" + "30/4" + "/" + nam;
    } else if (ngay == 1 && thang == 6) {
        document.getElementById("txtResult4").innerHTML = "Ngày hôm qua là:" + "31/5" + "/" + nam;
    } else if (ngay == 1 && thang == 7) {
        document.getElementById("txtResult4").innerHTML = "Ngày hôm qua là:" + "30/6" + "/" + nam;
    } else if (ngay == 1 && thang == 8) {
        document.getElementById("txtResult4").innerHTML = "Ngày hôm qua là:" + "31/7" + "/" + nam;
    } else if (ngay == 1 && thang == 9) {
        document.getElementById("txtResult4").innerHTML = "Ngày hôm qua là:" + "31/8" + "/" + nam;
    } else if (ngay == 1 && thang == 10) {
        document.getElementById("txtResult4").innerHTML = "Ngày hôm qua là:" + "30/9" + "/" + nam;
    } else if (ngay == 1 && thang == 11) {
        document.getElementById("txtResult4").innerHTML = "Ngày hôm qua là:" + "31/10" + "/" + nam;
    } else if (ngay == 1 && thang == 12) {
        document.getElementById("txtResult4").innerHTML = "Ngày hôm qua là:" + "30/11" + "/" + nam;
    } else {
        document.getElementById("txtResult4").innerHTML = "Ngày hôm qua là:" + (ngay - 1) + "/" + thang + "/" + nam;

    }
}

function ngayMai() {
    var ngay = Number(document.getElementById("date").value);
    var thang = Number(document.getElementById("month").value);
    var nam = Number(document.getElementById("year").value);



    if (ngay == 31 && thang == 12) {
        document.getElementById("txtResult5").innerHTML = "Ngày mai là:" + "1/1" + "/" + (nam + 1);
    } else if (ngay == 31 && thang == 1) {
        document.getElementById("txtResult5").innerHTML = "Ngày mai là:" + "1/2" + "/" + nam;
    } else if (ngay == 28 && thang == 2) {
        document.getElementById("txtResult5").innerHTML = "Ngày mai là:" + "1/3" + "/" + nam;
    } else if (ngay == 31 && thang == 3) {
        document.getElementById("txtResult5").innerHTML = "Ngày mai là:" + "1/4" + "/" + nam;
    } else if (ngay == 30 && thang == 4) {
        document.getElementById("txtResult5").innerHTML = "Ngày mai là:" + "1/5" + "/" + nam;
    } else if (ngay == 31 && thang == 5) {
        document.getElementById("txtResult5").innerHTML = "Ngày mai là:" + "1/6" + "/" + nam;
    } else if (ngay == 30 && thang == 6) {
        document.getElementById("txtResult5").innerHTML = "Ngày mai là:" + "1/7" + "/" + nam;
    } else if (ngay == 31 && thang == 7) {
        document.getElementById("txtResult5").innerHTML = "Ngày mai là:" + "1/8" + "/" + nam;
    } else if (ngay == 31 && thang == 8) {
        document.getElementById("txtResult5").innerHTML = "Ngày mai là:" + "1/9" + "/" + nam;
    } else if (ngay == 30 && thang == 9) {
        document.getElementById("txtResult5").innerHTML = "Ngày mai là:" + "1/10" + "/" + nam;
    } else if (ngay == 31 && thang == 10) {
        document.getElementById("txtResult5").innerHTML = "Ngày mai là:" + "1/11" + "/" + nam;
    } else if (ngay == 30 && thang == 11) {
        document.getElementById("txtResult5").innerHTML = "Ngày mai là:" + "1/12" + "/" + nam;
    } else {
        document.getElementById("txtResult5").innerHTML = "Ngày mai là:" + (ngay + 1) + "/" + thang + "/" + nam;

    }
}

document.getElementById("btnBefor").onclick = ngayHomQua;
document.getElementById("btnAfter").onclick = ngayMai;



                                         //! Tính ngày trong tháng


// ?khối 1: Dữ liệu đang có sẵn (Input)
//  Nhập dữ liệu tháng, năm

// ?Khối 2: các bước xử lý code 
/**
 *  B1: Tạo biến cho  Thang, Nam
 *  B2: Gán giá trị biến cho 2 biến vừa tạo;
 *  B3: Lập công thức so sánh:
 *  -  if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
 *        + NĂM NHUẬN: (thỏa mãn cả 3 điều kiện trên)
 *              +TH1: month == 1     ==> in ra tháng 1 có 31 ngày;
 *              +TH2: month == 2    ==> in ra tháng 2 có 29 ngày;
 *              +TH3: month == 3     ==> in ra tháng 3 có 31 ngày;
 *              +TH4: month == 4     ==> in ra tháng 4 có 30 ngày;
 *              +TH5: month == 5     ==> in ra tháng 5 có 31 ngày;
 *              +TH6: month == 6     ==> in ra tháng 6 có 30 ngày;
 *              +TH7: month == 7     ==> in ra tháng 7 có 31 ngày;
 *              +TH8: month == 8     ==> in ra tháng 8 có 31 ngày;
 *              +TH9: month == 9     ==> in ra tháng 9 có 30 ngày;
 *              +TH10: month == 10     ==> in ra tháng 10 có 31 ngày;
 *              +TH11: month == 11     ==> in ra tháng 11 có 30 ngày;
 *              +TH12: month == 112     ==> in ra tháng 12 có 31 ngày;
 * 
 * 
 * 
 *        + NĂM THƯỜNG: (không thỏa mãn 1 trong 3 điều kiện trên, hoặc cả 3 điều kiện)
 *              +TH1: month == 1     ==> in ra tháng 1 có 31 ngày;
 *              +TH2: month == 2    ==> in ra tháng 2 có 28 ngày;
 *              +TH3: month == 3     ==> in ra tháng 3 có 31 ngày;
 *              +TH4: month == 4     ==> in ra tháng 4 có 30 ngày;
 *              +TH5: month == 5     ==> in ra tháng 5 có 31 ngày;
 *              +TH6: month == 6     ==> in ra tháng 6 có 30 ngày;
 *              +TH7: month == 7     ==> in ra tháng 7 có 31 ngày;
 *              +TH8: month == 8     ==> in ra tháng 8 có 31 ngày;
 *              +TH9: month == 9     ==> in ra tháng 9 có 30 ngày;
 *              +TH10: month == 10     ==> in ra tháng 10 có 31 ngày;
 *              +TH11: month == 11     ==> in ra tháng 11 có 30 ngày;
 *              +TH12: month == 112     ==> in ra tháng 12 có 31 ngày;
 * 
 */
// ?Khối 3: kết quả (outout)
// /** In kết quả  mong muốn tại id txtResult6




function tinhNTT() {
    var month = Number(document.getElementById("month1").value);
    var year = Number(document.getElementById("year1").value);


    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        if (month == 1) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        } else if (month == 2) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 29 ngày" + "(Năm nhuận)";
        } else if (month == 3) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        } else if (month == 4) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        } else if (month == 5) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        } else if (month == 6) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        } else if (month == 7) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        } else if (month == 8) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        } else if (month == 9) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        } else if (month == 10) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        } else if (month == 11) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        } else {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        }
    } else {
        if (month == 1) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        } else if (month == 2) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 28 ngày";
        } else if (month == 3) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        } else if (month == 4) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        } else if (month == 5) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        } else if (month == 6) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        } else if (month == 7) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        } else if (month == 8) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        } else if (month == 9) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        } else if (month == 10) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        } else if (month == 11) {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 30 ngày";
        } else {
            document.getElementById("txtResult6").innerHTML = "Tháng " + month + " có 31 ngày";
        }

    }

}
document.getElementById("btnNTT").onclick = tinhNTT;




                                    //!  Đọc số có ba chữ số


// ?khối 1: Dữ liệu đang có sẵn (Input)
//  Nhập dữ liệu số có ba chữ số

// ?Khối 2: các bước xử lý code 
/**
 *  B1: Tạo biến cho  soCanDoc, soHangTram, soHangChuc,soHangDV,docSoHangTram,docSoHangChuc,docSoHangDV
 *  B2: Gán giá trị biến cho biến vừa tạo;
 *  B3: Lập công thức so sánh:
 * 
 * 
 * switch (soHangTram) {
        case 1:
            docSoHangTram += "Một trăm";
            break;
        case 2:
            docSoHangTram +="Hai trăm";
                break;
        case 3:
            docSoHangTram +="Ba trăm";
            break;
        case 4:
            docSoHangTram +="Bốn trăm";
            break;
        case 5:
            docSoHangTram +="Năm trăm";
            break;
        case 6:
            docSoHangTram +="Sáu trăm";
            break;
        case 7:
            docSoHangTram +="Bảy trăm";
            break;
        case 8:
            docSoHangTram +="Tám trăm";
            break;
        case 9:
            docSoHangTram +="Chín trăm";
            break;

        default:
            alert("Vui lòng nhập lại!");
            break;
    }
 * 
 * 
 *  switch (soHangChuc) {
        case 0:
            docSoHangChuc += " lẻ";
            break;
        case 1:
            docSoHangChuc += " mười";
            break;
        case 2:
            docSoHangChuc +=" hai mươi";
                break;
        case 3:
            docSoHangChuc +=" ba mươi";
            break;
        case 4:
            docSoHangChuc +=" bốn mươi";
            break;
        case 5:
            docSoHangChuc +="  năm mươi";
            break;
        case 6:
            docSoHangChuc +=" sáu mươi";
            break;
        case 7:
            docSoHangChuc +=" bảy mươi";
            break;
        case 8:
            docSoHangChuc +=" tám mươi";
            break;
        case 9:
            docSoHangChuc +=" chín mươi";
            break;

        default:
            alert("Số hàng chục không xác định được");
            break;
    }
 * 
 * 
 * switch (soHangDV) {
        case 0:
            docSoHangDV += "";
            break;
        case 1:
            docSoHangDV += " một";
            break;
        case 2:
            docSoHangDV +=" hai";
                break;
        case 3:
            docSoHangDV +=" ba";
            break;
        case 4:
            docSoHangDV +=" bốn";
            break;
        case 5:
            docSoHangDV +=" năm";
            break;
        case 6:
            docSoHangDV +=" sáu";
            break;
        case 7:
            docSoHangDV +=" bảy";
            break;
        case 8:
            docSoHangDV +=" tám";
            break;
        case 9:
            docSoHangDV +=" chín";
            break;

        default:
            alert("Số hàng đơn vị không xác định được");
            break;
 */
/**    Lập công thức so sánh:
 *  if(soHangChuc == 0 && soHangDV ==0)
 *      TH1: thỏa mãn cả 2 điều kiện trên  ==>  in ra docSoHangTram
 *      TH2: không thỏa 1 trong 2 điều kiện, hoặc cả 2 ==>  in ra docSoHangTram + docSoHangChuc + docSoHangDV;
 * 
 */
// ?Khối 3: kết quả (outout)
// /** In kết quả mong muốn tại id txtResultBaCS



function docSoCoBaChuSo() {
    var soCanDoc = Number(document.getElementById("soCoBaCS").value);
    var soHangTram =Math.trunc(soCanDoc / 100);
    var soHangChuc = Math.trunc((soCanDoc % 100) / 10);
    var soHangDV = (soCanDoc % 100) % 10;



    var docSoHangTram = "";
    switch (soHangTram) {
        case 1:
            docSoHangTram += "Một trăm";
            break;
        case 2:
            docSoHangTram +="Hai trăm";
                break;
        case 3:
            docSoHangTram +="Ba trăm";
            break;
        case 4:
            docSoHangTram +="Bốn trăm";
            break;
        case 5:
            docSoHangTram +="Năm trăm";
            break;
        case 6:
            docSoHangTram +="Sáu trăm";
            break;
        case 7:
            docSoHangTram +="Bảy trăm";
            break;
        case 8:
            docSoHangTram +="Tám trăm";
            break;
        case 9:
            docSoHangTram +="Chín trăm";
            break;

        default:
            alert("Vui lòng nhập lại!");
            break;
    }

    var docSoHangChuc = "";
    switch (soHangChuc) {
        case 0:
            docSoHangChuc += " lẻ";
            break;
        case 1:
            docSoHangChuc += " mười";
            break;
        case 2:
            docSoHangChuc +=" hai mươi";
                break;
        case 3:
            docSoHangChuc +=" ba mươi";
            break;
        case 4:
            docSoHangChuc +=" bốn mươi";
            break;
        case 5:
            docSoHangChuc +="  năm mươi";
            break;
        case 6:
            docSoHangChuc +=" sáu mươi";
            break;
        case 7:
            docSoHangChuc +=" bảy mươi";
            break;
        case 8:
            docSoHangChuc +=" tám mươi";
            break;
        case 9:
            docSoHangChuc +=" chín mươi";
            break;

        default:
            alert("Số hàng chục không xác định được");
            break;
    }

    var docSoHangDV = "";
    switch (soHangDV) {
        case 0:
            docSoHangDV += "";
            break;
        case 1:
            docSoHangDV += " một";
            break;
        case 2:
            docSoHangDV +=" hai";
                break;
        case 3:
            docSoHangDV +=" ba";
            break;
        case 4:
            docSoHangDV +=" bốn";
            break;
        case 5:
            docSoHangDV +=" năm";
            break;
        case 6:
            docSoHangDV +=" sáu";
            break;
        case 7:
            docSoHangDV +=" bảy";
            break;
        case 8:
            docSoHangDV +=" tám";
            break;
        case 9:
            docSoHangDV +=" chín";
            break;

        default:
            alert("Số hàng đơn vị không xác định được");
            break;
    }

    if(soHangChuc == 0 && soHangDV ==0 ){
        document.getElementById("txtResultBaCS").innerHTML= docSoHangTram ;
    }
        document.getElementById("txtResultBaCS").innerHTML= docSoHangTram + docSoHangChuc + docSoHangDV;


}
document.getElementById("btnBaCS").onclick = docSoCoBaChuSo;





                                //! Sinh viên xa trường nhất
// ?khối 1: Dữ liệu đang có sẵn (Input)
//  Nhập dữ liệu tên 3 sinh viên, tọa đọa x của 3 sinh viên, tọa độ y của của 3 sinh viên, tọa độ x của trường, tọa độ y của trường;

// ?Khối 2: các bước xử lý code 
/**
 *  B1: Tạo biến tenSV1, XSV1, YSV1, tenSV2, XSV2, YSV2, tenSV3, XSV3, YSV3, XTH, dSV2, dSV3;
 *  B2: Gán giá trị biến cho biến vừa tạo;
 * 
 *  B3: Lập công thức tính toán quảng đường của từng sinh viên đến trường:
 *      var dSV1 = Math.sqrt( Math.pow((XTH-XSV1),2)+  Math.pow((YTH-YSV1),2)  );
 *      var dSV2 = Math.sqrt( Math.pow((XTH-XSV2),2)+  Math.pow((YTH-YSV2),2)  );
 *      var dSV3 = Math.sqrt( Math.pow((XTH-XSV3),2)+  Math.pow((YTH-YSV3),2)  );
 * 
 * 
 *  B4:  Lập công thức so sánh cho từng quảng đường vừa tính với nhau:
 *      TH1: dSV1 > dSV2 && dSV1 > dSV3   ==> in ra "Sinh viên có đoạn đường dài nhất là: " +  tenSV1;
 *       TH2: dSV2 > dSV1 && dSV2 > dSV3  ==> "Sinh viên có đoạn đường dài nhất là: " +  tenSV2;
 *       TH3: dSV3 > dSV1 && dSV3 > dSV2  ==> "Sinh viên có đoạn đường dài nhất là: " +  tenSV3;
 *       TH4: dSV2 == dSV1 && dSV2 > dSV3  ==> "Sinh viên có đoạn đường dài nhất là: " +  tenSV2 + tenSV1 ;
 *       TH5: dSV2 == dSV3 && dSV2 > dSV1  ==>  "Sinh viên có đoạn đường dài nhất là: " +  tenSV2 + tenSV3 ;
 *       TH6: dSV1 == dSV3 && dSV1 > dSV2  ==> "Sinh viên có đoạn đường dài nhất là: " +  tenSV1 + tenSV3 ;
 *       TH7: dSV1 == dSV3 && dSV1 == dSV2   "Ba sinh viên có đoạn đường dài như nhau";
 *        
 * 
 * 
 * 
 */
// ?Khối 3: kết quả (outout)                
// /** In kết quả mong muốn tại id txtResultDuongDN



function doanDuongDN() {
    var tenSV1 = document.getElementById("sinhVien1").value;
    var XSV1 = Number(document.getElementById("toaDoXSV1").value);
    var YSV1 = Number(document.getElementById("toaDoYSV1").value);

    var tenSV2 = document.getElementById("sinhVien2").value;
    var XSV2 = Number(document.getElementById("toaDoXSV2").value);
    var YSV2 = Number(document.getElementById("toaDoYSV2").value);

    var tenSV3 = document.getElementById("sinhVien3").value;
    var XSV3 = Number(document.getElementById("toaDoXSV3").value);
    var YSV3 = Number(document.getElementById("toaDoYSV3").value);

    var XTH = Number(document.getElementById("toaDoXTH").value);
    var YTH = Number(document.getElementById("toaDoYTH").value);

    var dSV1 = Math.sqrt( Math.pow((XTH-XSV1),2)+  Math.pow((YTH-YSV1),2)  );
    var dSV2 = Math.sqrt( Math.pow((XTH-XSV2),2)+  Math.pow((YTH-YSV2),2)  );
    var dSV3 = Math.sqrt( Math.pow((XTH-XSV3),2)+  Math.pow((YTH-YSV3),2)  );

    if(dSV1 > dSV2 && dSV1 > dSV3){
        document.getElementById("txtResultDuongDN").innerHTML= "Sinh viên có đoạn đường dài nhất là: " +  tenSV1;
    }else if(dSV2 > dSV1 && dSV2 > dSV3){
        document.getElementById("txtResultDuongDN").innerHTML= "Sinh viên có đoạn đường dài nhất là: " +  tenSV2;
    }else if(dSV3 > dSV1 && dSV3 > dSV2){
        document.getElementById("txtResultDuongDN").innerHTML= "Sinh viên có đoạn đường dài nhất là: " +  tenSV3;
    }else if(dSV2 == dSV1 && dSV2 > dSV3){
        document.getElementById("txtResultDuongDN").innerHTML= "Sinh viên có đoạn đường dài nhất là: " +  tenSV2 +", " + tenSV1 ;
    }else if(dSV2 == dSV3 && dSV2 > dSV1){
        document.getElementById("txtResultDuongDN").innerHTML= "Sinh viên có đoạn đường dài nhất là: " +  tenSV2 +", " + tenSV3 ;
    }else if(dSV1 == dSV3 && dSV1 > dSV2){
        document.getElementById("txtResultDuongDN").innerHTML= "Sinh viên có đoạn đường dài nhất là: " +  tenSV1 +", " + tenSV3 ;
    }else{
        document.getElementById("txtResultDuongDN").innerHTML= "Ba sinh viên có đoạn đường dài như nhau";

    }


}

document.getElementById("btnDuongDN").onclick = doanDuongDN;
