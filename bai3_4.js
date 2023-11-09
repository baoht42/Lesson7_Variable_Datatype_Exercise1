let inputR = prompt('Nhập vào bán kính hình tròn: ');
let r = parseInt(inputR);
let c = 2*r* (Math.PI);
let s = r * r * (Math.PI);
document.write('Chu vi hình tròn: ' + c );
document.write('<br/>');
document.write('Diện tích hình tròn: ' + s);