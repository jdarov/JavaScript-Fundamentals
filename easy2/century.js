const century = (year) => {
  const centuryYear = Math.ceil(year / 100);
  const cent = String(centuryYear);

  if (centuryYear >= 10 && centuryYear <= 20) {
    console.log(cent + 'th');
    return;
  } 
  
  switch (centuryYear % 10) {
    case 1:
      console.log(cent + 'st');
      break;
    case 2:
      console.log(cent + 'nd');
      break;
    case 3:
      console.log(cent + 'rd');
      break;
    default:
      console.log(cent + 'th');
  }
}
 
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"