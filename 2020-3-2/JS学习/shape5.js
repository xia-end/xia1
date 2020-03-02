var alt = "";
        for(var i=1; i<=5; i++){
            var blank = "";
            for(var j=1; j<=5-i; j++){   //打印空格
                blank += " ";
            }
            var stars = "";
            for(var m=1; m<=2*i-1; m++){    //打印*
                stars += "*";
            }
            alt += blank + stars + "\n";   //字符串的拼接,拼为一行
        }
        console.log(alt);