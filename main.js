//                                   #Javascript Array Tasks

//                                         ##Task-01

// Üç addan ibarət massiv yaradın.
// Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin.
// Massivi konsola çıxarın.

// let arr = ["Amir", "Murad", "Fikret"];
// arr[1] = "Classified";
// console.log(arr);


//                                             ##Task-02


// Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın.
// Massiv elementlərin düzün.
// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
//Episode 4: New Hope
//Episode 5: Empire strikes back
//Episode 6: Return of the Jdi

// let arr = ["New Hope", "Empire strikes back", "Return of the Jdi"];
// console.log(`Episode 4: ${arr[0]}, Episode 5: ${arr[1]}, Episode 6: ${arr[2]}`);



//                                              ##Task-03

// let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
// ];
// Şöbə işçilərinin əmək haqqını təhlil etmək üçün proqram tərtib edin.
// Şöbədə müxtəlif maaşlarla 10 nəfər çalışır. Şöbə işçilərinin əmək haqlarını təhlil etmək
// üçün proqram tərtib edin.
//  - Bütün bir departamentin bir il üçün ümumi maaşlarının cəmini qaytaran bir funksiya yazın.
// salary massivi əsasında il ərzində bütün işçilərin maaşlarının cəmini qaytaran
//  getAnnualSalary() funksiyasını yazın.
// - Ay nömrəsinə görə işçilərin aylıq maaşlarını massiv halında almaq üçün funksiya yazın.
// Ayın nömrəsini parametr kimi qəbul edən və salary massivindən
//  həmin ay üçün işçi maaşlarını massiv halında qaytaran getMonthlySalary() funksiyasını yazın.
// Ayın nömrəsi elementin indeks nömrəsi ilə eyni deyil.
// - Rüb ərzində maaşların ümumi cəmini qaytaran funksiya yazın.
// Parametr kimi rübün rəqəmini (1, 2, 3 və ya 4) qəbul edən və
//  salary massivi əsasında həmin rüb üçün şöbənin bütün
// işçilərinin maaşlarının cəmini qaytaran getQuarterSalary() funksiyasını yazın.
// Rüb - 3 aylıq bir müddətdir.

// function getAnnualSalary(arr) {
//     let sum = 0;
//     for (let index = 0; index <= arr.length - 1; index++) {
//         for (let j = 0; j < arr[index].length; j++) {
//             sum += arr[index][j];
//         }
//     }
//     console.log("bütün işçilərin maaşlarının cəmi", sum);
//     return sum;
// }
// getAnnualSalary(salary);


// function getMonthlySalary(array, ay) {
//     let ayIndex = ay - 1;
//     let yekun = [];
//     for (let index = 0; index < array.length; index++) {
//         yekun.push(array[index][ayIndex]);
//     }
//     console.log("Ay üçün işçi maaşları", yekun);
//     return (yekun);

// }

// getMonthlySalary(salary, 8)


// function getQuarterSalary(data, rubNum) {
//     let totalSum = 0;
//     for (let q = 1; q <= rubNum; q++) {
//         let rubStart = (q - 1) * 3;
//         let rubEnd = rubStart + 3;

//         for (let worker = 0; worker < data.length; worker++) {
//             for (let month = rubStart; month < rubEnd; month++) {
//                 totalSum += data[worker][month];
//             }
//         }
//     }

//     console.log(`${rubNum} rübün maaş cəmi: ${totalSum}`);
//     return totalSum;
// }

//     getQuarterSalary(salary, 3);


//                                           ##Task-04

// İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massivə yazan və
// ən kiçik ədədi konsola çıxaran proqram yazın.

// function minNum(a, b, c, d, e) {
//     let arr = [a, b, c, d, e];
//     let min = Math.min(a, b, c, d, e);
//     console.log("En kicik eded:", min);
// }

// minNum(32, 3, 8, 23, 56 );


//                                            ##Task-05

// Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin.
// '32, 31, 34, 36, 31' mətni verilmişdir ,İçindəki vergülləri nöqtəli
// vergüllə əvəz edin.(Massivden sitifade ederek)(join)

// let words = '32, 31, 34, 36, 31';

// function replaceArr(text) {
//     let arr = text.split(',');
//     let newText = arr.join(';');

//     return newText;
// }

// console.log(replaceArr(words));




//                                                Task-06

// Üç qrup yoldaşının adlarından ibarət massiv yaradın;
// Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin;
// İlk adı silin;
// Massivi konsola çıxarın.

// let arr1 = ["Zaur", "Faiq", "Namiq"];
// let arr2 = ["Rufet"];

// function AddedDeletedArr(params1, params2) {

// arr1.push(...arr2);
// arr1.shift();
// console.log(arr1);

// }

// AddedDeletedArr(arr1, arr2);




//##Task-10

// Proqramlaşma şöbəsinin işçilərini saxlayan massiv yaradın.
// Şirkətin 10 işçisi haqqında məlumat olan massiv verilib. development massivi yaradın,
// hansıki proqramlaşma şöbəsinin işçilərini özündə saxlayacaq,
// yəni department özəlliyinin dəyəri «development» olan işçiləri.

// let employees = [
// [ 'Jaylee Macy', 'marketing' ],
// [ 'John Smith', 'management' ],
// [ 'Blossom Hartley', 'design' ],
// [ 'Austin Carpenter', 'marketing' ],
// [ 'Joan Knowles', 'development' ],
// [ 'Sally Nunez', 'management' ],
// [ 'Laurel Ward', 'development' ],
// [ 'Lark Simon', 'marketing' ],
// [ 'Jane Stone', 'management' ],
// [ 'Courtney Olson', 'development' ],
// ];


// function getEmployees(params, departmentName) {
//     let result = [];
//     for (let i = 0; i < params.length; i++) {
//         if (params[i][1] === departmentName) {
//             result.push(params[i]);
//         }
//     }
//     console.log(result);
//     return result;
// }

// getEmployees(employees, 'development');



//##Task-13

// Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola
// bütün mənfi ədədləri çıxaran funksiya yazın.

// let arr = [3, -56, -32, 21, 90, -38, 16];

// function menfiEded(params) {
//     for (let index = 0; index < params.length; index++) {

//         if (params[index]<0) {
//             console.log(params[index]);
//         }

//     }

// }

// menfiEded(arr)




//##Task-14

// Rəqəmlər massivini parametr kimi qəbuil edən və həmin massivdəki bütün müsbət
// ədədləri konsola çıxaran funksiya yazın.
// İterasiya üçün anonim funksiyadan istifadə edin.

// let arr = [3, -56, -32, 21, 90, -38, 16];

// let musbetEded =function (params) {
//     for (let index = 0; index < params.length; index++) {

//         if (params[index]>0) {
//             console.log(params[index]);
//         }

//     }
// }
// musbetEded(arr);














// ##Task-08
// Massivin maksimal dəyərini tapın.
// 10 rəqəmdən ibarət massiv yaradın.
// Math.max funksiyasından istifadə edərək onların arasında maksimumu tapın.
// spread-operatorundan istifadə edərək massiv arqumentlərini funksiyaya ötürün.


// let numbers = [15, 72, 8, 99, 34, 56, 120, 43, 7, 88];

// let maxNum = Math.max(...numbers);

// console.log("Maksimal dəyər:", maxNum);



// ##Task-09
// Massivin bütün elementlərinin dəyərin ikiqat artırın.
// 5 rəqəmdən ibarət massiv yaradın.
// Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın.
// Orijinal massivin dəyişmədiyini yoxlayın.


// let arr = [3, 8, 12, 5, 7];

// let newArr = [...arr];

// for (let i = 0; i < newArr.length; i++) {
//     newArr[i] = newArr[i] * 2;
// }

// console.log("Orijinal massiv:", arr);    
// console.log("Yeni massiv:", newArr); 



// ##Task-12
// Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri
// qaytaran sortArray funksiyasını yazın.


// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];

// function sortArray(params) {
//     return params.sort((a, b) => a - b);
// }

// let sortedArray = sortArray(array);
// console.log(sortedArray);


// ##Task-13
// Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola
// bütün mənfi ədədləri çıxaran funksiya yazın.

// ##Task-13
// Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola
// bütün mənfi ədədləri çıxaran funksiya yazın.

// let arr = [3, -5, 32, -45, -22, 87, 75];

// function menfiEded(params) {
//     return params.filter(num => num < 0);
// }

// console.log(menfiEded(arr));






                                            //##Task-15

// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

// function printWithDashes(name) {
//     console.log("-" + name + "-");
// }


// function printWithHearts(name) {
//     console.log("<3<3<3<3 " + name + "<3<3<3<3 ");
// }


// function printWithIndex(name, index) {
//     console.log(index + ": " + name);
// }

// names.forEach(printWithDashes);
// names.forEach(printWithHearts);
// names.forEach(printWithIndex);



// ##Task-16
// Kebab-case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə
//  çevirən kebabToUpper funksiyasını yazın.
// INPUT: console.log(kebabToUpper('first-user'));
// OUTPUT: FIRST_USER


// function kebabToUpper(text) {
//     return text.split('-').join('_').toUpperCase();
// }


// console.log(kebabToUpper('first-user'));




// ##Task-17
// Orijinal massivin elementlərindən ibarət yeni massiv yaradın.
// Rəqəmlər massivi verilmişdir.
// Aşağıdakı kimi dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:

// - mənfi ədədlər müsbət olublar;
// - müsbət ədədlər ikiqat artırılıb.
//   let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

// const newNumbers = numbers.map(x => x < 0 ? x* -1 : x * 2);


// console.log(newNumbers);








// ##Task-18
// Mətnlər massivini parametr kimi qəbul edən və massivin ilk üç simvoldan
//  ibarət elementini qaytaran funksiya yazın.


// function firstThreeChars(arr) {
//     return arr.map(str => str.slice(0, 3));
// }

// const words = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// console.log(firstThreeChars(words)); 


// ##Task-19
// Adlar massivi verilib. A hərfi ilə başlayan orijinal massivdəki
// elementlərdən ibarət yeni massiv yaradın.


// const names = ["Amir", "Alex", "Malik", "Angela", "Trevor", "Anna"];

// const nameFirstA = names.filter(name => name[0] === "A");

// console.log(nameFirstA);



// ##Task-20
// addTax() funksiyası yaradın. Verilmiş ƏDV-siz qiymətlərlə olan
// price massivini ona ötürün. addTax() funksiyasının köməyi ilə ƏDV ilə
// qiymətlərin daxil olduğu massiv yaradın və onu konsola çıxarın. ƏDV 20% təşkil edir.

// let price = [34, 76, 89, 34, 45, 54 ];

// function addTax(prices) {
//     return price.map(prices => prices * 1.2 );

// }

// let priceWithFaiz  = addTax(price);

// console.log(priceWithFaiz);



// ##Task-21
// Rəqəmlər massivini parametr kimi qəbul edən və massivdə neçə tək və cüt ədədin
// olması barədə məlumatı qaytaran countEvensAndOdds() funksiyasını yazın.
// Numune: Funksiya «Massivdə 4 cüt və 2 tək ədəd var» formasında mesaj qaytarır.

// let number = [22, 31, 28, 75, 56, 44];

// function countEvensAndOdds(nums){
//     count1 = nums.filter(num => num % 2 === 0).length;
//     count2 = nums.filter(num=> num % 2 !== 0).length;
//     return `Ededlerin sayi - Cüt: ${count1} Tek: ${count2}`;
// }

// console.log(countEvensAndOdds(number));
