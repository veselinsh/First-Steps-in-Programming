function countTheWords(input){
        let str = input[0];
        let countWord = 1;
        for (let i = 0; i < str.length; i++)
          if (str[i] === " ") { 
            countWord++; 
        }
        if(countWord > 10){
              console.log(`The message is too long to be send! Has ${countWord} words.`);
        }else{
            console.log(`The message was send successfully!`);
        }
     
}
countTheWords(["This message has exactly eleven words. One more as it's allowed!"])