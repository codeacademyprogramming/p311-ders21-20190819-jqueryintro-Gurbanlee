Number.prototype.format=function(template)
{
      return template.substring(0,template.length-this.toString().length)+this.toString();
}



$.fn.timer=function(options) {
    let that=this;

    options=$.extend({
        digitColor:'red',
        dotColor:'green',
        hasPause:false
    },options);

    $(that).addClass('timer');
    var timerValue = $(that).data('timer').split(':');


    var date = {
        hour: parseInt(timerValue[0]),
        min: parseInt(timerValue[1]),
        sec: parseInt(timerValue[2])
    };

    $(that).html('');
    $(that).append($(`<li style='color:${options.digitColor}'>${date.hour.format('00')}</li>`));
    $(that).append($(`<li style='color:${options.dotColor}'>:</li>`));
    $(that).append($(`<li style='color:${options.digitColor}'>${date.min.format('00')}</li>`));
    $(that).append($(`<li style='color:${options.dotColor}'>:</li>`));
    $(that).append($(`<li style='color:${options.digitColor}'>${date.sec.format('00')}</li>`));

    that.pid = setInterval(timer, 1000,that,date);

    if(options.hasPause===true)
    {
        $(that).addClass('hasPause');

        $(that).click(function(){
            if($(that).hasClass('pause')){
                $(that).removeClass('pause');
                that.pid = setInterval(timer, 1000,that,date);
            }
            else
            {
                $(that).addClass('pause');
                clearInterval(that.pid);
            }
        });
    }
}

function timer(that,date)
{
    $(that).find('li').eq(0).html(date.hour.format('00'));    
        $(that).find('li').eq(2).html(date.min.format('00'));    
        $(that).find('li').eq(4).html(date.sec.format('00'));
        date.sec--;
        if(date.sec<0)
        {
            date.sec=59;
            date.min--;
            if(date.min<0)
            {
                date.min=59;
                date.hour--; 
            }
        }

        if(date.hour<0 || date.min<0 || date.sec<0)
        {
            date = {
                hour: 0,
                min: 0,
                sec: 0
            };
            clearInterval(that.pid);
        }
}