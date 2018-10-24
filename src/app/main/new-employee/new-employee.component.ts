import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FirebaseControllerService} from '../../services/firebase-controller.service';
import {Employee} from '../../model/Employee';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(private firebaseController: FirebaseControllerService) {
  }

  ngOnInit() {
  }

  createEmployee(form: NgForm) {
    employees.forEach(emp => {
      this.firebaseController.createUserData(emp).catch(error => {
        console.log(error);
      });
    });

  }
}


export let employees = [{
  'socialNumber': '9785723984',
  'firstName': 'Gillian',
  'lastName': 'Henkmann',
  'email': 'ghenkmann0@amazon.co.jp',
  'phone': '2776152881',
  'street': '32126 Golf Course Center',
  'zip': '82',
  'city': 'Jiale'
}, {
  'socialNumber': '9912408713',
  'firstName': 'Kelby',
  'lastName': 'Pally',
  'email': 'kpally1@cisco.com',
  'phone': '1675374569',
  'street': '0 Summer Ridge Street',
  'zip': '3',
  'city': 'Campo de la Cruz'
}, {
  'socialNumber': '3178342834',
  'firstName': 'Raddie',
  'lastName': 'Brightey',
  'email': 'rbrightey2@ehow.com',
  'phone': '1207477861',
  'street': '21148 Esch Terrace',
  'zip': '2',
  'city': 'Panalingaan'
}, {
  'socialNumber': '6493032911',
  'firstName': 'Farrand',
  'lastName': 'Aickin',
  'email': 'faickin3@skyrock.com',
  'phone': '8991525836',
  'street': '11 Hollow Ridge Parkway',
  'zip': '2102',
  'city': 'Kabar Utara'
}, {
  'socialNumber': '3092187539',
  'firstName': 'Harper',
  'lastName': 'Guilloneau',
  'email': 'hguilloneau4@bloomberg.com',
  'phone': '2688944840',
  'street': '2084 Aberg Plaza',
  'zip': '15315',
  'city': 'Kalengwa'
}, {
  'socialNumber': '7494003703',
  'firstName': 'Cloris',
  'lastName': 'Hindrich',
  'email': 'chindrich5@intel.com',
  'phone': '6352308168',
  'street': '5601 4th Pass',
  'zip': '178',
  'city': 'Livadiya'
}, {
  'socialNumber': '1041152515',
  'firstName': 'Giustino',
  'lastName': 'Ruthen',
  'email': 'gruthen6@topsy.com',
  'phone': '8739949208',
  'street': '294 Hayes Park',
  'zip': '87218',
  'city': 'Floda'
}, {
  'socialNumber': '6480372425',
  'firstName': 'Carrol',
  'lastName': 'Farries',
  'email': 'cfarries7@trellian.com',
  'phone': '5326424352',
  'street': '5 Logan Lane',
  'zip': '56',
  'city': 'San Andres'
}, {
  'socialNumber': '5337402064',
  'firstName': 'Sherwood',
  'lastName': 'Hatz',
  'email': 'shatz8@un.org',
  'phone': '2388299871',
  'street': '891 Vermont Lane',
  'zip': '5',
  'city': 'Shemursha'
}, {
  'socialNumber': '6932797682',
  'firstName': 'Fawne',
  'lastName': 'Kaye',
  'email': 'fkaye9@barnesandnoble.com',
  'phone': '6877218059',
  'street': '91 Ilene Crossing',
  'zip': '0',
  'city': 'Chengdong'
}, {
  'socialNumber': '0780591534',
  'firstName': 'Jo',
  'lastName': 'Priestman',
  'email': 'jpriestmana@dropbox.com',
  'phone': '4253661443',
  'street': '07331 Truax Road',
  'zip': '7435',
  'city': 'Martinópolis'
}, {
  'socialNumber': '5294862921',
  'firstName': 'Kylynn',
  'lastName': 'Kirkness',
  'email': 'kkirknessb@cbsnews.com',
  'phone': '5147489038',
  'street': '10058 Anderson Park',
  'zip': '04357',
  'city': 'Mauren'
}, {
  'socialNumber': '5555297041',
  'firstName': 'Ludovika',
  'lastName': 'Unstead',
  'email': 'lunsteadc@tinypic.com',
  'phone': '7004842304',
  'street': '2870 Veith Parkway',
  'zip': '79157',
  'city': 'Ferapontovo'
}, {
  'socialNumber': '2365096638',
  'firstName': 'Lonnie',
  'lastName': 'Maysor',
  'email': 'lmaysord@vistaprint.com',
  'phone': '4813160883',
  'street': '69888 Graedel Pass',
  'zip': '35',
  'city': 'Bang Racham'
}, {
  'socialNumber': '3568109026',
  'firstName': 'Noni',
  'lastName': 'Mungham',
  'email': 'nmunghame@github.io',
  'phone': '6547267698',
  'street': '4 Ryan Place',
  'zip': '61286',
  'city': 'Druzhba'
}, {
  'socialNumber': '0756680662',
  'firstName': 'Llewellyn',
  'lastName': 'Smoth',
  'email': 'lsmothf@prlog.org',
  'phone': '9331173324',
  'street': '8160 Leroy Place',
  'zip': '30',
  'city': 'Itu'
}, {
  'socialNumber': '3160024121',
  'firstName': 'Terrie',
  'lastName': 'Blenkinship',
  'email': 'tblenkinshipg@businessinsider.com',
  'phone': '9091827217',
  'street': '6518 Paget Park',
  'zip': '28',
  'city': 'Campo Alegre'
}, {
  'socialNumber': '3077150239',
  'firstName': 'Shell',
  'lastName': 'Simmans',
  'email': 'ssimmansh@phoca.cz',
  'phone': '4505174030',
  'street': '0833 Orin Circle',
  'zip': '17',
  'city': 'Bom Jesus do Itabapoana'
}, {
  'socialNumber': '1933249846',
  'firstName': 'Sherline',
  'lastName': 'de Banke',
  'email': 'sdebankei@dailymail.co.uk',
  'phone': '3139048947',
  'street': '4 Basil Court',
  'zip': '66944',
  'city': 'Toyoshina'
}, {
  'socialNumber': '2264752181',
  'firstName': 'Robin',
  'lastName': 'Farherty',
  'email': 'rfarhertyj@instagram.com',
  'phone': '9009203461',
  'street': '838 Barby Street',
  'zip': '0',
  'city': 'Sakura'
}, {
  'socialNumber': '9534833037',
  'firstName': 'Bren',
  'lastName': 'Gamil',
  'email': 'bgamilk@moonfruit.com',
  'phone': '6377162346',
  'street': '10311 International Plaza',
  'zip': '9196',
  'city': 'Chenzhou'
}, {
  'socialNumber': '0497994879',
  'firstName': 'Norean',
  'lastName': 'Fricker',
  'email': 'nfrickerl@gizmodo.com',
  'phone': '1017431997',
  'street': '9 5th Circle',
  'zip': '471',
  'city': 'Santuario'
}, {
  'socialNumber': '2851813552',
  'firstName': 'Yolanda',
  'lastName': 'Souness',
  'email': 'ysounessm@cornell.edu',
  'phone': '8985736544',
  'street': '41 Johnson Terrace',
  'zip': '7597',
  'city': 'Chetian'
}, {
  'socialNumber': '7072925953',
  'firstName': 'Delly',
  'lastName': 'De Luna',
  'email': 'ddelunan@imageshack.us',
  'phone': '2654307492',
  'street': '67879 Westend Street',
  'zip': '64',
  'city': 'Adirejo'
}, {
  'socialNumber': '7040574977',
  'firstName': 'Abrahan',
  'lastName': 'Wrigglesworth',
  'email': 'awriggleswortho@paypal.com',
  'phone': '3379970822',
  'street': '001 Merrick Pass',
  'zip': '2445',
  'city': 'Onueke'
}, {
  'socialNumber': '1109915810',
  'firstName': 'Ronica',
  'lastName': 'Mityakov',
  'email': 'rmityakovp@thetimes.co.uk',
  'phone': '7101756715',
  'street': '11404 Independence Pass',
  'zip': '299',
  'city': 'Dancheng'
}, {
  'socialNumber': '3948474397',
  'firstName': 'Debra',
  'lastName': 'Parkhouse',
  'email': 'dparkhouseq@godaddy.com',
  'phone': '5641683083',
  'street': '2131 Gulseth Pass',
  'zip': '2846',
  'city': 'Videm pri Ptuju'
}, {
  'socialNumber': '5380756050',
  'firstName': 'Ozzy',
  'lastName': 'Willers',
  'email': 'owillersr@pagesperso-orange.fr',
  'phone': '3826690090',
  'street': '6 Roxbury Terrace',
  'zip': '3018',
  'city': 'Alfeizerão'
}, {
  'socialNumber': '3061116710',
  'firstName': 'Emmery',
  'lastName': 'Standingford',
  'email': 'estandingfords@opera.com',
  'phone': '1371919299',
  'street': '4 Loomis Plaza',
  'zip': '67266',
  'city': 'Cuiabá'
}, {
  'socialNumber': '7118504424',
  'firstName': 'Kakalina',
  'lastName': 'Hutchens',
  'email': 'khutchenst@dailymotion.com',
  'phone': '2588293621',
  'street': '416 Dunning Street',
  'zip': '6943',
  'city': 'Mörön'
}, {
  'socialNumber': '5262292208',
  'firstName': 'Thurston',
  'lastName': 'Neilus',
  'email': 'tneilusu@businessweek.com',
  'phone': '3103775257',
  'street': '0 Evergreen Road',
  'zip': '4',
  'city': 'Torrance'
}, {
  'socialNumber': '0329811568',
  'firstName': 'Lilian',
  'lastName': 'Dufoure',
  'email': 'ldufourev@paginegialle.it',
  'phone': '6271083585',
  'street': '4 Summer Ridge Court',
  'zip': '89',
  'city': 'Murcia'
}, {
  'socialNumber': '9366322174',
  'firstName': 'Wes',
  'lastName': 'Beri',
  'email': 'wberiw@army.mil',
  'phone': '2477908031',
  'street': '14403 Manley Road',
  'zip': '5',
  'city': 'Paojan'
}, {
  'socialNumber': '9025949312',
  'firstName': 'Lazarus',
  'lastName': 'Jansson',
  'email': 'ljanssonx@businessinsider.com',
  'phone': '9964953289',
  'street': '8971 Merrick Park',
  'zip': '662',
  'city': 'Machado'
}, {
  'socialNumber': '0532806247',
  'firstName': 'Andrei',
  'lastName': 'Drayson',
  'email': 'adraysony@cafepress.com',
  'phone': '6954460659',
  'street': '7 Eagle Crest Plaza',
  'zip': '9615',
  'city': 'Xinji'
}, {
  'socialNumber': '5262203981',
  'firstName': 'Roanne',
  'lastName': 'Leathard',
  'email': 'rleathardz@blogtalkradio.com',
  'phone': '3776733327',
  'street': '32 Brickson Park Plaza',
  'zip': '457',
  'city': 'Kim Sơn'
}, {
  'socialNumber': '9109607692',
  'firstName': 'Vikky',
  'lastName': 'Spradbrow',
  'email': 'vspradbrow10@soundcloud.com',
  'phone': '9173802352',
  'street': '337 Nancy Court',
  'zip': '16',
  'city': 'Coaldale'
}, {
  'socialNumber': '2569326062',
  'firstName': 'Dominick',
  'lastName': 'Mayzes',
  'email': 'dmayzes11@skyrock.com',
  'phone': '3225875926',
  'street': '080 Crowley Plaza',
  'zip': '609',
  'city': 'Gelin'
}, {
  'socialNumber': '8541870340',
  'firstName': 'Isabel',
  'lastName': 'Yea',
  'email': 'iyea12@usa.gov',
  'phone': '2041327573',
  'street': '5 Warbler Point',
  'zip': '282',
  'city': 'Itapetininga'
}, {
  'socialNumber': '9822301944',
  'firstName': 'Gale',
  'lastName': 'Studdeard',
  'email': 'gstuddeard13@bandcamp.com',
  'phone': '1575919063',
  'street': '78360 Morrow Crossing',
  'zip': '65108',
  'city': 'Xiayunling'
}, {
  'socialNumber': '6133262257',
  'firstName': 'Toinette',
  'lastName': 'Massingberd',
  'email': 'tmassingberd14@hp.com',
  'phone': '3085133169',
  'street': '9921 Corry Pass',
  'zip': '96337',
  'city': 'Barnaul'
}, {
  'socialNumber': '0391665804',
  'firstName': 'Carmel',
  'lastName': 'Sowte',
  'email': 'csowte15@nasa.gov',
  'phone': '6425117595',
  'street': '39 Granby Circle',
  'zip': '44',
  'city': 'Smyków'
}, {
  'socialNumber': '1139336681',
  'firstName': 'Dominique',
  'lastName': 'Wolton',
  'email': 'dwolton16@bbc.co.uk',
  'phone': '5532711019',
  'street': '45 Alpine Point',
  'zip': '1104',
  'city': 'Nelidovo'
}, {
  'socialNumber': '4807947281',
  'firstName': 'Angil',
  'lastName': 'Luggar',
  'email': 'aluggar17@youku.com',
  'phone': '2765018444',
  'street': '2070 Donald Plaza',
  'zip': '2',
  'city': 'Arísvi'
}, {
  'socialNumber': '5338024853',
  'firstName': 'Towny',
  'lastName': 'Kitto',
  'email': 'tkitto18@soup.io',
  'phone': '2349841648',
  'street': '1 Mallard Drive',
  'zip': '15913',
  'city': 'Cilebang Satu'
}, {
  'socialNumber': '0809011662',
  'firstName': 'Tonya',
  'lastName': 'Oldershaw',
  'email': 'toldershaw19@hubpages.com',
  'phone': '2621264535',
  'street': '081 Michigan Street',
  'zip': '7',
  'city': 'Mae Chan'
}, {
  'socialNumber': '3412846805',
  'firstName': 'Kendricks',
  'lastName': 'Rhead',
  'email': 'krhead1a@uiuc.edu',
  'phone': '8686937491',
  'street': '30877 Buena Vista Hill',
  'zip': '80368',
  'city': 'Salcedo'
}, {
  'socialNumber': '5699505172',
  'firstName': 'Sharleen',
  'lastName': 'Enderby',
  'email': 'senderby1b@webeden.co.uk',
  'phone': '4418716048',
  'street': '387 Jenifer Alley',
  'zip': '8211',
  'city': 'Dondar Quşçu'
}, {
  'socialNumber': '4083495804',
  'firstName': 'Coretta',
  'lastName': 'Valsler',
  'email': 'cvalsler1c@disqus.com',
  'phone': '8103341613',
  'street': '1 Grim Trail',
  'zip': '25178',
  'city': 'Laagri'
}, {
  'socialNumber': '0324938454',
  'firstName': 'Guenevere',
  'lastName': 'Samart',
  'email': 'gsamart1d@jiathis.com',
  'phone': '6783725098',
  'street': '19 Comanche Trail',
  'zip': '89',
  'city': 'Wangshi'
}];
