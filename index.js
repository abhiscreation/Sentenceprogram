/*
"India, officially the Republic of India (Hindi: Bhārat Gaṇarājya),[26] is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar and Indonesia."
 
 
Take above paragraph as input and find out the following:
 
    1. total no.of letters
    2. total no.of words
    3. total no.of digits
    4. total no.of sentences
    5. total no.of symbols
    6. total no.of spaces
    7. remove all duplicate words and give unique words count
*/

var text =("India, officially the Republic of India (Hindi: Bhārat Gaṇarājya),[26] is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar and Indonesia.");
len= text.length
console.log(len)
space = text.split(" ").length-1
console.log(space)
words = text.split(" ")
console.log(words.length)
 
sent = text.split(".")
console.log(sent.length)


console.log(text.replace(/[^0-9]/g,"").length);

var countSpecial = text => {
    var punct = "!,\;\.-?()[]";
     let count = 0;
     for(let i = 0; i < text.length; i++){
        if(!punct.includes(text[i])){
           continue;
        };
        count++;
     };
     return count;
  };
  console.log(countSpecial(text));
