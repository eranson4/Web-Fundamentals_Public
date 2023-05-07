// A function to reward myself if I finish my homework and based on time of day
function reward(militarytime, homeworkDone,day){
    if(homeworkDone == true){
        // if time is less than 10 am and  my homework is done I want a latte, otherwise a hot chocolate
        if(militarytime < 10){
            console.log("I want a latte!");
        }
        // if time is between 10 am and 4pm and homework is done, I want hot chocolate
        else if(militarytime >= 10 && militarytime <= 16){
            console.log("I want a hot chocolate!");
        }
            // if time is greater than 4pm and less than 10 pm, and its Wednesday, i want strawberry icecream
        else if(militarytime > 16 && militarytime < 22 && day == "Wednesday"){
                console.log("I want strawberry ice cream!");
        }
        // if time is greater than 4pm and less than 10 pm, I want vanilla icecream
        else if(militarytime > 16 && militarytime < 22 && day != "Wednesday"){
            console.log("I want vanilla ice cream!");
        }
        // if time is greater than 10 pm, I just want to go to sleep
        else{
            console.log("I don't want anything other than sleep!")
    }
}
}
reward(17,true,"Wednesday");