var katzDeli = [];

function takeANumber(katzDeli, name){
    katzDeli.push(name)
  return 'Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.';
}

function nowServing(){
  if (katzDeli.length > 1){
    return "Currently serving " katzDeli[0];
    katzDeli.shift();
  }else if (katzDeli.length == 0){
    return "There is nobody waiting to be served!"
  }
}
