var employees =[ {
    name: "M.thamin",
    age:23,
    Qualification:"B.Tech",
    empid: 456
},

{
    name: "A.Mohaideen",
    age:40,
    Qualification:"B.E",
    empid : 458
},
{
    name: "M.syed",
    age:22,
    Qualification:"BS.viscom",
    empid: 450
},
{
    name: "M.Ansari",
    age:24,
    Qualification:"B.Sc",
    empid: 453
},
];

//for in
for (let x in employees) {
    console.log(x + ": "+ employees[x].age)
    
 }