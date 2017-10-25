var katzDeli = [];

function takeANumber(katzDeli, name){
    katzDeli.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.';
}

function nowServing(katzDeli){
  if (!katzDeli.length){
    return "There is nobody waiting to be served!";
  }else{
    return `Currently Serving ${katzDeli[0]}.`;
  }
}
