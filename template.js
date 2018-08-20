/*
   模板引擎封装template
         实现原理:
               通过id获取模板中的内容(注:内容为字符串)
               调用方式:
                     找到字符串中特殊的符号.如:标签里的{{name}}用正则表达式替换
                     使用对象对应的属性进行替换
               返回字符串
   @param id:传入的模板id.如<script id="template"></script>传入template
   @param:obj:传入的对象数据.如:data={name:'哈哈',age:34}
*/
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