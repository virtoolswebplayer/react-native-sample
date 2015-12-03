/**
 * Created by gaoletian on 15/12/1.
 */
import React , {ScrollView,View,Text,Component,ToolbarAndroid,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-icons';
const newsContent = `【环球网综合报道】据美国有线电视新闻网(CNN)11月30日报道，日本海上保安厅称，最近两个月以来在日本海及日本海沿岸一带先后发现了8艘不明国籍的木制船只，船上载有合计20具左右的尸体。

报道称，船上的尸体都已高度腐烂，一些尸体已经露出白骨，其中两具尸体没有头部，另有一艘船上发现了六具头骨。日本海上保安厅称，第一艘船只于10月份在日本海上被发现，随后在11月下旬又陆续发现了七艘船只。海上保安厅目前正在调查这些船只的国籍，以及在这些船上究竟发生了什么。

CNN报道称，根据推测，这些船只有可能来自朝鲜。

CNN援引NHK报道称，11月20日在日本轮岛市发现的载有10具腐烂尸体的船只上被发现有着疑似“朝鲜人民军”的字样。另外一艘船只上则发现了与朝鲜国旗图案相近的布料碎片。

日本一名海事专家对NHK表示，这些船只与朝鲜逃兵所使用的船只有着“惊人的相似”。他指出，这些木制船只笨重而陈旧，航行缓慢且难以应对海流。这也许解释了船上的人究竟为何命丧海上`;

class Title extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let defaultStyle = {
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF3366'
      },
      text: {
        fontSize: this.props.fontSize || 16,
        color: this.props.color || 'black',
        textAlign:'center'
      }
    };
    return (
      <View style={defaultStyle.container}>
        <Text style={defaultStyle.text}>
          {this.props.children}
        </Text>
      </View>
    )
  }
}


class NewsDetail extends Component {
  /** 构造函数*/
  constructor(props) {
    super(props)
    // 在这里可以做一些其它的初始工作

    this.state = {
      content: ''
    }
  }

  getData() {
    fetch('http://news.qq.com/a/20151201/034177.htm')
      .then((result)=> {
        this.setState({
          content: result
        })
      })
      .done()
  }

  /** 组件即将挂载*/
  componentWillMount() {

  }

  /** 组件已挂载*/
  componentDidMount() {
//    this.getData()
  }

  /** 组件即将接收属性*/
  componentWillReciveProps() {

  }

  /** 渲染处理*/
  render() {
    return (
      <View>
        <View style={{flexDirection:'row',justifyContent:'center',height:30,backgroundColor:'#FF3366',padding:5}}>
          <TouchableOpacity onPress={this.props.actions.pop} >
            <View style={{flex:1}}>
              <Icon
                name='fontawesome|long-arrow-left'
                size={20}
                color='white'
                style={{width:20,height:20,alignSelf:'flex-start'}}
              />
            </View>
          </TouchableOpacity>
          <View style={{flex:5,alignItems:'center'}}>
          </View>
          <View style={{flex:1}}>
            <Icon
              name='fontawesome|share-alt'
              size={20}
              color='white'
              style={{width:20,height:20,alignSelf:'flex-end'}}
            />
          </View>
        </View>
        <ScrollView>
          <Title fontSize={20} color="white"> 新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题 </Title>
          <View style={{padding:10}}>
            <Text style={{color:'black'}}>
              {this.state.content}
              {newsContent}
            </Text>
          </View>
        </ScrollView>
      </View>

    )
  }

  /** 属性类型*/
  static protoType = {}

  /** 默认属性*/
  static defaultProps = {}


}

export default NewsDetail