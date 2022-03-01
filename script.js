
var noOfTiles = 6;
var arr = [];
var picked;
var tiles = document.getElementsByClassName("play");
var target = document.getElementById("target");
var show = document.getElementById("resultmsg");
var command = document.getElementById("playAgain");
var head = document.querySelector("header");
var easy = document.getElementById("lvl1");
var hard = document.getElementById("lvl2");

//easy or hard
    easy.addEventListener("click", function(){
        for(var x=3; x<noOfTiles; x++) {
            tiles[x].style.display = "none";
        }
        noOfTiles = 3;
        
        algoWork();
    });
    hard.addEventListener("click", function(){
       
        if(noOfTiles === 6);
        else {
            for(var x=3; x<6; x++) {
                tiles[x].style.display = "block";
            }
            noOfTiles = 6;
        }
       
       algoWork();
    });

//reseting everytime newgame starts
    function resetDefaults(){
        head.style.backgroundColor = "gold";
        command.innerHTML = "NEW GAME";
        show.textContent="";
    }


//defining algoWork main part
    function algoWork(){
        resetDefaults();
        //generating rndm colors
        arr = generateColor ( noOfTiles);
        
        //picking a rndm among the arr as target
        var ss = Math.floor(Math.random()*(noOfTiles));
        picked = arr[ss];

        //setting target
        target.textContent = picked;

        for(var i=0; i<noOfTiles; i++) {

            tiles[i].style.backgroundColor = arr[i];

            //adding event click
            tiles[i].addEventListener("click", function(){
           
                if(picked === this.style.backgroundColor) {                  
                    show.textContent = "CORRECT!";
                    show.style.color = "white";
                    changeAll(this.style.backgroundColor);
                    command.innerHTML = "PLAY AGAIN";
                }
                else {
                    show.textContent = "Try Again!";
                    this.style.backgroundColor="black";
                    
                }
            });
        }
    }

    //utilities used

   //playagain or newgame
    command.addEventListener("click",function(){
    
    algoWork();
        
    });

    //generating colors
    function generateColor(numbers) {
        var tmp=[];
        for( var i=0;i<numbers;i++) {
            tmp.push(rgbMaker());
        }
        return tmp;
    }

    //rgbMaker()
    function rgbMaker(){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);

        return "rgb("+r+", "+g+", "+b+")";
    }

    //changing everything on winning
    function changeAll(color) {
        for(var i=0; i<tiles.length; i++) {
            tiles[i].style.backgroundColor = color;
        }
        head.style.backgroundColor = color;
    }
    
    //first call of main part
    algoWork();