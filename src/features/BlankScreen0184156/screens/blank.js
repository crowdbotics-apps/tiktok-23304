import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_3: "",
    CheckBox_25: true,
    DateTimePicker_30: new Date(""),
    Switch_62: true
  }

  render = () => (
    <View style={styles.View_1}>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <View />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_25}
        onPress={nextChecked => this.setState({ CheckBox_25: nextChecked })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_30}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_30: selectedDate })
        }
      />
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_62}
        value={this.state.Switch_62}
        onValueChange={nextChecked => this.setState({ Switch_62: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: { alignSelf: "center" },
  TextInput_3: {},
  View_7: {},
  Button_5: {},
  CheckBox_25: {},
  DateTimePicker_30: {},
  Slider_33: {},
  Switch_62: { alignSelf: "flex-start" }
})
