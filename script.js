//------------------------------Создаем объекты радиостанций----------------------------------------------------
/*let radioRelaxInstrumental = {station: 'Radio Relax Instrumental',
		urlStation:'http://online.radiorelax.ua/RadioRelax_Instrumental_HD',
		pictureStation:' http://top-radio.ru/assets/image/radio/180/Relax_Instrumental.png'};*/
/*let radioRelaxCafe = {station:'Radio Relax Cafe',
		urlStation:'https://online.radiorelax.ua/RadioRelax_Cafe_HD',
		pictureStation:'http://top-radio.ru/assets/image/radio/180/Relax_Cafe.png'};
let radioMonteCarlo = {station:'Radio Monte Carlo',
		urlStation:'http://icecast227.ptspb.ru:8104/monte',
		pictureStation:'https://montecarlo.ru/uploads/83/95/baa07c30b5c7dc445f71380a7803.png'};
let radioRelaxBelarus = {station:'Radio Relax Belarus',
		urlStation:'http://live.humorfm.by:8000/radiorelax',
		pictureStation:'https://onlineradiomix.com/resource/images/2019/02/relaks-radio.webp'};
let soundParkDeep = {station:'Sound Park Deep',
	urlStation:'http://185.220.35.56:8000/96',
	pictureStation:'https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/a4/55/bf/a455bf42-0c47-6870-f144-' +
					'8db3deda206c/AppIcon-0-1x_U007emarketing-0-0-85-220-0-6.png/217x0w.png'};
let radioRelaxInternational = {station:'Radio Relax International',
		urlStation:'https://online.radiorelax.ua/RadioRelax_Int_HD',
		pictureStation:'http://top-radio.ru/assets/image/radio/180/Relax_International.png'};*/
const STATIONS = {
	radioRelaxInstrumental: {
		title: 'Radio Relax Instrumental',
		url: 'http://online.radiorelax.ua/RadioRelax_Instrumental_HD',
		picture: ' http://top-radio.ru/assets/image/radio/180/Relax_Instrumental.png'
	},
	radioRelaxCafe: {
		title: 'Radio Relax Cafe',
		url: 'https://online.radiorelax.ua/RadioRelax_Cafe_HD',
		picture: 'http://top-radio.ru/assets/image/radio/180/Relax_Cafe.png'
	},
	radioMonteCarlo: {
		title: 'Radio Monte Carlo',
		url: 'http://icecast227.ptspb.ru:8104/monte',
		picture: 'https://top-radio.ru/assets/image/radio/180/mc.png'
	},
	radioRelaxBelarus: {
		title: 'Radio Relax Belarus',
		url: 'http://live.humorfm.by:8000/radiorelax',
		picture: 'https://top-radio.ru/assets/image/radio/180/relaxby.png'
	},
	soundParkDeep: {
		title: 'Sound Park Deep',
		url: 'http://185.220.35.56:8000/96',
		picture: 'https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/a4/55/bf/a455bf42-0c47-6870-f144-' +
			'8db3deda206c/AppIcon-0-1x_U007emarketing-0-0-85-220-0-6.png/217x0w.png'
	},
	radioRelaxInternational: {
		title: 'Radio Relax International',
		url: 'https://online.radiorelax.ua/RadioRelax_Int_HD',
		picture: 'http://top-radio.ru/assets/image/radio/180/Relax_International.png'
	}
};
//-------------------------------Создаем массив объектов радиостанций----------------------------------------

let radioStations = Object.keys(STATIONS);
let stationImg = document.createElement('img');

//-------------------------------Выводим в браузер список радиостанций---------------------------------------

let parentSide = document.querySelector('.side');

/*radioStations.forEach(function(stationId){
	let par = document.createElement('div');
	par.className = 'name-radio';
	par.setAttribute('name', stationId);
	par.innerHTML = '<a type="button" class="link" href="#">' + STATIONS[stationId].title + '</a>';
	parentSide.appendChild(par);

	let stationImg = document.createElement('div');
	stationImg.className = 'station-img';
	stationImg.innerHTML = '<img class="pictures logo-pictures" src=' + STATIONS[stationId].picture + '>';
	par.appendChild(stationImg);
});*/

for (let i = 0; i < radioStations.length; i++) {
	let par = document.createElement('div');
	par.className = 'name-radio';
	par.setAttribute('name',radioStations[i]);
	par.innerHTML = '<a type="button" class="link" href="#">' + STATIONS[radioStations[i]].title + '</a>';
	parentSide.appendChild(par);

	let stationImg = document.createElement('div');
	stationImg.className = 'station-img';
	stationImg.innerHTML = '<img class="pictures logo-pictures" src=' + STATIONS[radioStations[i]].picture + '>';
	par.appendChild(stationImg);
}
//---------------------------------Создаем обработчик для списка станций------------------------------------------

const radioPlayer = document.querySelector('audio');
const titleRadio = document.querySelector(".title-radio");
const imgFooter = document.querySelector(".img-footer");

document.querySelector('.side').addEventListener('click', function(event){
	const stationId = event.target.closest('.name-radio').getAttribute('name');
	titleRadio.textContent = STATIONS[stationId].title;
	imgFooter.innerHTML = stationImg.innerHTML = '<img src=' + STATIONS[stationId].picture + '>';
	radioPlayer.setAttribute('src', STATIONS[stationId].url);
});

/*for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", function () {
		document.querySelector(".title-radio").textContent = STATIONS[radioStations[i]].title;
		document.querySelector(".img-footer").innerHTML = stationImg.innerHTML = '<img src=' + STATIONS[radioStations[i]].picture + '>';
		radioPlayer.innerHTML = '<audio controls preload="metadata" autoplay id=player" src =' + STATIONS[radioStations[i]].url + '>';
	});
}*/

