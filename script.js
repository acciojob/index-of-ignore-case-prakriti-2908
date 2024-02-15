function indexOfIgnoreCase(S1, S2) {
  // write your code here
  let ans = -1;
  let s1 = S1.toLowerCase();
  let s2 = S2.toLowerCase();
  for(let i=0;i<s1.length;i++){
      if(s2[0]==s1[i] ){
          let tr = -1;
          let a = i;
          for(let j=0;j<s2.length;j++){
              if(s2[j]==s1[a]){
                  a++;
                  tr = 1;
              }else if(s2[j]!=s1[i]){
                  tr = -1;
                  break;
              }
          }
          if(tr!=-1){
              return i;
          }
      }
  }
  return -1
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
