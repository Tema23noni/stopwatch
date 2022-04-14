let start = document.querySelector("#start")
let pause = document.querySelector("#pause")
let reset = document.querySelector("#end")
let clock = document.querySelector('#clock');
let s1 = 0;
let m1 = 0;
let h1 = 0;
let s = 0;
let m = '0' + 0;
let h = '0' + 0;
function starter(){
     
    function time(){
        s1++;
        s = s1;
        if(s1 < 10){
            s = '0' + s;
 
        }
        if(s1 > 59){
            m = m1

            m1++;
            s1 = 0;
            if(m1 <= 10){
                m = '0' + m 
            }


        }
        if(m1 > 59){
            h = h1;
            h1++;
            m1 = 0;
            if(h1<= 10){
                h = '0' + h1
            }
            
        }



        let cloki = h + ":" + m + ":" +s;
        clock.textContent = cloki;
    }
    let a =setInterval(time,10)
    function pauses(){
        clearInterval(a)
        start.addEventListener('click', starter);
        reset.addEventListener('click', resets)
        
    }
    pause.addEventListener('click', pauses)
    function resets(){
        clearInterval(a)
        clock.textContent = '00:00:00';
        s1 = 0;
        m1 = 0;
        h1 = 0;
        s = 0;
        m = '0' + 0;
        h = '0' + 0;
    }
    reset.addEventListener('click', resets)
    
}


start.addEventListener('click', starter);
