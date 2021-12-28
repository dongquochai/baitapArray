var numArray = [];

function nhapNum(){
    var num = Number(document.getElementById("ipnNumBer").value);
    numArray.push(num);
    document.getElementById("txtArray").innerHTML = numArray ;
}
document.getElementById("btnNum").onclick = nhapNum ;

// Bài 1 : Tính Tổng Dương
function tinhDuong(){  
   for (n = 0, i = 0; i< numArray.length ; i++) {
     if(numArray[i] > 0){
        n += numArray[i];
     }     
   }
   document.getElementById("txttinhDuong").innerHTML="Tổng Số Dương:" + n;
}
document.getElementById("btntinhDuong").onclick = tinhDuong;

// bài 2 : Đếm số
function DemSo(){
    var dem= 0
    for(var i =0 ;i< numArray.length;i++){
        if(numArray[i] > 0){
            dem++;
        }
    }
    document.getElementById("txtdemSo").innerHTML="Số dương:"+dem;
}
document.getElementById("btndemSo").onclick= DemSo;
// bai 3 : tìm số
function timMIN(){
    var min= numArray[0] ;
    for(var i=1;i<numArray.length;i++){
        if(numArray[i] < min){
            min=numArray[i];
        }
    }
    document.getElementById("txtMIN").innerHTML="Số nhỏ nhât:" +min;
}
document.getElementById("btnMIN").onclick=timMIN;
// bài 4 : tìm số dương nhỏ nhất 
function timduongMIN(){
    var numDuong = [];
    for(var i =0 ; i <numArray.length;i++){
        if(numArray[i]> 0){
            numDuong.push(numArray[i]);
        }
    }
    var minDuong = numDuong[0];
    if(numDuong.length >0){
        for(var i= 0; i < numDuong.length; i++){
            if(numDuong[i] < minDuong){
                minDuong = numDuong[i];
            }
        }
    document.getElementById("txttimDuongMin").innerHTML="Số dương nhỏ nhất là:" + minDuong;
    }else{
        document.getElementById("txttimDuongMin").innerHTML="Không có số dương";
    }
}
document.getElementById("btntimDuongMin").onclick=timduongMIN;
//Bài 5 : Tìm Số Chẵn cuối cùng
function timChan(){
    var n = -1; 
    for(var i = 0 ; i<numArray.length; i++){
        if(numArray[i] %2 ==0){
            n = numArray[i];
        }
    }
    document.getElementById("txtChanEND").innerHTML="Số chẵn cuối cùng:" + n;
}
document.getElementById("btnChanEND").onclick=timChan;
// Bài 6 :  Đổi chỗ vị trí trong mảng
function doiCho(){
    var newArray= [];
    var viTri1 = Number(document.getElementById("inpviTri1").value);
    var viTri2 = Number(document.getElementById("inpviTri2").value);
    var temp = 0;
    for(var i = 0 ; i< numArray.length ; i++){
        newArray.push(numArray[i]);
    }
    temp = newArray[viTri1] ;
    newArray[viTri1] = newArray[viTri2];
    newArray[viTri2] = temp;
    
    document.getElementById("txtDoiCho").innerHTML = "Mảng sau khi đổi:" +newArray;
}
document.getElementById("btnDoiCho").onclick=doiCho;

// Bài 7 :  Sắp xếp tăng dần 
function tangDan(){
    var mtangDan = [];
    var temp = 0;
    for(var i= 0 ; i < numArray.length; i++){
        mtangDan.push(numArray[i]);
    }
    for(var i =0 ; i< mtangDan.length; i++){
        for(j =0 ; j <mtangDan.length; j++){
            if(mtangDan[j] > mtangDan[j + 1]){
                 temp = mtangDan[j];
                 mtangDan[j] = mtangDan[j+1];
                 mtangDan[j +1] = temp;
            }
        }
    }
    document.getElementById("txttangDan").innerHTML="Mảng sau khi tăng:" + mtangDan;
}
document.getElementById("btntangDan").onclick=tangDan;

// bài 8 : tìm số nguyên tố đầu tiên 
function soNguyenTo(){
    var count = 0 ;
    var numFirst = 0;
    for(var i =0 ; i < numArray.length; i++){
        if(numArray[i] >= 2){
        for(var j = 2 ; j <= Math.sqrt(numArray[i]) ; j++){
            if(numArray[i] % j ==0){
                count++;
              }
            }
         if(count==0){
            numFirst = numArray[i];
            break;
         }
         count= 0;
        }
    }
    document.getElementById("txtSoNT").innerHTML = "Số nguyên tố đầu tiên: " + numFirst;
}
document.getElementById("btnSoNT").onclick=soNguyenTo;

// Bài 9 : Đếm số nguyên 
var numArray2 =[] ;
function nhapNum2(){
    var num2 = Number(document.getElementById("inpNumBer2").value);numArray2.push(num2);
    document.getElementById("txtNhapSo2").innerHTML=numArray2;
}
document.getElementById("btnNhapSo2").onclick=nhapNum2;

function demSoNguyen(){
    var count = 0;
    for(var i =0 ; i < numArray2.length; i++){
        if(Number.isInteger(numArray2[i])){
            count++;
        }
    }
    document.getElementById("txtdemSo2").innerHTML="Số nguyên:" + count; 
}
document.getElementById("btndemSo2").onclick = demSoNguyen;
// bài 10 : so sánh số lượng  số âm và dương 

function soSanhAD() {
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuong++;
        }
        if (numArray[i] < 0) {
            soAm++;
        }
    }
    if (soDuong > soAm) {
        document.getElementById("txtsoSanh").innerHTML = "Số dương" + " > Số âm";
    } else if (soDuong < soAm) {
        document.getElementById("txtsoSanh").innerHTML = "Số dương" + " < Số âm";
    } else {
        document.getElementById("txtsoSanh").innerHTML = "Số dương" + " = Số âm";
    }
}
document.getElementById("btnsoSanh").onclick = soSanhAD;