function myTemplate(id,obj){
    //获取字符串
    var str = document.querySelector('#'+id).innerHTML;
    //定义正则检索字符串匹配含双大括号的内容,\w:匹配字符,+:匹配至少一个字符,():多次匹配
    var reg = /{{(\w+)}}/;
    //检索满足条件
    var result = reg.exec(str);
    //循环替换直到null为止
    while(reg.exec(str)!=null){
          //替换字符串
          var str = str.replace(result[0],obj[result[1]]);
          //再次检索
          var result = reg.exec(str);
    }
    //获取结果
    //console.log(str);
    return str;
}
