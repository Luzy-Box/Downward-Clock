let Display = document.querySelectorAll(".dis_T");
let Now = document.querySelectorAll(".dis_T .now");
let Next = document.querySelectorAll(".dis_T .Next");
let Timer;  //Timer

//forward - H / M / S .
let T = [0,0,0,0,0,0];

function SetOne(Wei)
{
    Next[Wei].innerHTML = T[Wei];
    Display[Wei].classList = "dis_T Move_Next";

    setTimeout(function(){
        Now[Wei].innerHTML = T[Wei];
        Display[Wei].classList = "dis_T";
    },400);
}

//Init TIME
let Data = new Date();
let cache = Data.getSeconds() + 1;
T[5] = cache % 10;
T[4] = Math.floor(cache / 10);
T[3] = Data.getMinutes() % 10;
T[2] = Math.floor(Data.getMinutes() / 10);
T[1] = Data.getHours() % 10;
T[0] = Math.floor(Data.getHours() / 10);
for(let y = 0;y < 6;y++)
{
    SetOne(y);
}

//Timer Run
function Sencond()
{
    T[5]++;

    if(T[5] >= 10)
    {
        T[5] = 0;
        SetOne(5);
        T[4]++;

        if(T[4] >= 6)
        {
            T[4] = 0;
            SetOne(4);
            Minute();
        }
        else
        {
            SetOne(4);
        }

    }
    else
    {
        SetOne(5);
    }
}

function Minute()
{
    T[3]++;

    if(T[3] >= 10)
    {
        T[3] = 0;
        SetOne(3);
        T[2]++;

        if(T[2] >= 6)
        {
            T[2] = 0;
            SetOne(2);
            Hours();
        }
        else
        {
            SetOne(2);
        }

    }
    else
    {
        SetOne(3);
    }
}

function Hours()
{
    T[1]++;
    if(T[0] >= 2)
    {
        if(T[1] >= 4)
        {
            T[1] = 0;
            SetOne(1);
            T[0] = 0;
            SetOne(0);
        }
        else
        {
            SetOne(1);
        }
    }
    else//T0 < 2 (Li: 0,1)
    {
        if(T[1] >= 10)
        {
            T[1] = 0;
            SetOne(1);
            T[0]++;
            SetOne(0);
        }
        else
        {
            SetOne(1);
        }
    }


}


//Time Forward function
function T_forward()
{
    Sencond();
    // Minute();
    //Hours();
}

setTimeout(function(){
    Timer = setInterval(() => {
        T_forward();
    }, 1000);
},600);



//clearInterval(Timer);


