---
sidebar: auto
date: 2019-12-21
author: pigcan
hero: https://user-images.githubusercontent.com/848515/71269481-6da1ca00-238a-11ea-8a68-0d2511ec97aa.png
description: 玄寂结合他在蚂蚁多年的构建基础技术的思考，及当下的机遇和挑战，慢慢推演到如何实现 Gravity 这个跑在浏览器中的构建工具
---

# 基于浏览器的实时构建探索之路

## PPT

[D2 基于浏览器的实时构建探索之路 - 终稿.pdf](https://github.com/pigcan/blog/files/3989255/D2.-.pdf)

## 自我介绍

首先先自我介绍下，我是来自 [RichLab 花呗借呗前端团队](https://www.yuque.com/richlab/join-us/invitation) 的同学。在公司大家喊我玄寂，生活中大家称呼我 pigcan 或者猪罐头。除了是一个程序员，我现在也在尝试做一名 [YouTuber](https://www.youtube.com/channel/UCXSC6NZo2q8N2OzvXxp2c1A?view_as=subscriber) 和 [up 主](https://space.bilibili.com/23044280)，也在[微信公众号](https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg2NTA1Nzg1OQ==&scene=124#wechat_redirect)中分享我的生活，我自己的方式践行快乐工作，认真生活。

## 体感案例

![test](https://user-images.githubusercontent.com/848515/71267790-68428080-2386-11ea-92fe-18e8db039a8b.gif)


首先为了让大家有更好的体感，我们先来看一个案例。这个案例是使用code mirror 加 antd tab 组件加 gravity 做的一个实时预览。大家可以通过这个 gif 能看到，我变更js文件或者样式文件的时候，在右侧这个预览区域可以进行实时的更新，那这部分的能力完全由浏览器作为支撑在提供出来，并不涉及本地 server 或者 远程 server 能力的输出。

在有了这个体感之后，大家可能会更容易理解我之后讲的内容。

## 文章提纲

那接下来我会从5个方面来切入来谈一谈基于浏览器的实时构建探索之路。

- 第一点是背景，从历史来看构建工具每次发生大的变更时，都和前端的技术风潮息息相关，那 2019 年前端界发生的变化，也可以说是促使我做这个技术探索的原因。

- 有了这些变化，通常情况下现有的技术架构就会可能出现不满足现状的情形，这就是机遇了，这也就是我第二部分想要来说的，基于这些变化对于我们的构建会有哪些机遇，而面对这些机遇，我们在技术上又会有哪些挑战。

- 第三点我会来谈一下在面对这些机遇和挑战时，我们在技术上的做出的选择，也就是我们如何来架构整个技术方案。

- 第四点我会来谈一谈基于这种技术架构下会需要克服的技术难点，主要是要抛一些我的解决思路。

- 第五点也是最后一点，我会来谈一谈这个技术方案可以有的未来，其实更多的是我对他的期待。


## 背景

时间回到2011年，那会儿我们前端一直在强调复用性，基于复用性的考虑，我们会把所有的文件尽可能的按照功能维度进行拆分，拆的越小越好，这种追求我称它为粒子化。粒子化的结果是工程的文件会非常非常碎，所以那个时候的构建工具，更多的思路是化零为整，典型工具有 grunt 和 gulp。

随着粒子化时代的到来，到 13 年左右很快新的问题出现了，在我看来主要集中在了两个部分：第一个是，传统的拼接脚本的方式开始并不能满足模块化的需求，因为模块之间存在依赖关系，再者还有动态化载入的需求；第二个是那么多功能模块被划分出来了我们放哪里是一个问题，最初 npm 是并没有向前端模块开放的。 所以接下来便出现了模块加载器，和包管理之战。这场战役让我们的前端模块规范变得五花八门，最后好在所有的包落在了 npm 了。所以这个时候的构建工具更多的是抹平模块规范，典型工具 webpack 的出现意义很大一部分就在于此（当然在这个过程中其实还出现了各种基于加载器去做的的定向构建工具和包管理，这里就先不谈了）。


那时间再次回到 2019 年，我们听到了不一样的声音，这些声音都在对抗 bundler 的理念。

比较典型的有两篇文章:

- [Luke Jackson - Don’t Build That App!](https://formidable.com/blog/2019/no-build-step/)
- [Fred K. Schott - A Future Without Webpack](https://www.pika.dev/blog/pika-web-a-future-without-webpack/)

为什么会有这些声音，这些声音背后的原因是什么？一方面是因为会新的技术标准的出现，另外一方面也来源于日益陡峭的学习曲线。

现在的前端开发要运行一个项目通常我们需要知道：
- 前端构建的概念
- 要知道在琳琅满目的打包工具中做合理选择
- 要知道如何安装开发环境，如何执行构建，如何执行调试
- 要知道如何配置 - webpack、webpack loaders and plugins etc.
- 要知道如何写插件 - babel APIs、webpack APIs etc.
- 如何调试插件
- 如何解决依赖升级 - babel 5 -> 6 -> 7, webpack 1 -> 2 -> 3 -> 4 -> 5

反正就是一个字，`“南”`

再来看看我们的包管理，以 CRA 为例现在我们要运行起一个 react 应用，我们居然需要附加如此复杂的依赖。

![image](https://user-images.githubusercontent.com/848515/71268717-8c9f5c80-2388-11ea-81df-a65da0a95c86.png)

在网上也有一些调侃，前端的依赖比黑洞造成的时间扭曲还要大。

![image](https://user-images.githubusercontent.com/848515/71268673-6c6f9d80-2388-11ea-84f0-8a2c225f9f15.png)


回过头再来看，2019 的趋势是什么，相信大家都感觉到了云这个词，我们很多的流程都在上云。那面向上云的这种场景，我们如此复杂的 bundler 和包管理是否符合这种趋势呢？

归根结底，其实是要探讨一个问题：`前端资源的加载和分发是不是还会有更好的形式`。

面对这个问题，我觉得是有空间的，正是这种笃定，才有了接下来的内容。

## 机遇和挑战

### 现状
在上一小节中我们已经谈到了 2019 年不管是 pro / low code 都在朝着上云的趋势在变化，那应对这些变化，我们先来看看现有的一些平台，他们对于构建的态度是什么。

|  类型  | 代表  |
|  ----  | ----  |
| 专业  | Codesandbox、Stackbiltz、Gitlab Web IDE、Ali Cloud IDE |
| 辅助  | Outsystems、Mendix、云凤蝶 |

从这些平台中我们可以总结出三种态度：

- 只做编辑器或者画板
- 做编辑器或者画板并且提供了一个限制性的研发环境
- 做编辑器或者画板并且提供了一个完全开放的研发环境

总结下这三种态度，本质上是使用了两种技术方案
- 容器技术
- 基于浏览器的加载策略

最终其实可以总结为:

- 把服务端的能力进行输出。这种方案的优势是服务端拥有和本地研发环境一致化的环境；缺点是即时性较差、效率较差、无法离线、成本高昂。
- 把客户端的能力释放出来。这种方案的优势是无服务端依赖、即时性、高效率、可离线运行；但缺点也比较明显，所有能力建设都必须围绕着浏览器技术


云时代的来临，我认为配套的构建也来到了十字路口，到底是继续维持现有的技术架构走下去，还是说另辟蹊径，寻找一条更加轻薄的方式来配合上云。

### Bundless 

我们再回过来看看，2019 年为什么在社区能释放出这些声音来（[Luke Jackson - Don’t Build That App!](https://formidable.com/blog/2019/no-build-step/)、[Fred K. Schott - A Future Without Webpack](https://www.pika.dev/blog/pika-web-a-future-without-webpack/)），为什么会有人敢说，我们可以有一个没有 webpack 的未来，为什么 Bundless 的想法能够成立，支撑他们这些说法的技术依据到底是什么。

归纳总结下：

- 使用模块加载器，在运行时进行文件分析，从而获取依赖，完成树结构的梳理，然后对树结构开始编译

比较典型的产品有：systemjs 0.21.x & JSPM 1.x 、stackblitz 、codesandbox

- 使用 Native-Module，即在浏览器中直接加载 ES-Module 的代码

比较典型的产品有：systemjs >= 3.x & JSPM 2.x 、@pika/web

再看了这些产品和技术实现后，我内心其实非常笃定，我觉得机会来了，未来肯定会是轻薄的方式来配合上云，只是这一块目前还没有人来专心突破这些点。

所以我觉得未来肯定是 `云 + Browser Based Bundless + Web NPM`，这就是 Gravity 这套技术方案出现的背景了。

### Gravity 的挑战

所有的挑战其实来源于我们从 nodejs 抽出来之后，在浏览器内的适配问题。

可以罗列下我们会碰到的问题：
- nodejs 文件系统 
- nodejs 文件 resolve 算法
- nodejs 内置模块
- 任意模块格式的加载
- 多媒体文件
- 单一文件多种编译方式
- 缓存策略
- 包管理
- …… 

总结下其实是四个方面的问题：

- 如何设计资源文件的加载器
- 如何设计资源文件的编译体系
- 如何设计浏览器端的文件系统
- 如何设计浏览器端的包管理


## Gravity 架构大图

![image](https://user-images.githubusercontent.com/848515/71269054-59a99880-2389-11ea-828f-f3cb340c6781.png)

### 架构图

![image](https://user-images.githubusercontent.com/848515/71269082-6c23d200-2389-11ea-95d0-3f2512bf0d71.png)

从这个图中其实可以归纳出，我们就是在解决上面提到四个问题，即：

- 如何设计资源文件的加载器
- 如何设计资源文件的编译体系
- 如何设计浏览器端的文件系统
- 如何设计浏览器端的包管理

### 名词解释

这里会提几个名词，方便之后大家理解。

`Transpiler`: 代码 A 转换为代码 B 转换器

![image](https://user-images.githubusercontent.com/848515/71269140-8eb5eb00-2389-11ea-8593-53643ba888b8.png)


`Preset`: 是一份构建描述集合，该集合包含了模块加载器文件加载的描述，
转换器的描述，插件的描述等。
![image](https://user-images.githubusercontent.com/848515/71269175-a7be9c00-2389-11ea-91a2-a5f684f666bb.png)


`Ruleset`: 具体一个文件应该被怎么样的 transpilers 来转换。
![image](https://user-images.githubusercontent.com/848515/71269208-b7d67b80-2389-11ea-8240-d3f6a7630a81.png)


这里可以衍生出来说一说为什么要设计 Preset 的概念。在文章的最前面我提到了现在要构建一个前端的项目学习曲线非常陡峭。在社区我们能看到两种解法：

- create-react-app: 它把 react 应用开发所需要的所有细节都封装在了这个库里面，对用户只是暴露了一些基本的入口，比如启动应用，那它的好处是为着这一类 react 应用开发者提供了极致的体验，降低了整个学习曲线。但缺点也比较明显就是 CRA 并不支持自定义配置，如果你需要个性化，那不好意思，你只能 eject，一旦 eject 之后后续所有的配置就交给应用开发者，后续便不能再融入回 CRA 的闭环了。
- @vue/cli: 它和 CRA 一样做了配置封装，但是和 CRA 不一样的地方是，它自身提供了一些个性化的能力，允许用户修改一些参数。

通过以上两者不难发现，他们都在做一件事情：解耦应用开发者和工具开发者。

再回到 Preset，我的角色是工具专家，提供一系列的底层能力，而 Preset 则是垂直业务专家，他们基于我的底层能力去做的业务抽象，然后把业务输出为一个 preset。而真正的应用用户其实无需感知这部分的内容，对他们而言或许只需要知道一些扩展配置。


### Gravity 的消费链

![image](https://user-images.githubusercontent.com/848515/71269416-3af7d180-238a-11ea-93c2-aa597380cf20.png)

在 Gravity的设计中，Core 层其实没有耦合任何的具体业务逻辑（这个逻辑指的是，比如 react 应用要怎么执行，vue 应用要怎么执行等），Core 层简单来讲，它是实现浏览器实时构建的事件流注册、分发、执行的集合。而具体的业务场景，比如 React，Vue，小程序等则是通过具体的 Preset 来实现整合。而我们的 Preset 会再交给对应的垂直场景的载体，比如 WebIDE 等。


## 专题深入

### 专题一: 插件机制

![image](https://user-images.githubusercontent.com/848515/71269481-6da1ca00-238a-11ea-8a68-0d2511ec97aa.png)

事先我们来看一看 Gravity 是如何运作的，上图只是一个流程示意，但也能说明一下流程上的设计。注意看我们在 Plugin 类上定义了一些事件，而这些事件是允许被用户订阅的，那 Gravity 在执行时，会对这些事件先尝试绑定。在进入到相关的流程时，会分发这些事件，订阅了该事件的订阅者，就会在第一时间收到信息。举例来说，Plugin 中的 Code 描述了如何来获取代码的方式，而在 Gravity Core 的整个生命周期中，会调用 fetch-data 去分发 Code 事件，如果说用户订阅了该事件，那么就会马上响应去执行用户定义的获取代码的方式，并得到代码进而告诉内核。

所以不难看出，Gravity 本质上是事件流机制，它的核心流程就是将插件连接起来。

既然如此，其实我们要解决的重点就是：
- 如何进行事件编排
- 如何保证事件执行的有序性
- 如何进行事件的订阅和消息的分发

说到这里不知道大家是不是有一种似曾听闻的感觉，没错，其实这些思路都是来自于 webpack 的设计理念，webpack 是由一堆插件来驱动的，而背后的驱动这些插件的底层能力，来源于一个名叫 [Tapable](https://github.com/webpack/tapable) 的库。

[Tapable](https://github.com/webpack/tapable) 这个库我个人非常非常非常喜欢。原因在于它解决了很多我们在处理事件时会碰到的问题，比如有序性。另外要做一个插件系统的设计其实很简单，但后果是对用户会有额外的负担来学习如何书写，所以我选择 [Tapable](https://github.com/webpack/tapable) 来做还有另外很重要的一个原因，用户可以继续延续 webpack 插件写法到 Gravity 中来。

![image](https://user-images.githubusercontent.com/848515/71269677-dd17b980-238a-11ea-8f44-efde419f1da0.png)

这里我罗列一下 [Tapable](https://github.com/webpack/tapable) 所拥有的能力。并用伪代码的方式为例来讲一讲我们在核心层如何定义一个插件（定义可被订阅的事件），业务专家如何来使用这个自定义插件（订阅该事件），以及我们在核心层如何来执行这个插件（绑定，分发）。

- 定义插件

![image](https://user-images.githubusercontent.com/848515/71269793-1a7c4700-238b-11ea-8b58-056c7ac3d871.png)


- 自定义插件

![image](https://user-images.githubusercontent.com/848515/71269818-26680900-238b-11ea-9abe-439974462882.png)


- 核心层绑定和分发

![image](https://user-images.githubusercontent.com/848515/71269849-37b11580-238b-11ea-8568-76dd4972f792.png)


所以 `Gravity-Core 重在事件的编排和分发，Plugin 则重在事件的申明，而 Custom plugins 则是订阅这些事件来达到个性化的目的`。


### 专题二: 如何实现编译链

在讲如何实现前，我们再回过来看下 Ruleset，在架构大图小节中我说明了下，Ruleset 是用来描述一个文件应该被怎么样的 transpilers 来转换。而 Ruleset 的生成其实是依赖于 preset 中 rule 的配置，这一点，其实 Gravity 和 webpack 是一致的，这种设计原因有两点：1. 用户可以沿用 webpack 的 rule 配置习惯到 Gravity 中来；2. 我们甚至可以复用一些现有的 webpack loader，或者说让改造量变得更小。

![image](https://user-images.githubusercontent.com/848515/71269999-7e9f0b00-238b-11ea-9e6b-12efc6ba40f1.png)

在这里我们以小程序中的 axml 文件为例，假设现在有一个 index.axml 需要被被编译，此时会通过 Preset 中 rule 描述，最终被拆解为一个 ruleset，在这个 set 信息中我们可以获取到 index.axml 文件需要经过怎么样的转换流程（也可以理解为该 index.axml 文件需要什么 transpiler 来进行编译）。该示例中我们可以看到，index.axml 需要经过一层 appx 小程序编译后再把对应的结果交给 babel 进行编译，而 babel 编译的结果再交给下级的消费链路。

暂时抛开复杂的业务层实现，我们想一想要实现这条串行的编译链路的本质是什么。相信大家都能找到这个答案，答案就是如何保证事件的有序性。既然又是事件，是不是我们又可以回过来看一看 [Tapable](https://github.com/webpack/tapable)，没错，在 [Tapable](https://github.com/webpack/tapable) 中就有这样一个 hook - `AsyncSeriesWaterfallHook`，异步串行，上一个回调函数的返回的内容可以作为下一回调函数的参数。说到这是不是很多问题就迎刃而解了。没错，那么在 Tapable 中实现编译链是不是就被简化为如何基于 ruleset 动态创建 AsyncSeriesWaterfallHook 事件，以及如何分发的问题。

### 专题三: 文件系统和包管理

### BrowserFS
如果我们在浏览器中没有文件系统的支撑，其实可以想象本地的文件的依赖将无法被解析出来（即无法完成 resolve 过程），所以实现浏览器内的文件系统是实现浏览器编译的前提条件。这里幸运的是 [John Vilk](https://github.com/jvilk) 前辈有一个项目叫做  [BrowserFS](https://github.com/jvilk/BrowserFS)，这个库在浏览器内实现了一个文件系统，同时这个文件系统模拟了 Nodejs 文件系统的 API，这样的好处就是，我们所有的 resolve 算法就可以在浏览器内实现了。同时这个库最棒的一点是提出了 backends 的概念。这个概念的背后是，我们可以自定义文件的存储和读取过程，这样文件系统的概念和思路一下子就被打开了，因为这个文件系统其实本质上并不局限于本地。

在这里我们可以大概看下如何使用 BFS。

![image](https://user-images.githubusercontent.com/848515/71270063-a1c9ba80-238b-11ea-86ca-8d2d2f45f5ae.png)

是不是很简单。但实际情况下大家在使用过程中，如果使用深入的话还会碰到很多问题，这些问题来自于多个文件系统间进行数据同步，会碰到不少 bug 和性能问题。这里我就不展开了。


### 包管理
有了文件系统我们再来想一想前端不可分割的一个部分，包管理。

思路一：浏览器内实现 NPM

这个思路是最容易想到的，通常做法是我们会拉取包信息，然后对包进行依赖分析，然后安装对应的包，最后把安装的包内容存储到对应的文件系统，编译器会对这些文件进行具体的编译，最后把编译结果存在文件系统里面。浏览器加执行文件时，模块加载器会加载这些编译后的文件。思路很通畅。但是这种方式的问题是原模原样照搬了 npm 到浏览器中，复杂度还是很高。

缺点：
- 首次很慢
- 存储量大
- 依赖 NPM Scripts 的包得不到解决



思路二：服务化 NPM

这一块的思路其实来自于对我影响最大的两篇文章

- [stackblitz 的 turbo CDN 思路](https://medium.com/stackblitz-blog/introducing-turbo-5x-faster-than-yarn-npm-and-runs-natively-in-browser-cc2c39715403)
- [codesandbox 的 dependency-packer 思路](https://codesandbox.io/post/how-we-make-npm-packages-work-in-the-browser)

非常精彩，我也写过一些文章来分析他们。但是 stackblitz 和 codesandbox 在 npm 思路上各自都有一些缺陷，比如 stackblitz 的资源分发形式，codesandbox 的服务端缓存策略。

服务化的 NPM 本质是基于网络的本地文件系统。怎么来理解这句话呢？我们来举个例子，一起来构想一下如何基于 unpkg / jsdelivr 做一个的文件系统。

假设我们现在依赖 lodash 这个库，那么在我们对接的文件系统里面会发一个请求（https://unpkg.com/lodash@4.17.15/?meta）给远程的 unpkg，该请求可以获取到完整的目录结构（数据结构），那么在得到这份数据后，我们便可以初始化一个文件系统了，因为我们可以通过接口返回的数据完整的知道目录内会有什么，以及这个文件的尺寸，虽然没有内容。所以此时文件系统内包含了一整个完整的树结构。 假设此时我们通过 resolve 发现，我们的文件中确切依赖了一个文件是 `lodash/upperCase.js`，这个文件系统事先需要做的事情是先在本地文件数里面找下是否存在 `upperCase.js`，这里毫无疑问是存在的，因为我们在这个接口中 https://unpkg.com/lodash@4.17.15/?meta 能找到对应的 `upperCase.js` 这个文件，能确定肯定是在文件系统里面是有标记的但是如之前所说 meta 信息只是一种标记，他是没有内容的，那么接下来我们就会去往 unpkg 服务器上那固定的文件，发送请求获取该文件内容 `https://unpkg.com/lodash@4.17.15/upperCase.js`，至此我们的基于 unpkg / jsdelivr 的文件系统就设计好了。


所以服务化 NPM 的关键是:

需要我们抽象
- 如何设计包管理依赖的下发逻辑

需要我们包装
- 如何把这个下发逻辑桥接到对应的文件系统


注明：下发逻辑指的是我们按什么规则去下发用户的 dependencies。

服务化 NPM 的要点是:

- 建立一个下发策略，比如基于项目维度的 deps，依赖的下发是基于依赖包的入口文件分析所产生的依赖文件链。
- 补充在默认下发策略不满足需求时，如何建立动态下发的过程
- 依赖下发的数据结构，如何体现依赖关系，父子关系等
- 如何快速分析依赖关系
- 如何缓存依赖关系
- 如何更新缓存的依赖关系
- 如何把以上这些信息桥接到我们的文件系统



## 未来

对于 Gravity 的未来，其实更多的是我对他的憧憬，总结一下可以是三个要点。

### PVC

- Pipelined 流水线化

垂直业务场景所对应的 Preset 的产出，可以按着某个流程，用极少的成本自由组合一下就可以使用。

- Visualized 可视化

所有搭建 Preset 、以及 Preset 内配置都可以通过可视化方式露出。

- Clouds 云化

Gravity 服务化。
