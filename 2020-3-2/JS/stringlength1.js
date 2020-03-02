
//求字符串长度 
function fn(x) {
	var i=0;
	for(index in x){
		i++;
	}	
	return i;
}
// //分割字符串为数组
// var split1 = "b";
// var str = "abcacbabcbcbabbcbcaaa";
// function fn1(split1,str) {
// 	var arr = [];
// 	var num = 0;
// 	arr[0]="";
// 	for(var i = 0; i<fn(str);i++) {
// 		if(str[i]==split1) {
// 			num++;
// 			arr[num]="";
// 		}
// 		else{
// 			arr[num] += str[i]; 
// 		}
// 	}
// 	return arr;
// }
// //通过指定的字符合并数组为字符串
// function fn2(num,arr) {
// 	str = "";
// 	for(var i = 0; i < fn(arr);i++) {
// 		if(i<fn(arr)-1){ 
// 			str += (arr[i]+num);
// 		}
// 		else{
// 			str += arr[i];
// 		}	
// 	}
// 	return str;
// }
//字符串搜索
function fn3(str,search) {
	var str1 = "";
	for(var i=0;i<fn(str);i++) {
		for(var j=0;j<fn(search);j++){
			if(str[i]==search[j]) {
				str1 += str[i];
				if(str1==search) {
					return i-j;
				}
			}
		}
	}
}
console.log(fn3("2",123));
//截取字符串
// var str = "1234567";
// var sub = 2;
// function fn4(str,sub){
// 	var str1 = "";
// 	for(var i=0;i<fn(str);i++) {
// 		if(i==sub) {
// 			str1 += str[i];
// 			sub++;
// 		}
// 	}
// 	return str1;
// }



