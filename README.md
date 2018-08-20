# my_template

模板引擎封装template

         实现原理:
         
               通过id获取模板中的内容(注:内容为字符串)
               
               调用方式:
               
                     找到字符串中特殊的符号.如:标签里的{{name}}用正则表达式替换
                     
                     使用对象对应的属性进行替换
                     
               返回字符串
               
   @param id:传入的模板id.如<script id="template"></script>传入template
   
   @param:obj:传入的对象数据.如:data={name:'哈哈',age:34}
