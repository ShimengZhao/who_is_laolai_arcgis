# 项目简介
老特建国同志最近好像持续在跳。听说他要在当前疫情还比较严重的时候，停止给WHO交会费了！在对他的操作一如既往地表示不解的同时，我也在好奇另外一件事：是不是他这么一停，也意味着美国以前欠WHO的会费不用还了呢？他们到底欠了WHO多少钱？  

于是，我决定去WHO的官网查一下。结果是：截止到2020年三月，美国一共欠了WHO 2.1亿多美元！老特一句话，这笔钱就替美国省下了。。。  

感慨的同时，从WHO的数据里，我也发现了些有趣的事情：欠钱的貌似不止美国，好像大家都在欠，甚至按时缴费的国家已经成了少数。  

正好最近疫情期间比较闲，再加上也正在学习arcgis online的一些Developer Tool，于是我想做一个基于arcgis online的可视化，来展示一下各国的欠款情况。

项目的名字就是：who is laolai? (谁是老赖？)

# WHO 数据简介
WHO的收入主要分成两部分：一部分是个人、机构、或者国家的自愿捐助；另一部分是WHO成员国的会费。  

成员国的会费是每两年一交，金额根据国家具体情况而定（经济水平好的就多交一点，差的就少交一点）。如果该国家会费金额超过200,000美元，则需要一半会费用美元交，另一半用瑞士法郎交。在该项目中，为了方便比较，我把所有金额都换算成了美元，汇率用了现在的汇率（1 CHF = 1.03 USD）。  

原始数据可以在[WHF官网](https://www.who.int/about/finances-accountability/funding/AC_Status_Report_2020.pdf?ua=1)以PDF格式获得；我编辑和在项目中使用的arcgis的feature layer可以从这个[web host service 的 url](https://services9.arcgis.com/DYJ7DbkMVmIBPMdR/arcgis/rest/services/country_owing_WHO/FeatureServer/0) 获取。

# 项目技术栈
主要分为数据预处理和数据可是化两部分。  
## 1. 数据预处理  
主要使用了arcgis 的 python SDK，读取WHO官网获取的会费欠款情况，并以properties的形式写入[从arcgis hub获取的世界地图](http://hub.arcgis.com/datasets/2b93b06dc0dc4e809d3c8db5cb96ba69_0)的geojson中，并生成且发布Feature Layer。  

这一部分代码并没有包含在这个库里, 因为我打算把它单独写成一个独立工具包，用来生成这种世界地图类的arcgis feature layer。完成之后，我会在这里放个链接。
## 2. 数据可视化  
主要使用了arcgis 的 JavaScript SDK，以color ramp和可点击查看的tooltips展示欠款数据。
# 项目查看
https://shimengzhao.github.io/who_is_laolai_arcgis/


# 感想
以任何借口和方式达成的赖账行为，都是可耻的！

