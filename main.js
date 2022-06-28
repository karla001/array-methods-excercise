var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
var food = [];

function manageFood(){
    vegetables.pop();

    fruit.reverse();
    fruit.pop();
    fruit.reverse();

    fruit.push(fruit.indexOf('orange'));
    vegetables.push(vegetables.length);
    
    food = fruit.concat(vegetables);
    food.splice(4, 2);
    food.reverse();

    food.forEach(item=>{
        if(typeof item == 'number'){
            food[food.indexOf(item)]= item.toString();
        }
    })
    return food.join(',')
}

console.log(manageFood());