const req = require('request')

//登录网站，从network中获取 sessionId，复制到此
let sessionId = 'ASP.NET_SessionId=rsknqepljoefxpi52gg54cad';


let course = {
  '工程伦理': {
    'lb': '1',
    'bjid': '2d73b2b6-7176-4b11-b5a7-be1736455b6f'
  },
  '英语': {
    'lb': '1',
    'bjid': '6b0f96b1-241a-4b6a-89f7-079d62325cb2'
  },
  '数学':{
    'lb': '1',
    'bjid': 'a7a56edc-ffd3-42a5-8f74-2bbe9cdacc9b'
  },
  '人工智能': {
    'lb': '1',
    'bjid': '16942c23-6106-4835-8828-3f6f7335cda5'
  },
  '云计算技术': {
    'lb': '1',
    'bjid': '42e8a1c1-9a5e-4094-b1ca-d46f13f9785d'
  },
  '机器学习与大数据分析': {
    'lb': '1',
    'bjid': 'c9aaa8b8-527c-447f-aeff-f10c330f17f6'
  }
}
for(cour of Object.entries(course)){
  let name = cour[0];
  let lb = cour[1]['lb'];
  let bjid = cour[1]['bjid']
  req({
    url: 'http://yjsxt.hnu.edu.cn/gmis/student/pygl/xswsxk_kb_xk',
    method: 'POST',
    headers: {                       // 指定请求头
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      'Accept-Encoding': 'gzip, deflate',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
      'Connection': 'keep-alive',
      'Content-Length': '46',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Cookie': sessionId,
      'Host': 'yjsxt.hnu.edu.cn',
      'Origin': 'http://yjsxt.hnu.edu.cn',
      'Referer': 'http://yjsxt.hnu.edu.cn/gmis/student/pygl/xswsxk_kb',
      'X-Requested-With': 'XMLHttpRequest',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.96 Safari/537.36'
    },
    formData:{
      'lb': lb,
      'bjid': bjid
    }
  }, function(error, response, body){
    if(!error && response.statusCode=='200'){
      console.log(name)
      console.log(body)
      console.log('-----------------')
    }
  })
}