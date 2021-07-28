

//initialize

let list = document.getElementsByClassName("jsx-4208418699");
let result = [];
let backup = [];
let trigger = true;
let s = 0;
let health = 1;
let price = 120;
let pause = 2000;
let Ttimer = 4000;


const check = (minHealth, maxPrice) => {

  console.clear();
  let a = [];
  for (let item of list) {
    try {
      a.push(item.getElementsByTagName("h6")[0].childNodes[0].data);
      // a = [...a, item.getElementsByTagName("h6")[0].childNodes[0].data];
      a[a.length - 1] = a[a.length - 1].slice(1, 7);
    } catch (e) {
      a.pop();
    }
  }
  a = a.slice(0, 10);

  let b = [];
  let i = 0;
  for (let item of list) {
    try {
      i++;
      if (i % 2) {
        // b = [...b, item.getElementsByClassName("ml-4")[5].childNodes[0].data];
        b.push(item.getElementsByClassName("ml-4")[5].childNodes[0].data);
      }
    } catch (e) { }
  }
  b = b.slice(0, 10);

  for (let index = 0; index < 10; index++) {
    let health = b[index];
    let price = a[index];
    let link = list[index * 5].href;
    let time = Date().slice(16,24)

    if (health > minHealth && price < maxPrice) {
      if (!result.some(x => x[2] === link)) {
        // result = [...result, [health, price, link]]
        result.push([health, price, link]);
        // window.open('http://cd.textfiles.com/mmplatinum/SOUNDS/WAV/MOREWAV2/ALARM2.WAV', '_blank');


        list[index * 5].click();
        setTimeout(function () {
          document.getElementsByTagName('button')[0].click();
        }, pause);
        // window.open(link, '_blank');
        // window.open(`https://axie.zone/finder?search=axie_id:${id}`, '_blank');
      }
    }
  }





}

//timer

let timer = setInterval(myTimer, Ttimer);

function myTimer() {
  check(health, price);

  if (result.length > s && trigger) {
    trigger = false;
    // window.open('http://cd.textfiles.com/mmplatinum/SOUNDS/WAV/MOREWAV2/ALARM2.WAV', '_blank');
  }

  result.forEach((element, index) => {
    console.log(`${index} : health = ${element[0]} , price = ${element[1]} \nlink = ${element[2]}`);
  });

  console.log('LAST CHECK : ' + Date());
}

function myStop() {
  clearInterval(timer);
}


const alter = (Health, Price) => {
  health = Health;
  price = Price;
  backup = result;
  result = [];
}
//Ex : alter(59,175)
//Ex : alter(52,300)

const Trigger = () => {
  trigger = true
  s = result.length
}

//Ex : Trigger()


const back = () => {
  document.getElementsByTagName('h6')[0].click();
}
