/*Javascipt Document 


Hàm xử lí mảng : 
+ Duyệt qua phần tử trong mảng
Arr.map(x => {//Xử lí các vấn đề liên quan trong mảng };
+ Tạo mảng mới , chỉ lấy các giá trị thõa mãn điều kiện callback 
Const number= [ 1 , 2 ,3, 4 ]
Const numberFilter = number.filter(x => x > 3) ;
+ Duyệt qua từng phần tử của mảng 
Const number = [1,2,3,4]
Number.forEach(number => console.log(number)}

+ Hàm tích lũy giá trj
Const sum = arr.reduce((acc , num) => acc + num , 0
+ Hàm tìm , find , trả về phẩn tử đầu tiên thõa mãn điều kiện trong hàm callBack
Const checkNumber = arr.find(x => x^2 > 5)
+ Hàm some trả về true nếu 1 phần tử trong mảng thõa mãn điều kiện 
+ Hàm every trả về true nếu tất cả  phẩn tử trong mảng thõa thõa mãn điều kiện cảu hàn callback
+ Hàm kết hợp 2 mảng const result = arr1.concat( arr2)
+ arr. push(5 ) 
+ hàm pop , arr.pop() Loại bỏ phẩn tử cuối cung 
+ hàm shift() : loại bỏ phần tử đầu tiên 
+unshift(element) : Thêm  phần tử vào đầu mẳng   

/////////////////////////////////////////////////////////////
Hàm xử lí chuỗi 
+ Chia chuỗi thành 1 mảng dựa trên dấu phân cách 
const str = “Hoang  Trong Minh “ 
Const arrName = str.split(“,”)

+ Hàm thay thế một phẩn tử của chuỗi bằng 1 phần tử khác ( replace)
Const hotenCon = “ Hoang Trong Minh “ 
Const hoTenBo = hotenCon.replace(“Minh “, “Quang”)
+ Hàm toUpperCase(chuyen thanh chu viet hoa)  , với hàm toLowerCase(chuyen thanh chu thuong
+ Hàm strim bỏ qua khoảng trắng đầu và cuối chuỗi 
Cont hello = “      Xin chao, Việt Nam …….” 
Const helo = hello.strim() ; 

+ Hàm includes kiểm tra một chuỗi có chứa một chuỗi con nhất định không 
cons str = “ hello world “ 
+ leng : Trả về độ dài của chuỗi 
+ indexOf : Trả về vị trí đầu tiên trong chuỗi 
+ substring(start, end) Trả về chuỗi con từ vị trí start đến vị trí end 
+ 

/////////////////////////////////////////////////////////////
+ Hàm xử lí đối tượng
// Trả về một mảng chửa tên thuộc tính 
obj = { id : 1 , name : “minh”  , address : “ha tinh “}
Object.key(obj)   trả về 1 mảng các thuộc tính [id , name , address]
// Trả về 1 chuỗi các giá trị dung Object.value(obj)
// Trả về 1 mảng các cặp Object.entries(obj)


///////////////////////////////////////////////////////////////////////////
Hàm xử lí số 
+ Chuyển số thành chuỗi và làm traonf số với số lượng chữ số thập phân toFixed(digits) 
+ Chuyển chuỗi thành số nguyên parseInt(string)
+Chuyển chuỗi thành số thực parseFloat()

//////////////////////////////////////////////////////////////////////////////////
Hàm xử lí Json
Chuyển Json thành đối tượng , chuyển đối tượng thành strong 
*/


