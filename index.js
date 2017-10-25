var katzDeli = [];

function takeANumber(katzDeli, name){
    katzDeli.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.';
}

function nowServing(n){
  if (!n.length){
    return "There is nobody waiting to be served!";
  }
    return `Currently serving ${n.shift()}.`;
    n.shift();
}
