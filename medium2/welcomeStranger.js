function printMessage(fullName, title, occupation) {
  return `Hello, ${fullName}! Nice to have a ${title} ${occupation} around.`;
}

const greetings = (arr, obj) => {
  const fullName = arr.join(' ');

  console.log(printMessage(fullName, obj.title, obj.occupation));
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
