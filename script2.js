    let n = prompt("enter the number")
    if(n === 0){
        console.log("number is not prime")
        
    }else {
        c=2
        while(c*c < n){
            if(n % c === 0){
                console.log("number is not prime")
                break;
            }else{
                c= c+1;
            }
        }

            console.log("prime number")

        
    }