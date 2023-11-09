let inputToan = prompt('Nhap diem Toan: ');
let inputLy = prompt('Nhap diem Ly: ');
let inputHoa = prompt('Nhap diem Hoa: ');
let toan = parseInt(inputToan);
let ly = parseInt(inputLy);
let hoa = parseInt(inputHoa);
let tongDiem = toan + ly + hoa;
let avgDiem = tongDiem / 3;
document.write('Tong diem: ' + tongDiem);
document.write('<br/>')
document.write('Diem trung binh:' + avgDiem);