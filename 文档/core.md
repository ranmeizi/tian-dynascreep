# 核心思路

代码只在1次循环中跑，memo是比较重要的
所以需要把要干的事写在 memo 中

在执行者之上，抽象出管理机构，负责整个甜朝的管理

## 顺序

- 策略阶段 各个抽象部门发动策略技能，有可能对单位施加任务
- 行动阶段 执行各个 单位 的动作

## 蝗上

操作者即蝗上

## 巢庭

服务于蝗上，管理 虫子社会

- 统计已有资源
- 生成报表
- 在拥有的各个洞之间调配资源
- 提出 巢廷 级的需求

## 衙闽

管理 room

- 不同等级，有自己不同的运作模式
- 管理 room 中的职能异化的 screeps  
- 提出 衙闽 级的需求

## 虫团

虫子因为某种目的自发形成的团体

- 提出 团 级的需求

## 虫子

执行者

- creep/struct 视为虫子，是上层抽象的执行者，因为只有他们才能调api

### Energy Keeper（role）

每个房间2个，用来保证房间能量来源。尽可能有效采集300tik刷新的source资源

### transport（task）

接单运输

### worker (task)

啥都能做

### 工程师 （role）

建筑房屋

## 任务队列

### room 任务


### creep 任务

creep 任务 对应一种行为模式

他应该有

1. type任务类型
2. 支持任务运行的function
3. 中断条件： 完成终止pop / 中断 优先插入

自我循环任务
function 中会自己向自己下达下一个任务

## 犬守

掌管 room 的抽象职业

### 物流需求

1. 物流单
在 memory 中存位置信息 pos , creep们会循环 range 内的物流单
creep range

range 递增：
为了减少搜索的tick数 应有一套合理的range 搜素规则

- 线性递增
- 指数递增
- 固定搜索range区域档位

跨房物流

- 小物流  
    spawn 和 ext 这种小量的单 由1个人完成，1个人结束

- 大物流
    1个人完成不了的物流，

2. 检查各个 structor store 情况，按照小物流(spawn/ext)和大物流(link/container/storage等) 

### tick 流程

- 准备阶段 prepare
- 行动阶段 run

prepareList
runList