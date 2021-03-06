class Tomato {
  constructor() {
    this.testNotify();

    this.min = 0;
    this.sec = 5;

    document.getElementById('start').onclick = () => {
      
      this.time(24, 59);

      let timeStart = 60 * 1000 * 25;

      setTimeout(() => {
        this.relog(4, 59);
      }, timeStart);
      
      
      // this.time(2, 2);
      // this.relog(3, 3);
    } 

    document.getElementById('stop').onclick = () => {
      this.stop();
    }

  }

  testNotify() {
    if (!('Notification' in window)) {
      alert('Ваш браузер не поддерживает декстопные приложения');
    }
    else if (Notification.premission !== 'denied') {
      Notification.requestPermission(function(premission) {
        console.log('Success');
        return true;
      });
    }
  }

  notify() {
    let notification = new Notification('Pomodoro Clock says:', {
      dir: 'auto',
      icon: "https://pp.userapi.com/c840234/v840234665/302df/EFnxoLbHk_Y.jpg",
      body: 'Ниндя, таймер окончил свою работу!'
    });
    console.log('Оповещение запустилось!');
  }

  relog(a, b) {
    this.time(a, b);
  }

  time(min, sec) {

    this.timer = setInterval( () => {
     
      if (min < 10) {
        if (sec >= 10) document.getElementById('pomodoroTimer').innerHTML='0'+min+':'+sec;
        if (sec < 10) document.getElementById('pomodoroTimer').innerHTML='0'+min+':0'+sec;
              
      } else {
        if (sec >= 10) document.getElementById('pomodoroTimer').innerHTML=min+':'+sec;
        if (sec < 10) document.getElementById('pomodoroTimer').innerHTML=min+':0'+sec;      
      }

      if (sec == 0) {
        min--;
        sec = 60;
      }
      sec--;
      if (min < 0) {
        clearInterval(this.timer);
        
       this.min = 24;
       this.sec = 59;

        this.notify();
      }


    }, 1000);

  }

  stop() {   
    this.min = 24;
    this.sec = 59;

    document.getElementById('pomodoroTimer').innerHTML= '25:00';
  
  clearInterval(this.timer);
  
  }
}

let tomato = new Tomato();
