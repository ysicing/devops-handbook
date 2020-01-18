## Go基础

### 变量和常量

关键字&保留字

```
# 25个保留字
    break        default      func         interface    select
    case         defer        go           map          struct
    chan         else         goto         package      switch
    const        fallthrough  if           range        type
    continue     for          import       return       var

# 37个保留字

Constants:    true  false  iota  nil

Types:  int  int8  int16  int32  int64  
        uint  uint8  uint16  uint32  uint64  uintptr
        float32  float64  complex128  complex64
        bool  byte  rune  string  error

Functions:  make  len  cap  new  append  copy  close  delete
            complex  real  imag
            panic  recover
```

注意

```
1. 函数外的每个语句都必须以关键字开始（var、const、func等）
2. :=不能使用在函数外。
3. _多用于占位，表示忽略值(匿名变量，不占用命名空间，不会分配内存，不需要存在重复申明)
```

#### 变量

```go
package main

import (
	"fmt"
)
// 全局变量m
var m = 100

func main() {
	n := 10
	m := 200 // 此处声明局部变量m
	fmt.Println(m, n)
}
```

#### 常量

常量是恒定不变的值

```go
const pi = 3.1415

const (
    // const声明多个常量时，如果省略了值则表示和上面一行的值相同
    p1 = 3.1415
    p2 // 3.1415
    p3 // 3.1415
)
```

#### iota

iota是go语言的常量计数器，只能在常量的表达式中使用。iota在const关键字出现时将被重置为0。const中每新增一行常量声明将使iota计数一次(iota可理解为const语句块中的行索引)

```go
const (
    n1 = iota // 0
    n2 // 1
    n3 // 2
    _   // 跳过某些值
    n4 // 3
    n5 = 10 // 10
    n6 // 4
)

const (
    _ = iota // 0
    KB = 1 << (10 * iota) // 1 1<<10 2^10 1024
    MB = 1 << (10 * iota) // 2 1<<20 2^20 1024*1024
)

const (
    a, b = iota + 1, iota + 2 // 1,2
    c, d  // 2, 3
)
```

### 基本数据类型

```
package main

import (
    "fmt"
    "math"
)

func main() {
	var a int = 17 // int 型 (int64)
	fmt.Printf("%d \n", a) // 17 十进制
	fmt.Printf("%b \n", a) // 10001 二进制
	fmt.Printf("%o \n", a) // 021 八进制
	fmt.Printf("%x \n", a) // 0x11 16禁止

    fmt.Printf("%.2f \n", math.Pi) // 默认都是浮点型float64

    var s = "666"
	fmt.Printf("%T \n", s) // 类型 string 
	fmt.Printf("%v \n", s) // 值 666
	fmt.Printf("%#v \n", s) // 值 "666"
}
```

注: 

```
布尔类型变量的默认值为false。
Go 语言中不允许将整型强制转换为布尔型.
布尔型无法参与数值运算，也无法与其他类型进行转换
```

### 字符串

字符串需要使用`"`

```
s1 := "ysicing"
```

多行字符串需要使用`\``

```
s1 := `牛
牛 牛
牛
`
```



#### 字符串操作

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	a := "666"
	b := "777"
	c := a + "-" + b
	fmt.Println(len(a))                    // len 长度
	fmt.Println(fmt.Sprintf("%s%s", a, b)) // 拼接
	fmt.Println(a + b)                     // 拼接
	fmt.Print(strings.Split(c, "-")[0])    // 分割
	res := strings.Split(c, "-")           // 分割
	fmt.Println(res)

	fmt.Println(strings.HasPrefix(c, "6"), strings.HasSuffix(c, "6")) //前缀/后缀判断

	s := "China万岁"
	for i := 0; i < len(s); i++ { // byte
		fmt.Printf("%T %v(%c) \n", s[i], s[i], s[i])
	}
	fmt.Println()
	for _, j := range s { // rune
		fmt.Printf("%T %v(%c) \n", j, j, j)
	}
	fmt.Println()
}
```

1. uint8类型, 或者叫 byte型 代表了ASCII码的一个字符.
2. rune类型, 代表一个 UTF-8字符(中文), 实际是一个int32.
3. 因为UTF8编码下一个中文汉字由3~4个字节组成,一个rune字符由一个或多个byte组成.

### 流程控制

#### if

```
if 表达式1 {
    分支1
} else if 表达式2 {
    分支2
} else{
    分支3
}
```

#### for

```go
package main

import "fmt"

func main() {
	// 基本格式
	for i := 1; i <= 3; i++ {
		fmt.Println(i)
	}

	j := 1
	for ; j <= 3; j++ {
		fmt.Println(j)
	}

	k := 1
	for k <= 3 {
		fmt.Println(k)
		k++
	}

	s := "HellGo"
	for i, j := range s {
		fmt.Printf("%d--->%v(%T)-->%c\n", i, j, j, j) // rune
	}

	// 死循环
	//for {
	//	fmt.Println("666")
	//}
}
```

#### switch case

简化判断

```
a := 4
switch a {
    case a < 1:
        fmt.Println("1")
    case 2,3:
        fmt.Println("2")
    default:
        fmt.Println("3") // 3
} 

b := 3
switch a {
    case a < 1:
        fmt.Println("1")
    case 2,3:
        fmt.Println("2")
        fallthrough // 可以执行满足条件的case的下一个case, 了解即可
    default:
        fmt.Println("3") 
} 

// 23

```

#### goto

```go
func main() {
	for i := 1; i <= 9999; i++ {
		for j := 3000; j <= i; j++ {
			if j < i {
				fmt.Printf("%d * %d = %d ", i, j, i*j)
			} else if j == i {
				fmt.Printf("%d * %d = %d\n", i, j, i*j)
				goto breakTag
			}
		}
	}

breakTag: // label
	fmt.Println("end")
}
```

### 运算符


算数运算符: + - * / %
关系运算符: == != > >= < << (结果为bool值)
逻辑运算符: && || ! (结果为bool值)
位运算符: & (相与 同为1为1)｜(相或 有1为1) ^（相异 或不同为1） << (乘2的n次方)  >> (除2的n次方)
赋值运算符: 先其他运算再赋值

```
5 << 2 // 5 --- 101 左移 2 10100 --- 10 5 * 2^ 1

5 >> 2 // 5 --- 101 右移 2 001 --- 1 
```

注: `++`,`--` 单独语句，不是运算符

### 数组

```
var 数组变量名 [元素数量]T // 一旦定义，长度不能变
var a [3]int
```

数组初始化

```
var a1 [3]int //数组会初始化为int类型的零值
var a2 = [3]int{1,2} //使用指定的初始值完成初始化
var a3 = [...]int{1, 2} // 让编译器根据初始值的个数自行推断数组的长度
a4 := [...]int{1: 1, 3: 5} // 指定索引值的方式来初始化数组 [0, 1, 0 ,3]
```

数组遍历

```go
package main

import "fmt"

func main() {
    var a = [...]int{1, 2, 3, 4, 5}
    // for循环遍历
	for i := 0; i < len(a); i++ {
		fmt.Println(a[i])
	}
    // range
	for i, j := range a {
		fmt.Println(i, j)
    }
    
    b := [...][2]int{
        {1,2},
        {2,1},
    }

    for _, i := range b {
        for _, j := range i {
            fmt.Printf("%d\t", j)
        }
    }
}
```

> 数组是值类型，赋值和传参会复制整个数组。因此改变副本的值，不会改变本身的值。

### 切片slice

切片是引用类型，拥有相同类型元素的可变长度的序列

```
var 切片名 []切片类型
var name []string
# 动态创建
make([]T, size, cap) // T 类型，size 长度， cap容量(从第一个到最后容量数)，cap 可省却
```

```go
package main

import "fmt"

func main() {
	//var a []int
	var c = []string{"a", "b"}
	fmt.Println(len(c), cap(c))
	d := make([]int, 2, 10)
    fmt.Println(len(d), cap(d))
    e := d[3:6]
    fmt.Println(len(e), cap(e)) // 3， 3-10 7


	s1 := make([]int, 3) // [0,0,0]
    s2 := s1
    // 拷贝前后两个变量共享底层数组，对一个切片的修改会影响另一个切片的内容
	s2[0] = 100
	fmt.Println(s1)
    fmt.Println(s2)
    
    // 遍历和for一样
    for i := 0; i < len(s1); i++ {
		fmt.Printf("%d\t", s1[i])
	}
	for _, i := range s2 {
		fmt.Printf("%d\t", i)
	}
}
```

> 切片的本质就是对底层数组的封装

#### append

```go
package main

import "fmt"

func main() {
	var num []int
	for i := 0; i < 20; i++ {
        // 追加一个元素
		num = append(num, i)
		fmt.Printf("%v len:%d cap:%d ptr:%p\n", num, len(num), cap(num), num)
    }
    // 追加多个元素
    num = append(num, 1, 2, 3)
	fmt.Printf("%v, \n", num)
    num1 := []int{99, 98}
    // 追加切片
	num = append(num, num1...)
	fmt.Println(num)
}
```

#### copy

```
copy(目标切片,源切片)
```

```go
func main() {
	// copy()复制切片
	a := []int{1, 2, 3, 4, 5}
	c := make([]int, 5, 5)
	copy(c, a)     //使用copy()函数将切片a中的元素复制到切片c
	fmt.Println(a) //[1 2 3 4 5]
	fmt.Println(c) //[1 2 3 4 5]
	c[0] = 1000
	fmt.Println(a) //[1 2 3 4 5]
    fmt.Println(c) //[1000 2 3 4 5]
    
    var a = make([]string, 5, 10) // 已经有5个了
	for i := 0; i < 10; i++ {
		a = append(a, fmt.Sprintf("%v", i))
	}
    fmt.Println(a, cap(a), len(a))
    
    // [     0 1 2 3 4 5 6 7 8 9] 20 15
}
```

### 指针

- 取地址 `&a`
- 根据地址取值 `*b`

#### make & new

都用来申请内存

```
make: slice，map， chan申请内存，返回类型本身
new: 基本数据类型申请内存, 返回指针, 且内存对应的值为类型零值

a := new(int)
```

### map

散列表(hash)实现, 无序的基于key-value的数据结构,引用类型，必须初始化才能使用.

```
map[KeyType]ValueType

make(map[keytype]valuetype, [cap])

code := make(map[string]string, 10)

code["a"] = "a"
code["b"] = "b"

# 判断 值是否存在
value, ok := map[key]
if ok {
    // 存在
} else {
    // 不存在
}

// 循环
for k, v := range map {
    // k,v v可省略
}
```