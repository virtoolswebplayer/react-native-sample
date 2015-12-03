## 框架结构



## 目录结构说明
```
.
├── README.MD
├── android             <--- android工程目录
├── app                 <--- app 主要工作区
│   ├── baseComponents      <--- 通用组件  Button组件,NaviBar组件,Article组件...
│   ├── components          <--- 组件     我和微金所组件,产品新闻组件,培训组件,展业组件...
│   ├── containers          <--- 路由配置,聚合组件
│   ├── libs                <--- 这里放一些公用的lib
│   ├── reducers            <--- app
│   └── styles              <--- 样式
├── assets              <--- 静态资源 RN里可以通过 require('../../assets/yourResName.name')
│   ├── loginBg.jpg
│   ├── logo.png
│   ├── showNewsImage.jpg
│   ├── tab1.png
│   ├── tab2.png
│   ├── tab3.png
│   └── tab4.png
├── index.android.js    <--- android主入口
├── index.ios.js        <--- ios主入口
├── ios                 <--- ios工程目录
├── package.json
└── test

```

## 如何编写一个组件

```js
import React from 'react-native';
const  {ScrollView,View,Text,Component,ToolbarAndroid,TouchableOpacity} = React;

import { Icon } from 'react-native-icons';


class MyComponent extends Component {
  /** 构造函数*/
  constructor(props) {
    super(props)
    // 在这里可以做一些其它的初始工作

    // 等同于 getInitStae() 可以初始化 `state`
    this.state = {
      content: ''
    }
  }

  /** 组件即将挂载时调用*/
  componentWillMount() {

  }

  /** 组件成功挂载时调用*/
  componentDidMount() {
//    this.getData()
  }

  /** 组件即将接收属性时*/
  componentWillReciveProps() {

  }

  /** 渲染处理*/
  render() {
    return (
      <View>
        <Text>MyComponent</Text>
      </View>

    )
  }

  /** 属性类型*/
  static protoType = {}

  /** 默认属性*/
  static defaultProps = {}


}

export default MyComponent
```
