# 宋杭原｜ Part 2 | 模块二
### 简答题
 一.描述引用计数的工作原理和优缺点
 
 答： 
	 1.引用计数的工作原理是引用计数器，记录当前对象的引用数， 当前对象引用关系发生变化时，修改引用数，根据引用数是否为0，判断就对象是否被释放。
	 2. 优点 发现垃圾时立即回收，最大程度减少程序的暂停。 缺点 无法解决对象的循环引用，时间开销大 

二.描述标记整理算法的工作流程

答：
    标记整理算法是标记清除算法的加强，1遍历所有对象，标记活动对象。2对未标记的回收对象进行内存空间整理排序，把不连续的碎片空间进行整合。3清除没有标记对象

三.描述V8中新生代存储区垃圾回收的流程

答：
    V8的分代回收是将回收对象分为新生代和老生代，相比于老生代，新生代的回收空间更小，采用的是复制算法与标记整理。将新生代的内存分成两个大小一样的空间From空间和To空间，通过标记整理算法，将活动对象拷贝至To空间，清理From空间。 拷贝过程中会出现新生代晋升老生代的情况，满足条件，一轮CG算法过后还有活动对象，或者To空间使用率超过25%

四. 描述增量标记算法在何时使用及工作原理

答:
   在V8分代回收时，老生代的回收算法中使用，老生代回收算法有标记清除，标记整理和增量标记。工作原理就是在标记完成后，增量标记，将标记工作分解为更小的模块，可以让JS应用逻辑在模块间隙执行一会，在CG扫描和标记时，回收与执行交替进行，不至于出现停顿。