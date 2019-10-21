(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{279:function(_,v,t){"use strict";t.r(v);var a=t(2),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"_1-操作系统初步认识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-操作系统初步认识"}},[_._v("#")]),_._v(" 1. 操作系统初步认识")]),_._v(" "),t("p",[_._v("操作系统基本的一些"),t("strong",[_._v("功能概述")]),_._v("：")]),_._v(" "),t("ol",[t("li",[_._v("操作界面")]),_._v(" "),t("li",[_._v("管理系统资源")]),_._v(" "),t("li",[_._v("配置系统参数")]),_._v(" "),t("li",[_._v("文件存储数据")])]),_._v(" "),t("p",[_._v("应用程序运行需要系统提供"),t("strong",[_._v("哪些支持")]),_._v("？")]),_._v(" "),t("ol",[t("li",[_._v("ext文件要存储在外设中，比如硬盘")]),_._v(" "),t("li",[_._v("启动需要装入到cpu")]),_._v(" "),t("li",[_._v("为程序分配内存")]),_._v(" "),t("li",[_._v("如果对于一些外设调用，比如控制台输出，进行调配")]),_._v(" "),t("li",[_._v("死循环/异常等等，cpu如何处理")]),_._v(" "),t("li",[_._v("程序退出，归还内存和资源")])]),_._v(" "),t("h2",{attrs:{id:"_2-操作系统功能和定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-操作系统功能和定义"}},[_._v("#")]),_._v(" 2. 操作系统功能和定义")]),_._v(" "),t("h3",{attrs:{id:"操作系统的功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作系统的功能"}},[_._v("#")]),_._v(" 操作系统的功能")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("进程管理（CPU管理）")]),_._v(" "),t("ul",[t("li",[_._v("进程控制：创建、暂停、唤醒、撤销")]),_._v(" "),t("li",[_._v("进程调度：策略、优先级")]),_._v(" "),t("li",[_._v("进程通信：进程通信")])])]),_._v(" "),t("li",[t("strong",[_._v("内存管理")]),_._v(" "),t("ul",[t("li",[_._v("内存分配")]),_._v(" "),t("li",[_._v("内存共享")]),_._v(" "),t("li",[_._v("内存保护")]),_._v(" "),t("li",[_._v("虚拟内存")])])]),_._v(" "),t("li",[_._v("设备管理\n"),t("ul",[t("li",[_._v("设备的分配和调度")]),_._v(" "),t("li",[_._v("设备传输（与cpu、内存）控制")]),_._v(" "),t("li",[_._v("实现设备无关性")]),_._v(" "),t("li",[_._v("设备驱动")])])]),_._v(" "),t("li",[_._v("文件管理\n"),t("ul",[t("li",[_._v("存储空间管理")]),_._v(" "),t("li",[_._v("文件操作")]),_._v(" "),t("li",[_._v("目录操作")]),_._v(" "),t("li",[_._v("权限控制管理")])])])]),_._v(" "),t("p",[_._v("对于所有操作系统，必须要有cpu管理和文件管理功能。对于其他操作系统，例如物联网的系统（没有设备、文件），或者windows（附加网络管理）")]),_._v(" "),t("h3",{attrs:{id:"操作系统的定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作系统的定义"}},[_._v("#")]),_._v(" 操作系统的定义")]),_._v(" "),t("p",[t("strong",[_._v("操作系统是一个大型系统程序")]),_._v("。提供用户接口，给应用程序分配和调度软硬件资源。")]),_._v(" "),t("p",[_._v("总体来说，操作系统在整个计算机系统中的定位如下所示，"),t("strong",[_._v("承上启下")]),_._v("：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1g7c2akhrxij30fy06sn04.jpg",alt:"image-20190925210101424"}})]),_._v(" "),t("h2",{attrs:{id:"_3-操作系统发展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-操作系统发展"}},[_._v("#")]),_._v(" 3. 操作系统发展")]),_._v(" "),t("p",[_._v("发展的动力源于：用户需求和硬件进步。")]),_._v(" "),t("h3",{attrs:{id:"单道批处理系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单道批处理系统"}},[_._v("#")]),_._v(" 单道批处理系统")]),_._v(" "),t("p",[_._v("人工将多个作业输入到磁盘，形成作业队列。操作系统"),t("strong",[_._v("自动进行")]),_._v("：装入-运行-撤出。")]),_._v(" "),t("p",[_._v("特点总结：批量（作业队列）、自动（无需手工）、串行。")]),_._v(" "),t("p",[_._v("在单道系统中，CPU的利用效率如下图。外设和CPU交替空闲和忙碌，利用效率低。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1g7c31m0y1aj30oc0g6wir.jpg",alt:"image-20190925212703148"}})]),_._v(" "),t("h3",{attrs:{id:"多道批处理系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多道批处理系统"}},[_._v("#")]),_._v(" 多道批处理系统")]),_._v(" "),t("p",[_._v("内存中存放中"),t("strong",[_._v("多道")]),_._v("程序，当某道程序因为某种原因（比如IO）不能继续运行而放弃CPU，操作系统调度另一个程序运行。")]),_._v(" "),t("p",[_._v("特点总结：多道、（宏观上）并行、（微观上）串行。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1g7c3957q4oj30ry0fswjm.jpg",alt:"image-20190925213417240"}})]),_._v(" "),t("p",[_._v("如上图所示，程序穿插运行，使得CPU和外设都尽量处于忙碌中。")]),_._v(" "),t("h2",{attrs:{id:"_4-分时技术与分时操作系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-分时技术与分时操作系统"}},[_._v("#")]),_._v(" 4. 分时技术与分时操作系统")]),_._v(" "),t("p",[_._v("多道批处理系统，交互能力差。即使一个系统完成io，但是还要等另一个系统之后，此系统的运行是"),t("strong",[_._v("停滞的")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"中断技术和通道技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中断技术和通道技术"}},[_._v("#")]),_._v(" 中断技术和通道技术")]),_._v(" "),t("p",[_._v("60年代中期，"),t("strong",[_._v("硬件")]),_._v("出现了2大进展：")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("中断技术")]),_._v("：cpu接受中断信号，停下当前工作，转去处理外部事件。处理完毕后，回到原来工作的中端处（断点）继续原来工作。")]),_._v(" "),t("li",[t("strong",[_._v("通道技术")]),_._v("：专门处理外设和内存之间的"),t("strong",[_._v("数据传输")]),_._v("的处理机。")])]),_._v(" "),t("h3",{attrs:{id:"多终端计算机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多终端计算机"}},[_._v("#")]),_._v(" 多终端计算机")]),_._v(" "),t("p",[_._v("任务分为：科学计算任务（CPU密集） 与 事务性任务（交互性高、响应快速）。")]),_._v(" "),t("p",[_._v("同时，出现了"),t("strong",[_._v("多终端计算机")]),_._v("。采用分时技术，让每个终端没有中断的感觉。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1g7c46yyrokj30ki0a80xn.jpg",alt:"image-20190925220647859"}})]),_._v(" "),t("h3",{attrs:{id:"分时技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分时技术"}},[_._v("#")]),_._v(" 分时技术")]),_._v(" "),t("p",[_._v("主机以"),t("strong",[_._v("很短的时间片")]),_._v("为单位，把cpu轮流分给每个终端使用，直到全部作业被运行玩。")]),_._v(" "),t("p",[_._v("每个终端的等待周期 = 时间片 x (终端数量 - 1)")]),_._v(" "),t("p",[_._v("因此，对于分时系统，特点有：多路调制性、独占性（感觉上）、交互性（及时响应）。"),t("strong",[_._v("Unix就是一个具有硬件平台无关、特殊文件（外设是文件）等特性的分时操作系统")]),_._v("。")]),_._v(" "),t("h2",{attrs:{id:"_5-典型操作系统类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-典型操作系统类型"}},[_._v("#")]),_._v(" 5. 典型操作系统类型")]),_._v(" "),t("p",[_._v("微机操作系统：MacOS、Windows")]),_._v(" "),t("p",[_._v("实时操作系统：军事、工业控制")]),_._v(" "),t("p",[_._v("嵌入式操作系统：软硬件一体化。例如安卓、嵌入式Linux")]),_._v(" "),t("p",[_._v("网络操作系统：普通系统+网络通信+网络服务")])])}),[],!1,null,null,null);v.default=s.exports}}]);