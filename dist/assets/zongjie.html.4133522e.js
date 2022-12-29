const l=JSON.parse('{"key":"v-32ecf2e8","path":"/jvm/zongjie.html","title":"JVM 核心知识点总结","lang":"zh-CN","frontmatter":{"title":"JVM 核心知识点总结","shortTitle":"JVM 核心知识点总结","category":["Java核心"],"tag":["Java虚拟机"],"description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，JVM 核心知识点总结","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,Java程序员进阶之路,jvm,Java虚拟机"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/jvm/zongjie.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"JVM 核心知识点总结"}],["meta",{"property":"og:description","content":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，JVM 核心知识点总结"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"一、基本概念","slug":"一、基本概念","link":"#一、基本概念","children":[{"level":3,"title":"1.1 OpenJDK","slug":"_1-1-openjdk","link":"#_1-1-openjdk","children":[]},{"level":3,"title":"1.2 OracleJDK","slug":"_1-2-oraclejdk","link":"#_1-2-oraclejdk","children":[]},{"level":3,"title":"1.3 HotSpot VM","slug":"_1-3-hotspot-vm","link":"#_1-3-hotspot-vm","children":[]}]},{"level":2,"title":"二、Java 内存区域","slug":"二、java-内存区域","link":"#二、java-内存区域","children":[{"level":3,"title":"2.1 程序计数器","slug":"_2-1-程序计数器","link":"#_2-1-程序计数器","children":[]},{"level":3,"title":"2.2 Java虚拟机栈","slug":"_2-2-java虚拟机栈","link":"#_2-2-java虚拟机栈","children":[]},{"level":3,"title":"2.3 本地方法栈","slug":"_2-3-本地方法栈","link":"#_2-3-本地方法栈","children":[]},{"level":3,"title":"2.4 Java堆","slug":"_2-4-java堆","link":"#_2-4-java堆","children":[]},{"level":3,"title":"2.5 方法区","slug":"_2-5-方法区","link":"#_2-5-方法区","children":[]}]},{"level":2,"title":"三、对象","slug":"三、对象","link":"#三、对象","children":[{"level":3,"title":"3.1 对象的创建","slug":"_3-1-对象的创建","link":"#_3-1-对象的创建","children":[]},{"level":3,"title":"3.2 对象的内存布局","slug":"_3-2-对象的内存布局","link":"#_3-2-对象的内存布局","children":[]},{"level":3,"title":"3.3 对象的访问定位","slug":"_3-3-对象的访问定位","link":"#_3-3-对象的访问定位","children":[]}]},{"level":2,"title":"四、垃圾收集算法","slug":"四、垃圾收集算法","link":"#四、垃圾收集算法","children":[{"level":3,"title":"4.1 Java 堆回收","slug":"_4-1-java-堆回收","link":"#_4-1-java-堆回收","children":[]},{"level":3,"title":"4.2 方法区回收","slug":"_4-2-方法区回收","link":"#_4-2-方法区回收","children":[]},{"level":3,"title":"4.3 垃圾收集算法","slug":"_4-3-垃圾收集算法","link":"#_4-3-垃圾收集算法","children":[]}]},{"level":2,"title":"五、经典垃圾收集器","slug":"五、经典垃圾收集器","link":"#五、经典垃圾收集器","children":[{"level":3,"title":"5.1 Serial 收集器","slug":"_5-1-serial-收集器","link":"#_5-1-serial-收集器","children":[]},{"level":3,"title":"5.2 ParNew 收集器","slug":"_5-2-parnew-收集器","link":"#_5-2-parnew-收集器","children":[]},{"level":3,"title":"5.3 Parallel Scavenge 收集器","slug":"_5-3-parallel-scavenge-收集器","link":"#_5-3-parallel-scavenge-收集器","children":[]},{"level":3,"title":"5.4 Serial Old 收集器","slug":"_5-4-serial-old-收集器","link":"#_5-4-serial-old-收集器","children":[]},{"level":3,"title":"5.5 Paralled Old 收集器","slug":"_5-5-paralled-old-收集器","link":"#_5-5-paralled-old-收集器","children":[]},{"level":3,"title":"5.6 CMS 收集器","slug":"_5-6-cms-收集器","link":"#_5-6-cms-收集器","children":[]},{"level":3,"title":"5.7 Garbage First 收集器","slug":"_5-7-garbage-first-收集器","link":"#_5-7-garbage-first-收集器","children":[]},{"level":3,"title":"5.8 内存分配原则","slug":"_5-8-内存分配原则","link":"#_5-8-内存分配原则","children":[]}]},{"level":2,"title":"六、虚拟机类加载机制","slug":"六、虚拟机类加载机制","link":"#六、虚拟机类加载机制","children":[{"level":3,"title":"6.1 类加载时机","slug":"_6-1-类加载时机","link":"#_6-1-类加载时机","children":[]},{"level":3,"title":"6.2 类加载过程","slug":"_6-2-类加载过程","link":"#_6-2-类加载过程","children":[]},{"level":3,"title":"6.3 类加载器","slug":"_6-3-类加载器","link":"#_6-3-类加载器","children":[]},{"level":3,"title":"6.4 双亲委派模型","slug":"_6-4-双亲委派模型","link":"#_6-4-双亲委派模型","children":[]},{"level":3,"title":"6.5 模块化下的类加载器","slug":"_6-5-模块化下的类加载器","link":"#_6-5-模块化下的类加载器","children":[]}]},{"level":2,"title":"七、程序编译","slug":"七、程序编译","link":"#七、程序编译","children":[{"level":3,"title":"7.1 编译器分类","slug":"_7-1-编译器分类","link":"#_7-1-编译器分类","children":[]},{"level":3,"title":"7.2 解释器与编译器","slug":"_7-2-解释器与编译器","link":"#_7-2-解释器与编译器","children":[]},{"level":3,"title":"7.3 分层编译","slug":"_7-3-分层编译","link":"#_7-3-分层编译","children":[]},{"level":3,"title":"7.4 热点探测","slug":"_7-4-热点探测","link":"#_7-4-热点探测","children":[]}]},{"level":2,"title":"八、代码优化","slug":"八、代码优化","link":"#八、代码优化","children":[{"level":3,"title":"8.1 方法内联","slug":"_8-1-方法内联","link":"#_8-1-方法内联","children":[]},{"level":3,"title":"8.2 逃逸分析","slug":"_8-2-逃逸分析","link":"#_8-2-逃逸分析","children":[]},{"level":3,"title":"8.3 公共子表达式消除","slug":"_8-3-公共子表达式消除","link":"#_8-3-公共子表达式消除","children":[]},{"level":3,"title":"8.4 数组边界检查消除","slug":"_8-4-数组边界检查消除","link":"#_8-4-数组边界检查消除","children":[]}]}],"git":{"createdTime":1648354033000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":8},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":43.51,"words":13053},"filePathRelative":"jvm/zongjie.md","localizedDate":"2022年3月27日"}');export{l as data};
