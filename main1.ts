import {Library} from "./model1/library";
import {Book} from "./model1/book";
import {Magazine} from "./model1/Magazine";
import {Newspaper} from "./model1/newspaper";
import {BookManagement} from "./service1/product-Management";
let readlineSync = require('readline-sync');
let bookManagement = new BookManagement();
function main() {
    let menu = `-----Menu chính--------
    1.Thêm mới tài liệu
    2.Hiển thị tài liệu
    3.Xóa tài liệu
    4.Tìm kiếm tài liệu
    0.Exit`
    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question('Enter choice: ');
        switch (choice) {
            case 1:
                add();
                break;
            case 2:
                display();
                break;
            case 3:
                remove();
                break;
            case 4:
                search1();
                break;
        }
    } while (choice !==0);
}
main()

function add() {
    let menu = `--------Chọn tài liệu--------
    1.Book
    2.Magazine
    3.Newspaper
    0.Exit`
    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question('Enter choice: ')
        switch (choice) {
            case 1:
                book();
                break;
            case 2:
                magazine();
                break;
            case 3:
                newspaper();
                break;

            case 4:
                search1();
                break;

        }
    } while (choice !==0)
}
add();
function book() {
    console.log('--------Hiển thị sách mới--------');
    let documentCode = +readlineSync.question('Enter documentCode: ');
    let imprint = readlineSync.question('Enter imprint: ');
    let releaseNumber = +readlineSync.question('Enter releaseNumber : ');
    let name = readlineSync.question('Enter name: ');
    let writerName = readlineSync.question('Enter writerName: ');
    let numberOfPage = readlineSync.question('Enter numberOfPage: ');
    let book = new Book(documentCode,imprint,releaseNumber,name,writerName,numberOfPage);
   bookManagement.add(book);

}
function magazine() {
    console.log('------Hiển thị tạp chí mới--------');
    let documentCode = +readlineSync.question('Enter documentCode: ');
    let imprint = readlineSync.question('Enter imprint: ');
    let releaseNumber = +readlineSync.question('Enter releaseNumber : ');
    let name = readlineSync.question('Enter name: ');
    let issueNumber = +readlineSync.question('Enter issueNumber: ');
    let releaseMonth = +readlineSync.question('Enter releaseMonth: ');
    let magazine = new Magazine(documentCode,imprint,releaseNumber,name,issueNumber,releaseMonth);
    bookManagement.add(magazine);
}
function newspaper() {
    console.log('-------Hiển thị báo mới--------');
    let documentCode = +readlineSync.question('Enter documentCode: ');
    let imprint = readlineSync.question('Enter imprint: ');
    let releaseNumber = +readlineSync.question('Enter releaseNumber : ');
    let name = readlineSync.question('Enter name: ');
    let releaseDate = readlineSync.question('Enter releaseDate: ')
    let newspaper = new Newspaper(documentCode,imprint,releaseNumber,name,releaseDate);
  bookManagement.add(newspaper);
}

function display() {
    console.log('-------Hiển thị tài liệu---------');
    console.log(bookManagement.fillAll());

}

function remove() {
    let idDelete= +readlineSync.question('Enter add: ');
   bookManagement.delete(idDelete);
   console.log('Xóa thành công');

}

function search1() {
    let addSearch = readlineSync.question('Enter search: ')
    console.log(bookManagement.search(addSearch));
    console.log('Tìm kiếm thành công');
}

