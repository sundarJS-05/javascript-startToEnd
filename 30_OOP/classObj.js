
function createUser(username,score){
    this.username=username
    this.score = score
}

// definign a user/custom property 'scoremInus' for createUser obj
createUser.prototype.scoreMinus = function(){

    // using "this" so that JS can identify & icnement score of whivchver user(1, 2 or other ) calss it
    this.score--
}

createUser.prototype.printScore = function(){

  console.log(`score is ${this.score}`);
  
}


let user1 = new createUser('user1', 34)

let user2 = new createUser('user2', 56)

user1.printScore()
user2.printScore()

user1.scoreMinus()
user2.scoreMinus()


