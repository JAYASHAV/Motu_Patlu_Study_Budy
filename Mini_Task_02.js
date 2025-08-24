marks = [ 50,60,77,58,93,48,62]

function max(n1,n2){
    if(n1>n2){
        return n1
    }
    else{
        return n2
    }
}
let maximum = 0
for(i=0;i<7;i++){
    maximum = max(maximum,marks[i])
}
console.log("Maximum marks :", maximum)

// OUTPUT :
/*
Maximum marks : 93
*/