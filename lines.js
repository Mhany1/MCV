const lineOneBus = $("#lineOne");
const lineTwoBus = $("#lineTwo");
let busFromApi;

const showInitialState = () => {
    $(document).ready(function () {
        $.get('./data.json', function (data) {
          let fetchedData = JSON.parse(data);
          busFromApi = fetchedData;
            const lineOneFilter = busFromApi.filter(k => k.LineName === 'Line 1')
            const lineTwoFilter = busFromApi.filter(o => o.LineName === 'Line 2')
            for (let i = 1; i < lineOneFilter.length; i++) {
                const bus = lineOneFilter[i];
                lineOneBus[0].innerHTML +=
                 `<div style="justify-content: center;" class="d-flex">
                <div  class="col-3 text-center totbus">
                    <img class="w-75 pt-5 pb-0 mb-0 bus" src="./img/buss.png" alt="">
                    <small class="text">${bus.BusModel}</small><br>
                    <small class="id">${bus.BusID}</small>
                 </div> 
                <div class="col-3">
                 <div class="parentt mt-0">
                     <img class="image11 w-100" src="./img/moh.png" alt="">
                     <small class="image22">${bus.StationName}</small>
                     <small class="image222">${bus.StationID}</small>
                 </div>
                </div>
            </div>
                    `;
            }

            for (let t = 0; t < lineTwoFilter.length; t++){
                const bus = lineTwoFilter[t];
                lineTwoBus[0].innerHTML += `<div style="justify-content: center;" class="d-flex">
                <div  class="col-3 text-center totbus1">
                    <img class="w-75 pt-5 pb-0 mb-0 bus" src="./img/b2.png" alt="">
                    <small class="text">${bus.BusModel}</small><br>
                    <small class="idd">${bus.BusID}</small>
                 </div> 
                <div class="col-3 ">
                 <div class="parentt mt-0">
                     <img class="image11 w-100" src="./img/moh.png" alt="">
                     <small class="image22">${bus.StationName}</small>
                     <small class="image222">${bus.StationID}</small>
                 </div>
                </div>
            </div>`;
            }

        },"text");
    });    
};  
showInitialState()