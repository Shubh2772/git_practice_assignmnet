let str = 'naman';
let count ='';
for (let i = str.length-1;i>=0;i--){
count+=str[i];
}
if(str == count){
console.log('Yes');
}
else {
console.log('No')
}
}