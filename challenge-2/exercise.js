const SYMBOLS = {
    symbol1: "#",
    symbol2: "@",
    symbol3: "*",
    symbol4: "&"
  }
  
console.time("Test")

export function miniCompiler(symbols) {
    let count = 0;
    const compiledSymbols = []
    symbols.split("").forEach((symbol) => {
     if (symbol === SYMBOLS.symbol1)  count++  
     if (symbol === SYMBOLS.symbol2) count--
     if (symbol === SYMBOLS.symbol3) count *= count
     if (symbol === SYMBOLS.symbol4) compiledSymbols.push(count)
  }) 
    return compiledSymbols.join("")
  }
  
  console.log(miniCompiler("###&"))
  
  console.timeEnd("Test")

  