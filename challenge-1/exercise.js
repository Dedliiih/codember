export function orderedWords(words) {
    const indexedWords = words.split(" ");
    const orderedWords = []
  
   for (let i = 0; i < indexedWords.length; i++) {
     if (orderedWords.find(word => word === indexedWords[i])) continue;
    orderedWords.push(indexedWords[i], indexedWords.filter(word => indexedWords[i] === word).length)    
  }

   return orderedWords.join("")
 }
