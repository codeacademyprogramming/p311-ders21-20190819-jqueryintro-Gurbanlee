// window.addEventListener('load',function(){

// var timerValue=this.document.querySelector('.timer').getAttribute('data-timer');
// this.console.log(timerValue);

// });

Number.prototype.format=function(template)
{
      return template.substring(0,template.length-this.toString().length)+this.toString();
}

let date = {
    hour: 0,
    min: 0,
    sec: 0
};
let pid;

$(document).ready(function () {

    // var timerValue=document.querySelector('.timer').getAttribute('data-timer');
    var timerValue = $('.timer').eq(0).data('timer').split(':');


    date = {
        hour: parseInt(timerValue[0]),
        min: parseInt(timerValue[1]),
        sec: parseInt(timerValue[2])
    };


    pid = setInterval(()=>{
        $('ul.timer > li').eq(0).html(date.hour.format('00'));    
        $('ul.timer > li').eq(2).html(date.min.format('00'));    
        $('ul.timer > li').eq(4).html(date.sec.format('00'));
        date.sec--;
        if(date.sec<0)
        {
            date.sec=59;
            date.min--;
            if(date.min<0)
            {
                date.min=59;
                date.hour--; 
                if(date.hour<0)
                {
                    date = {
                        hour: 0,
                        min: 0,
                        sec: 0
                    };
                    clearInterval(pid);
                }
                
            }
        }

    }, 100);

});

// function timer(){
//     // $('ul.timer > li').eq(0).html(format(date.hour,'00'));    
//     // $('ul.timer > li').eq(2).html(format(date.min,'00'));    
//     // $('ul.timer > li').eq(4).html(format(date.sec,'00'));
//     $('ul.timer > li').eq(0).html(date.hour.format('00'));    
//     $('ul.timer > li').eq(2).html(date.min.format('00'));    
//     $('ul.timer > li').eq(4).html(date.sec.format('00'));
//     date.sec--;
//     if(date.sec<0)
//     {
//         date.sec=59;
//         date.min--;
//         if(date.min<0)
//         {
//             date.min=59;
//             date.hour--; 
//             if(date.hour<0)
//             {
//                 date = {
//                     hour: 0,
//                     min: 0,
//                     sec: 0
//                 };
//                 clearInterval(pid);
//             }
            
//         }
//     }

    
// }


// function format(value,template)
// {
//       return template.substring(0,template.length-value.toString().length)+value.toString();
// }

