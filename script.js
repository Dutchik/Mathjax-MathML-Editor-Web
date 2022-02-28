let math1 = ['<math>'];
let math2 = ['</math>'];
let MATHML;
let formula = [];
let str;
let text1;
function myFunction0(){
  str = document.getElementById('txt').value;
  text1 =  str.split('');
    //文字か数字か判別する
  for(let i = 0; i < text1.length ; i++){
    if(isFinite(text1[i])){
      //数字のとき
        formula+='<mn>' + text1[i] + '</mn>';

    }else{
      //文字のとき
        formula+='<mi>' + text1[i] + '</mi>';
    }
  }
  MATHML = math1.concat(formula,math2);

  document.getElementById('demo').innerHTML = MATHML.join('');
  // STRING_Cの中身をMathJaxに処理してもらう
    MathJax.Hub.Typeset(MATHML.join(''));
}




