import {Cadres} from "./model/cadres";
import {CadresManagement} from "./service/cadresManagement";
import {Engineer} from "./model/engineer";
import {Worker} from "./model/worker";
import {Staff} from "./model/Staff";

let readlineSync = require('readline-sync');
let cadresManagement = new CadresManagement();

function main() {
    let menu = `---------Menu chính-----------
    1.Thêm nhân viên
    2.Hiển thị danh sách
    3.Tìm nhân viên
    0.Exit`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                add();
                break;
            case 2:
                display();
                break;
            case 3:
                search1();
                break;

        }
    } while (choice !== 0);
}

main();

function add() {
    let menu = `---------Chọn cán bộ-----------
    1.Worker
    2.Engineer
    3.Staff
    0.Exit`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                worker();
                break;
            case 2:
                engineer();
                break;
            case 3:
                search1();
                break;

        }
    } while (choice !== 0);
}

add();

function worker() {
    console.log('---------Hiển thị thêm công nhân mới-----------');
    let fullName = readlineSync.question('Enter fullName :  ');
    let age = +readlineSync.question('Enter age :  ');
    let gender = readlineSync.question('Enter gender :  ');
    let address = readlineSync.question('Enter address :  ');
    let rank = +readlineSync.question('Enter Rank : ')
    let worker = new Worker(fullName, age, gender, address, rank)
    cadresManagement.add(worker);
}

function engineer() {
    console.log('---------Hiển thị thêm kỹ sư mới-----------');
    let fullName = readlineSync.question('Enter fullName :  ');
    let age = +readlineSync.question('Enter age :  ');
    let gender = readlineSync.question('Enter gender :  ');
    let address = readlineSync.question('Enter address :  ');
    let trainingIndustry = readlineSync.question('Enter trainingIndustry : ')
    let engineer = new Engineer(fullName, age, gender, address, trainingIndustry)
    cadresManagement.add(engineer);
}

function staff() {
    console.log('---------Hiển thị thêm nhân viên mới-----------');
    let fullName = readlineSync.question('Enter fullName :  ');
    let age = +readlineSync.question('Enter age :  ');
    let gender = readlineSync.question('Enter gender :  ');
    let address = readlineSync.question('Enter address :  ');
    let work = readlineSync.question('Enter majors : ')
    let staff = new Staff(fullName, age, gender, address, work)
    cadresManagement.add(staff);
}

function display() {
    console.log(`--------------Hiển thị danh sách---------------`)
    console.log(cadresManagement.findAll());
}

function search1() {

    let addSearch = readlineSync.question(' Enter add: ')
    console.log(cadresManagement.search(addSearch))
}