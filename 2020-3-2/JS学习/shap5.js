
      //r从1开始，到<=lines结束，每次+1
      for(var r=1;r<=5;r++){
         // 公式
          for(var i=0,arr=[];i<5+r-1;i++){
           arr.push(i<(5-r)?" ":"*");
        }
        console.log(arr.join(""));
      }

