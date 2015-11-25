<Accordion
  sections={Object.keys(ANIMATION_TYPES)}
  align="center"
  easing="easeInOut"
  renderHeader={section => (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{section}</Text>
              </View>
            )}
  renderContent={section => ANIMATION_TYPES[section].map((type, i) => (
              <TouchableWithoutFeedback key={i} onPress={() => this._animatables[type][type](duration)}>
                <View ref={component => this._animatables[type] = component} style={[{ backgroundColor: COLORS[i % COLORS.length] }, styles.animatable]}>
                  <Text style={styles.animatableName}>{type}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
/>