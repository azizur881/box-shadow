
// function countryName(name){
 



const countryName = (name) => {
    var big = name[0]
    for(var i = 0 ; i < name.length ; i++){
        var country = name[i]

        if( country.length < big.length ){
            big = country ;
        }

    }
    return big
}

var nation = ['America','indeeeeeeeeeeeia','afganisthan','africa']
var result = countryName(nation)
console.log(result);


const doubleIt = (give) => give*3

result = doubleIt(22)

console.log(result);