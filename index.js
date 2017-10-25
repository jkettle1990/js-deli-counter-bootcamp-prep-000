var katzDeli = [];

function takeANumber(katzDeli, name){
    katzDeli.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.';
}

function nowServing(n){
  if (!n.length){
    return "There is nobody waiting to be served!";
  }else{
    return `Currently serving ${n[0]}.`;
    n.shift();
  }
}
