// live site can be found at https://bilal-nadeem-ahmed.github.io/Logic-Test/

let Scrambled= ['Up evoba the dlrow FIRE hgih','Twinkle elkniwt little rats','Like a diamond ERIF the yks','FIRE I wonder tahw you ERIF']


const fixArrayOrderAndSplit =(arr)=>{
    let newArr=[];

    newArr[0] = arr[1].split(' ');
    newArr[1] = arr[3].split(' ');
    newArr[2] = arr[0].split(' ');
    newArr[3] = arr[2].split(' ');
   
    return newArr
     
}


    

const reverseSecondWordInArray = (arr)=>{
    let newArr = arr
    for(let i = 0; i<arr.length;i++){
        
        for(let j=1;j<arr[i].length;j++)
       
        if(j % 2 === 1){
            newArr[i][j] = arr[i][j].split('').reverse().join('') 
        }

    }
  return newArr  
}



const replaceFireandJoin=(arr)=>{
    let newArr= arr

    newArr[1][0]='How'
    newArr[1][5]='are'
    newArr[2][4]='so'
    newArr[3][3]='in'

    return newArr.map(element => element.join(' '))

}

let reorderedArray = fixArrayOrderAndSplit(Scrambled)
let reveredAndReorderedArray=reverseSecondWordInArray(reorderedArray)
let unscrambledArray = replaceFireandJoin(reveredAndReorderedArray)






let formattedUnscrambledArray = unscrambledArray.map(element=>`<span><br>${element}</span>`)
let output = document.getElementById('solution')
output.innerHTML=formattedUnscrambledArray




