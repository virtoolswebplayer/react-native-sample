'use strict';

var React = require('react-native');
var {
      AppRegistry,
      Image,
      ListView,
      TouchableHighlight,
      StyleSheet,
      Text,
      View,
      PixelRatio,
      } = React;

var GridLayoutExample = React.createClass({

  getInitialState: function () {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },

  _pressData: ({}
:
{
  [key
:
  number
]:
  boolean
}
),

componentWillMount: function () {
  this._pressData = {};
}
,

render: function () {
  return (
    // ListView wraps ScrollView and so takes on its properties.
    // With that in mind you can use the ScrollView's contentContainerStyle prop to style the items.
    <ListView contentContainerStyle={styles.list}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
    />
  );
}
,

_renderRow: function (rowData:string, sectionID:number, rowID:number) {
  var rowHash   = Math.abs(hashCode(rowData));
  var imgSource = {
    uri: THUMB_URLS[rowHash % THUMB_URLS.length],
  };
  return (
    <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor='rgba(0,0,0,0)'>
      <View>
        <View style={styles.row}>
          <Image style={styles.thumb} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png"}}/>
          <Text style={styles.text}>
            {rowData}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
,

_genRows: function (pressData:{[key: number]: boolean}):Array<string> {
  var dataBlob = [];
  for (var ii = 0; ii < 100; ii++) {
    var pressedText = pressData[ii] ? ' (X)' : '';
    dataBlob.push('Cell ' + ii + pressedText);
  }
  return dataBlob;
}
,

_pressRow: function (rowID:number) {
  this._pressData[rowID] = !this._pressData[rowID];
  this.setState({
    dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )
  });
}
,
})
;

var THUMB_URLS = [
  'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png',
  'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png',
  'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png',
  'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png',
  'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png',
  'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png',
  'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png',
  'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png',
  'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png',
  'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png',
  'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png',
  'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];

/* eslint no-bitwise: 0 */
var hashCode = function (str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

var styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    width: 200 ,
    height: 200 ,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#f6f6f6'
  },
  thumb: {
    width: 64,
    height: 64
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  }
});

module.exports = GridLayoutExample;