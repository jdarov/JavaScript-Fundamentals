const cleanUp = (str) => str.replace(/[^A-Za-z]+/g, ' ');


console.log(cleanUp("---what's my +*& line?"));    // " what s my line "