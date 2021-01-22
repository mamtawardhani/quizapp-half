var db,pc=0,gs=0, button, name, op1,op2,op3, heading, question

function setup(){
createCanvas(850,700);
db=firebase.database()

db.ref("gamestate").on("value", function(data){
  gs=data.val()
})

db.ref("playercount").on("value", function(data){
  pc=data.val()
})


button=createButton("Submit")
button.position(500,450)

heading=createElement("h1")
heading.html("Yea kya hai ab")
heading.position(500,20)

question=createElement("h2")
question.html("question likh lo")
question.position(200,100)


op1=createElement("h2")
op1.html("option1")
op1.position(200,200)

op2=createElement("h2")
op2.html("option2")
op2.position(200,300)


op3=createElement("h2")
op3.html("option3")
op3.position(200,400)

name1=createInput().attribute("placeholder", "Enter your name")
name1.position(300,600)


name2=createInput().attribute("placeholder", "Enter the right option")
name2.position(600,600)

button.mousePressed(logic)
}



function draw(){
  background("coral");

  
}

function logic(){

pc++
  db.ref("/").update({
    playercount:pc
  })
  db.ref("Contestants/contestant"+pc).set({
    contestantname: name1.value(),
    optiongiven: name2.value()
  })
}