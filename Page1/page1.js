
function myfunction1(){
$('.form-group').on('input','.prc1',function(){
        var totalsum=0;
        $('.form-group .prc1').each(function(){
          var inputval=$(this).val();
          if($.isNumeric(inputval)){
totalsum+=parseFloat(inputval);

          }
        });
  $('#result1').val(totalsum);
      });

}

var a=document.getElementById('result1').innerHTML=0;
a = myfunction1();



function myfunction2(){
$('.form-group').on('input','.prc1',function(){
        var totalsum=0;
        $('.form-group .prc1').each(function(){
          var inputval=$(this).val();
          if($.isNumeric(inputval)){
totalsum+=parseFloat(inputval);

          }
        });
  $('#result2').val(totalsum);
      });

}

var b=document.getElementById('result2').innerHTML=0;
b = myfunction2();







function myfunction3(){
$('.form-group').on('input','.prc2',function(){
        var totalsum=0;
        $('.form-group .prc2').each(function(){
          var inputval=$(this).val();
          if($.isNumeric(inputval)){
totalsum+=parseFloat(inputval);

          }
        });
  $('#result3').val(totalsum);
      });

}

var c=document.getElementById('result3').innerHTML=0;
c = myfunction3();






function myfunction4(){
$('.form-group').on('input','.prc3',function(){
        var totalsum=0;
        $('.form-group .prc3').each(function(){
          var inputval=$(this).val();
          if($.isNumeric(inputval)){
totalsum+=parseFloat(inputval);

          }
        });
  $('#result4').val(totalsum);
      });

}

var d=document.getElementById('result4').innerHTML=0;
d = myfunction4();





function myfunction5(){
$('.form-group').on('input','.prc4',function(){
        var totalsum=0;
        $('.form-group .prc4').each(function(){
          var inputval=$(this).val();
          if($.isNumeric(inputval)){
totalsum+=parseFloat(inputval);

          }
        });
  $('#result5').val(totalsum);
      });

}

var e=document.getElementById('result5').innerHTML=0;
e = myfunction5();










function myfunction6(){
$('.form-group').on('input','.prc5',function(){
        var totalsum=0;
        $('.form-group .prc5').each(function(){
          var inputval=$(this).val();
          if($.isNumeric(inputval)){
totalsum+=parseFloat(inputval);

          }
        });
  $('#result6').val(totalsum);
      });

}

var f=document.getElementById('result6').innerHTML=0;
f = myfunction6();
