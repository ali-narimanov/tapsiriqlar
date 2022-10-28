
// first
function reverseArray(){
    const sentence = ["sense", "make", "all", "will", "This"];
    
    console.log(sentence.reverse())
}
reverseArray()
// first end



// second
function greetAliens(){
    const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
    console.log("Oh powerful "  +  aliens[0] + ",we humans offer our unconditional surrender!")
    console.log("Oh powerful "  +  aliens[1] + ",we humans offer our unconditional surrender!")
    console.log("Oh powerful "  +  aliens[2] + ",we humans offer our unconditional surrender!")
    console.log("Oh powerful "  +  aliens[3] + ",we humans offer our unconditional surrender!")
}
greetAliens()
//second end

//third 
function justCoolStuff(){
    const coolStuff = ["gameboys", "skateboards", "backwards hats", "my room", "temporary tattoos"];
    const myStaff =["sweaters", "skateboards", "family-night", "my room"];
    coolStuff.sort();
    myStaff.sort();
    let i = coolStuff.length, j = myStaff.length, three = [];
while (i > 0 && j > 0) {
    i--;
    j--;
    if (coolStuff[i] > myStaff[j]) j++;
    else if (coolStuff[i] < myStaff[j]) i++;
    else three.push(coolStuff[i]);
}
console.log(three);
      
}
justCoolStuff();
//third

//4th

    const meal = [
        {name: "arugula",   source: "plant"},
        {name: "tomatoes",  source: "plant"},
        {name: "lemon",     source: "plant"},
        {name: "olive oil", source: "plant"},
    ]
    const dinner= [
        {name: "hamburger", source:"meat"},
        {name: "cheese",    source: "dairy"},
        {name: "ketchup",   source: "plant"},
        {name: "bun",       source: "plant"},
    ];
    function isTheDinnerVegan(arr){
    for(let i=0;i<arr.length;i++){
        if ((arr[i].source == "meat")){
            return false
        }
        else{
            return true
        }
    }
    
}
console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));


//4th