const e=JSON.parse('{"key":"v-0426f975","path":"/nice-article/weixin/nixgnxmdkddjavadmyhjq.html","title":"你见过哪些目瞪口呆的 Java 代码优化技巧？","lang":"zh-CN","frontmatter":{"title":"你见过哪些目瞪口呆的 Java 代码优化技巧？","shortTitle":"你见过哪些目瞪口呆的 Java 代码优化技巧？","description":"今天我们一起聊聊Java中代码优化的30个小技巧，希望会对你有所帮助。","author":"苏三呀","category":["微信公众号"],"head":[["meta",{"name":"description","content":"今天我们一起聊聊Java中代码优化的30个小技巧，希望会对你有所帮助。"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/nice-article/weixin/nixgnxmdkddjavadmyhjq.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"你见过哪些目瞪口呆的 Java 代码优化技巧？"}],["meta",{"property":"og:description","content":"今天我们一起聊聊Java中代码优化的30个小技巧，希望会对你有所帮助。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T13:49:42.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"苏三呀"}],["meta",{"property":"article:modified_time","content":"2022-12-26T13:49:42.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"1.用String.format拼接字符串","slug":"_1-用string-format拼接字符串","link":"#_1-用string-format拼接字符串","children":[]},{"level":2,"title":"2.创建可缓冲的IO流","slug":"_2-创建可缓冲的io流","link":"#_2-创建可缓冲的io流","children":[]},{"level":2,"title":"3.减少循环次数","slug":"_3-减少循环次数","link":"#_3-减少循环次数","children":[]},{"level":2,"title":"4.用完资源记得及时关闭","slug":"_4-用完资源记得及时关闭","link":"#_4-用完资源记得及时关闭","children":[]},{"level":2,"title":"5.使用池技术","slug":"_5-使用池技术","link":"#_5-使用池技术","children":[]},{"level":2,"title":"6.反射时加缓存","slug":"_6-反射时加缓存","link":"#_6-反射时加缓存","children":[]},{"level":2,"title":"7.多线程处理","slug":"_7-多线程处理","link":"#_7-多线程处理","children":[]},{"level":2,"title":"8.懒加载","slug":"_8-懒加载","link":"#_8-懒加载","children":[{"level":3,"title":"8.1 饿汉模式","slug":"_8-1-饿汉模式","link":"#_8-1-饿汉模式","children":[]},{"level":3,"title":"8.2 懒汉模式","slug":"_8-2-懒汉模式","link":"#_8-2-懒汉模式","children":[]}]},{"level":2,"title":"9.初始化集合时指定大小","slug":"_9-初始化集合时指定大小","link":"#_9-初始化集合时指定大小","children":[]},{"level":2,"title":"10.不要满屏try...catch异常","slug":"_10-不要满屏try-catch异常","link":"#_10-不要满屏try-catch异常","children":[]},{"level":2,"title":"11.位运算效率更高","slug":"_11-位运算效率更高","link":"#_11-位运算效率更高","children":[]},{"level":2,"title":"12.巧用第三方工具类","slug":"_12-巧用第三方工具类","link":"#_12-巧用第三方工具类","children":[]},{"level":2,"title":"13.用同步代码块代替同步方法","slug":"_13-用同步代码块代替同步方法","link":"#_13-用同步代码块代替同步方法","children":[]},{"level":2,"title":"14.不用的数据及时清理","slug":"_14-不用的数据及时清理","link":"#_14-不用的数据及时清理","children":[]},{"level":2,"title":"15.用equals方法比较是否相等","slug":"_15-用equals方法比较是否相等","link":"#_15-用equals方法比较是否相等","children":[]},{"level":2,"title":"16.避免创建大集合","slug":"_16-避免创建大集合","link":"#_16-避免创建大集合","children":[]},{"level":2,"title":"17.状态用枚举","slug":"_17-状态用枚举","link":"#_17-状态用枚举","children":[]},{"level":2,"title":"18.把固定值定义成静态常量","slug":"_18-把固定值定义成静态常量","link":"#_18-把固定值定义成静态常量","children":[]},{"level":2,"title":"19.避免大事务","slug":"_19-避免大事务","link":"#_19-避免大事务","children":[]},{"level":2,"title":"20.消除过长的if...else","slug":"_20-消除过长的if-else","link":"#_20-消除过长的if-else","children":[]},{"level":2,"title":"21.防止死循环","slug":"_21-防止死循环","link":"#_21-防止死循环","children":[]},{"level":2,"title":"22.注意BigDecimal的坑","slug":"_22-注意bigdecimal的坑","link":"#_22-注意bigdecimal的坑","children":[]},{"level":2,"title":"23.尽可能复用代码","slug":"_23-尽可能复用代码","link":"#_23-尽可能复用代码","children":[]},{"level":2,"title":"24.foreach循环中不remove元素","slug":"_24-foreach循环中不remove元素","link":"#_24-foreach循环中不remove元素","children":[]},{"level":2,"title":"25.避免随意打印日志","slug":"_25-避免随意打印日志","link":"#_25-避免随意打印日志","children":[]},{"level":2,"title":"26.比较时把常量写前面","slug":"_26-比较时把常量写前面","link":"#_26-比较时把常量写前面","children":[]},{"level":2,"title":"27.名称要见名知意","slug":"_27-名称要见名知意","link":"#_27-名称要见名知意","children":[{"level":3,"title":"27.1 有意义的参数名","slug":"_27-1-有意义的参数名","link":"#_27-1-有意义的参数名","children":[]},{"level":3,"title":"27.2 见名知意","slug":"_27-2-见名知意","link":"#_27-2-见名知意","children":[]},{"level":3,"title":"27.3 参数名风格一致","slug":"_27-3-参数名风格一致","link":"#_27-3-参数名风格一致","children":[]}]},{"level":2,"title":"28.SimpleDateFormat线程不安全","slug":"_28-simpledateformat线程不安全","link":"#_28-simpledateformat线程不安全","children":[]},{"level":2,"title":"29.少用Executors创建线程池","slug":"_29-少用executors创建线程池","link":"#_29-少用executors创建线程池","children":[]},{"level":2,"title":"30.Arrays.asList转换的集合别修改","slug":"_30-arrays-aslist转换的集合别修改","link":"#_30-arrays-aslist转换的集合别修改","children":[]}],"git":{"createdTime":1659609406000,"updatedTime":1672062582000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":44.91,"words":13472},"filePathRelative":"nice-article/weixin/nixgnxmdkddjavadmyhjq.md","localizedDate":"2022年8月4日"}');export{e as data};
