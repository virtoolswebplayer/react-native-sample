<ScrollView style={{width:width,height:height}} horizontal={true}
            pagingEnabled={true}
            scrollEventThrottle={16}
            onScroll={this.onScroll}
            showsHorizontalScrollIndicator={false}>

  <ScrollView style={{width:width,height:height,backgroundColor:'#efefef'}}>
    {this.renderNews()}
  </ScrollView>
  <ScrollView style={{width:width,height:height,backgroundColor:'#efefef'}}>
    {this.renderNews()}
  </ScrollView>
  <ScrollView style={{width:width,height:height,backgroundColor:'#efefef'}}>
    {this.renderNews()}
  </ScrollView>

</ScrollView>