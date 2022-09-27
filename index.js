const newArr = [6,4,0, 3,-2,1];
const newFunc = () => {
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length -i-1; j++) {
            if (newArr[j] > newArr[j+1]) {
                
                const temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp; 
                 console.log(temp)
            }
           
        }
    }
    
    console.log(newArr);
    
    
}
newFunc(newArr);
