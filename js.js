// let cities = [{
//     id: 1,
//     name: 'Tbilisi'
// }, {
//     id: 2,
//     name: 'Kutaisi'
// }, {
//     id: 3,
//     name: 'Rustavi'
// },
// {
//     id: 4,
//     name: 'Telavi'
// }
// ];

// let road = [
//     {
//     CityId: 1,
//     City2Id: 2
//     }, {
//     CityId: 3,
//     City2Id: 1
//     }, {
//     CityId: 3,
//     City2Id: 2
//     }, {
//         CityId: 3,
//         City2Id: 4,

//     }
// ];




// let roadId,cityId;
// let roundIdA, roundIdB;
// function checkCitiesConnected(cityList, roadList, CityIdA = 1, CityIdB = 2) {
//     cityId = cityList.map((x) => x.id);
   
//      roadId = roadList.map((x) => Object.values(x));
//      roadId.unshift([0]);   
//         for (var i = 0; i < roadId.length; i++){       
//     if (roadId[i].indexOf(cityId[CityIdB]) != -1 && roadId[i].indexOf(cityId[CityIdA]) != -1) {
//         i++;
//          console.log(`Path Is Available from ${CityIdA} To ${CityIdB}`);
       
//     // } else if (roadId[i].indexOf(cityId[CityIdB]) === -1 || roadId[i].indexOf(cityId[CityIdA]) === -1){
//     //     let roundCity = [];
//     //   function findCity(CityIdA,CityIdB){     
//     //     let newRoad = roadId.filter(x => x === CityIdA || x === CityIdB); 
//     //     if (cityId[CityIdA] === newRoad || cityId[CityIdB] === newRoad){
//     //         roundCity.push(newRoad);
            
//     //     }
//     //     return roundCity;
//     //   }
        
//     } else {
//         console.log('No Path');
//     }
// }
// }


//  checkCitiesConnected(cities, road, 4,3);

// // function fib(n){
// //     if (n === 1 || n === 2){
// //         return 1;
// //     } 
// //     return fib(n - 1) + fib(n - 2);

// // }

// // function faq(n){
// //     if (n === 0){
// //         return 1;
// //     }
// //     return faq(n - 1) * (n);
    
// // }

