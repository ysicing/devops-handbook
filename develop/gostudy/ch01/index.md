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
        fallthrough // 可以执行满足条件的case的下一个case
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

breakTag:
	fmt.Println("end")
}
```