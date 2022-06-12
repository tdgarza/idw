
        //function binary_search(arr, item){
          let arr=[2,4,6,8,10,12,14,16,18,20];
          console.log(arr);
            let low =4;
            let high=9;
           // let high=arr[i]-1;
           let item=6;
            console.log(arr[high]);
            console.log(arr[low]);
          while(low<=high){
                let mid=Math.floor((low+high)/2);
                console.log("Valor del primer mid: "+mid);
                console.log("Valor del arreglo: "+ arr[mid]);
                let guess=arr[mid];
                console.log("valor del Guess: "+guess);
            
            if (guess == item)
           arr[mid];
           console.log("primer if: " +arr[mid]);
            if (guess >item){
            high=mid-1;
            console.log("Valor del segundo IF: "+high);
        }
            else{
            low=mid+1;
            console.log("Valor del Else: "+low);
            }
           }
   
      
