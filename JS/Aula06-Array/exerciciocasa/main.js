var abc = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995]
console.log(abc)

console.log(abc.length)

let retiraPosicao = abc[6]
console.log(retiraPosicao)

let receba = abc.toString()
console.log(receba)

let testeJoin = abc.join("/")
console.log(testeJoin)

let insereInicio = abc.unshift("IOS")
console.log(abc)



var bdml = [
    ["HTML",1993,CSS,1996]
    ["Bootstrap",2011,JS,1995]
    ["React",2013,"Java",1995]
]

console.log(bdml)

console.log(bdml.length)

let retiraPosicao = bdml[2.1]
console.log(retiraPosicao)

console.log(`Antes: ${bdml}`);
bdml[1,3] = 'JavaScript';
console.log(`Depois: ${bdml}`);

delete bdml[2,2]
console.log(bdml);


let final = bdml.push('pipoca')
console.log(final)





//let receba = numArray.toString()
//console.log(receba)

//let testeJoin = numArray.join(".")
//console.log(testeJoin)