function findPrime(...prime) {
    
    for (let i = 0; i < prime.length; i++) {
        
        let division=0 
        if(prime[i] % 2 == 0 && prime[i] !=2){
             console.log(prime[i]+" sayısı asal değildir.")
         }
         else if(prime[i]==2 || prime[i]==3){
            console.log(prime[i]+" sayısı asaldır.")
         }

         else{ 
             division = prime[i]/2;
             division-=0.5
             
             for(let k=3; k<division; k+=2 ){
               
                if(prime[i] % k ==0 ){
                    console.log(prime[i]+" sayısı asal değildir.")
                    break
                }
             }
             if( k == division +1 ||k == division ) console.log(prime[i]+" sayısı asaldır.")
         }
        
    }
}

findPrime(37)
findPrime(43,2,19,7,32,18,128,5)
findPrime(156,1027,97,3)


////ARKADAŞ SAYİLAR

function friend(number1,number2) {
    let total=1,total1=1;
    if(number1 % 2 ==0){
        
        let control=number1/2
        for (let i = 2; i <=control ; i++) {
            if(number1 % i ==0){
                total+=i
            }
        }

    }

    else{
        
        let control= number1/2-0.5
        for (let i = 2; i <=control ; i++) {
            if(number1 % i ==0){
                total+=i
            }
        }

    }

    if(total == number2){
        console.log("geldi")

        if(number2 % 2 ==0){
            
            let control=number2/2
            for (let i = 2; i <=control ; i++) {
                if(number2 % i ==0){
                    total1+=i
                }
            }
        }
    
        else{
            
            let control= number2/2-0.5
            for (let i = 2; i <=control ; i++) {
                if(number2 % i ==0){
                    total1+=i
                }
            }
        }

        if(total1==number1){
            console.log(number1+" ve "+number2+" sayıları arkadaş sayılardır.")
        }

        else{
            console.log(number1+" ve "+number2+" sayıları arkadaş sayılar değildir.")

        }
    }

    else{
        console.log(number1+" ve "+number2+" sayıları arkadaş sayılar değildir.")

    }
}

friend(220,284)
friend(1184,1210)
friend(17296,18416)
friend(10,152)

///// MÜKEMMEL SAYİLAR
function perfect(number1) {
    let total=1;
    if(number1 % 2 ==0){
        
        let control=number1/2
        for (let i = 2; i <=control ; i++) {
            if(number1 % i ==0){
                total+=i
            }
        }

    }

    else{
        
        let control= number1/2-0.5
        for (let i = 2; i <=control ; i++) {
            if(number1 % i ==0){
                total+=i
            }
        }

    }

    if(total==number1){
        console.log(number1 + " sayisi mükemmel sayidir.");
    }
    else{
        console.log(number1 + " sayisi mükemmel sayi değildir.");

    }
}

perfect(6)
perfect(28)
perfect(496)
perfect(8128)
perfect(301)
perfect(57)

/////ASAL SAYILAR
function prime() {
    console.log("2 asal sayıdır")  
    let total=0;  
    for (let i = 3; i < 1000; i+=2) {
        
        let division = i/2;
        division+=0.5
        
        let k=2;
        while (k < division) {
            if(i % k !=0){
                k++;
            }
           else {
           break
           }
        }
        if(k==division){
           console.log(i+" sayısı asaldır")
           total++;
        }
    }
    console.log(total)
}

prime()
