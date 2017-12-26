---
layout: post
title:  "Hello world!"
date:   2015-05-07 12:54:48
categories: jekyll
tags: jekyll test
comments: true
mathjax: true
excerpt: 本文仅用做测试 Jekyll 的各种排版效果.
---

本文仅用做测试 [Jekyll][jekyll] 的各种文字效果.

### 测试标题

# 这是一个一级标题
## 这是一个二级标题
### 这是一个三级标题
#### 这是一个四级标题
##### 这是一个五级标题
###### 这是一个六级标题

### 测试基本样式

测试 *斜体*, **加粗** 和 **混合_样式_** ***测试***

测试引文
> 这是一段引文

测试下划线连接单词: this_is_the_underscore

测试删除线: ~~strikethrough~~

测试上标: 2^(nd) test for superscript.

测试脚注: 插入一个脚注[^1]

测试分割线:
***

### 测试列表

无序列表:

* item
* item
* item

有序列表:

1. item
2. item
3. item

### 测试代码插入

测试 inline 方式插入代码 `print('Hello, world!')`.

测试第一种插入代码的方式:

```java
class TestClass {
    public static void main(String[] args) {
        System.out.println("Hello, world!");  // say hello to the world
    }
}
```

测试第二种插入代码的方式:

<div>
{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}
</div>

### 测试表格

测试无对齐 Markdown 表格:

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

测试带对齐 Markdown 表格:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### 测试图片

Markdown 风格插入图片:

![](/images/favicon.png)
<figcaption> 本网站的 favicon </figcaption>

Jekyll 风格插入图片:

{% include figure.html src="/images/favicon.png" caption="测试说明文字" %}

测试 SVG 图片:

<div class="svgdiv">
<svg width="400" height="150">
  <rect x="130" y="20" width="100" height="100" stroke="black" stroke-width="1" fill="white" />
  <line x1="90" y1="45" x2="130" y2="45" stroke="black" stroke-width="1" />
  <line x1="90" y1="95" x2="130" y2="95" stroke="black" stroke-width="1" />
  <text x="70" y="50" fill="black" text-anchor="middle" font-size="20px">x</text>
  <text x="70" y="100" fill="black" text-anchor="middle" font-size="20px">y</text>

  <text x="180" y="90" fill="black" text-anchor="middle" font-size="40px">*</text>
  <line x1="230" y1="70" x2="280" y2="70" stroke="black" stroke-width="1" />
</svg>
</div>
<figcaption> SVG 图片测试 </figcaption>

### 测试公式

<div>
$$
\hat{y} := \text{sgn}(\frac{1}{2}\sum_{i=1}^{n-1}\hat{\alpha}_i y_i \mathcal{K}(\mathbf{x_i},\mathbf{x_n})+\hat{b})
$$
</div>


[^1]: 脚注1. 

[jekyll]: http://jekyllrb.com
