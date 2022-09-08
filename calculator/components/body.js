import React from "react";
function Calculator(){
        return(
            <div id="calc_body">
              <table>
                <tr id="inp2">
                  <td id="inp1" colspan="4"><input type="text" id="input" onKeyDown={equals}></input></td>
                </tr>
                <tr>
                  <td onClick={()=>{getinp(7)}}>7</td>
                  <td onClick={()=>{getinp(8)}}>8</td>
                  <td onClick={()=>{getinp(9)}}>9</td>
                  <td onClick={()=>{getinp('/')}}>/</td>
                </tr>
                <tr>
                  <td onClick={()=>{getinp(4)}}>4</td>
                  <td onClick={()=>{getinp(5)}}>5</td>
                  <td onClick={()=>{getinp(6)}}>6</td>
                  <td onClick={()=>{getinp('*')}}>*</td>
                </tr>
                <tr>
                  <td onClick={()=>{getinp(1)}}>1</td>
                  <td onClick={()=>{getinp(2)}}>2</td>
                  <td onClick={()=>{getinp(3)}}>3</td>
                  <td onClick={()=>{getinp('+')}}>+</td>
                </tr>
                <tr>
                  <td colspan="2" id="zero" onClick={()=>{getinp(0)}} >0</td>
                  <td onClick={()=>{getinp('-')}}>-</td>
                  <td onClick={()=>{getinp('^')}}>^</td>
                </tr>
                <tr>
                  <td onClick={()=>{clear()}}>C</td>
                  <td id="back" onClick={()=>{back()}}>&lt;-</td>
                  <td colspan="2" onClick={()=>{submit()}}>=</td>
                </tr>
              </table>
  
            </div>
      );
      
}
export default Calculator
let m=0,opp=0,n1=0,n2=0,z=0;
function det(x,n){  
        if(n===0){
          n=n+x;  
        }else{
          n=n*10;
          n=n+x;
        }
        return(n);
}    
function getinp(x){
  if(x==='+' || x==='-' || x==='/' || x==='*' || x==='^'){
        if(n1!==0 && n2===0 && z===0){
           console.log('1 one');
           m=1;
           opp=x;
           print(n1+opp);
        }else if(z!==0){
          n1=z;
          n2=0;
          m=1;
          opp=x;
          print(n1+opp);
        }
  }else{
      if(m===0){
          n1=det(x,n1);
          print(n1);
      }
      else if(m===1){
          n2=det(x,n2);
          print(n2);
      }
  }
}
function print(y){
  let inp=document.getElementById("input");
  inp.value=y;
}
function equals(n1,n2,opp){
    if(opp==='+'){
        z=(n1+n2);
    }else if(opp==='-'){
        z=(n1-n2);
        z=n1-n2;
    }else if(opp==='*'){
        z=(n1*n2);
    }else if(opp==='/'){
        z=(n1/n2);
    }else if(opp==='^'){
        if(n2===0){
           z=1;
        }else{
            z=n1;
            for(let i=1;i<n2;i++){
                z=z*n1;
            }
        }
    }
    print(z);
}
function clear(){
   n1=0;
   n2=0;
   opp=0;
   z=0;
   print("");
}
function submit(){
  console.log("chut");
  equals(n1,n2,opp);
}
function back(){
    if(n2===0){
       let s=n1%10;
       n1=n1-s;
       n1=n1/10;
       print(n1);
    }else if(n1!==0 && n2!==0 && z===0){
        let s=n2%10;
        z=z-s;
        n2=n2/10;
        print(n2);
    }else{
      let s=z%10;
      z=z-s;
      z=z/10;
      print(z);
    }
}