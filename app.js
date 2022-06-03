score1=80;
score2=90;
score3=98;
total=score1+score2+score3;
avg=total/3;
console.log(total);
console.log(avg);

plates=20;
people=7;
rem=plates%people;
rem+=1;
console.log("there are "+rem+" plates available");



fruits=['apple','banana','cherry','grapes',143];
x=fruits[0];
fruits[4]="Jamun";
console.log(x);
console.log(fruits);



function calctotal(x,y)
{
    z=x+y;
    return z;
}
console.log(calctotal(3,4));

order1=calctotal(5,5);
order2=calctotal(2,2);
order3=calctotal(1,1);
console.log(order1,order2,order3);



const person1 = {
    name:  "Pooja",
    age: 23,
    status: "resident",
};

const person2 = {
    name:  "ganesh",
    age: 25,
    status: "tourist",
};

if (person1.age>18 && person1.status === "resident"){
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}

if (person2.age>18 && person2.status === "resident")
{
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}


text="GaneshPooja";
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(2));
console.log(text.indexOf("P"));
console.log(text);
text1="  Ganeshpooja  ";
console.log(text1.trim());
console.log(text.startsWith("G"));
console.log(text1.trim().toLowerCase().startsWith("g"));
console.log(text.includes('ooj'));
console.log(text.slice(1,4));
console.log(text.slice(-3));

sentence=`hello it's  "Pooja" and i am ${text1}`
console.log(sentence);


























