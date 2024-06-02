import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Zoom from "react-native-vector-icons/MaterialCommunityIcons";
import Star from "react-native-vector-icons/Entypo";
const logo = require("./assets/Image.png"),
  banner = require("./assets/Image (1).png"),
  certificate = require("./assets/image 676.png"),
  vector = require("./assets/Vector.png");
const ins = require("./assets/instagram.png"),
  fb = require("./assets/facebook.png"),
  li = require("./assets/linkedin.webp"),
  tw = require("./assets/twitter.png");
const bk = require("./assets/bookmark.png");
export default function App() {
  return (
    <View style={styles.app}>
      <ScrollView>
        <View style={styles.header}>
          <ImageBackground
            source={logo}
            resizeMode="cover"
            style={styles.logo}
          ></ImageBackground>
        </View>
        <View style={styles.titlecontainer}>
          <View style={styles.titlebox}>
            <Text style={styles.title}>Professional Online</Text>
            <Text style={styles.title}>Makeup Course</Text>
          </View>
          <View style={styles.cr}>
            <Text style={styles.certify}>
              <Image source={bk} /> Certification Programme
            </Text>
            <Text style={styles.rating}>⭐ Rated 4.85/5</Text>
          </View>
          <View style={styles.points}>
            <Text style={styles.point}>
              ✔ India's No.1 Online Makeup Course
            </Text>
            <Text style={styles.point}>
              ✔ Learn by LIVE Do-it-Together Classes
            </Text>
            <Text style={styles.point}>
              ✔ Unlimited Practice Session to master skills
            </Text>
          </View>
          <View style={styles.formcontainer}>
            <Text style={styles.formtitle}>FILL THE FORM BELOW TO ENQUIRE</Text>
            <View style={styles.form}>
              <Text style={styles.inputtitle}>*Enter your name</Text>
              <TextInput
                style={styles.inputfield}
                placeholder="Eg. Aneesha Mehra"
              ></TextInput>

              <Text style={styles.inputtitle}>*Enter your WhatsApp Number</Text>
              <View style={styles.contactform}>
                <TextInput style={styles.code} value="+91"></TextInput>
                <TextInput
                  style={styles.inputfield}
                  placeholder="Eg. 0000000000"
                ></TextInput>
              </View>
              <Text style={styles.inputtitle}>*Select your profession</Text>
              <TextInput
                style={styles.inputfield}
                placeholder="Choose the most relevant option"
              ></TextInput>
              <Text style={styles.inputtitle}>*Select your goal</Text>
              <TextInput
                style={styles.inputfield}
                placeholder="Choose the most relevant option"
              ></TextInput>
              <Text style={styles.inputtitle}>*Select your city</Text>
              <TextInput
                style={styles.inputfield}
                placeholder="Choose the most relevant option"
              ></TextInput>
              <Text style={styles.button}>Submit</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={banner}
          resizeMode="cover"
          style={styles.bannerlogo}
        >
          <View style={styles.banner}>
              <View style={styles.btitlebox}>
                <Image source={vector}></Image>
                <Text style={styles.bannertitle}>
                  Why Should You Join Airblack?
                </Text>
                <Image
                  source={vector}
                  style={{ transform: [{ scaleX: -1 }] }}
                ></Image>
              </View>
              <View style={styles.reasons}>
                <View style={styles.reason}>
                  <Zoom name="video-wireless" style={styles.ricon}></Zoom>
                  <Text style={styles.rt}>Do-it-together,live on zoom</Text>
                </View>
                <View style={styles.reason}>
                  <Star name="star" style={styles.ricon}></Star>
                  <Text style={styles.rt}>4.8/5 Rated Classes</Text>
                </View>
                <View style={styles.reason}>
                  <Icon name="people" style={styles.ricon}></Icon>
                  <Text style={styles.rt}>35000+ Members</Text>
                </View>
              </View>
              <Text style={styles.rbutton}>Apply Now</Text>
          </View>
        </ImageBackground>
        <View style={styles.certified}>
          <View style={styles.ctitlebox}>
            <Image source={vector}></Image>
            <Text style={styles.ctitle}>
              Get Certified From India's Biggest Beauty Platform
            </Text>
            <Image
              source={vector}
              style={{ transform: [{ scaleX: -1 }] }}
            ></Image>
          </View>
          <Image source={certificate} style={styles.certificate}></Image>
        </View>
        <ImageBackground
          source={banner}
          style={styles.communitybanner}
          resizeMode="stretch"
        >
          <View style={styles.community}>
            <Text style={styles.communitytitle}>
              Join our growing community of 35000+ alumni
            </Text>
            <Text style={styles.communitybutton}>Apply Now</Text>
            <View style={styles.socialmedia}>
              <Image source={ins} style={styles.icon}></Image>
              <Image source={fb} style={styles.icon}></Image>
              <Image source={li} style={styles.icon}></Image>
              <Image source={tw} style={styles.icon}></Image>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#0F1014",
  },
  header: {
    height: 120,
  },
  logo: {
    flex: 1,
  },
  code: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 5,
  },
  headertitle: {
    color: "white",
    fontSize: 20,
    letterSpacing: 5,
  },
  titlecontainer: {
    padding: 30,
    marginBottom: 30,
  },
  titlebox: {
    marginBottom: 10,
  },
  title: {
    color: "white",
    fontSize: 25,
  },
  ricon: {
    backgroundColor: "#E84D84",
    borderRadius: 50,
    padding: 5,
    fontSize: 30,
    color: "white",
  },
  cr: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  certify: {
    color: "white",
    backgroundColor: "#313135",
    padding: 8,
    marginRight: 20,
    borderRadius: 8,
  },
  rating: {
    color: "#F7C852",
  },
  points: {
    marginBottom: 20,
  },
  point: {
    color: "grey",
    marginBottom: 5,
  },
  formcontainer: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingBottom: 10,
  },
  formtitle: {
    backgroundColor: "#E84D84",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    color: "white",
    padding: 5,
    textAlign: "center",
  },
  form: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputtitle: {
    marginTop: 5,
    marginBottom: 5,
  },
  inputfield: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flex: 1,
  },

  contactform: {
    flexDirection: "row",
  },
  button: {
    color: "white",
    backgroundColor: "#E84D84",
    padding: 10,
    textAlign: "center",
    width: "100%",
    borderRadius: 5,
  },
  rbutton: {
    color: "white",
    backgroundColor: "#E84D84",
    padding: 10,
    textAlign: "center",
    width: "100%",
    borderRadius: 5,
  },
  banner: {
    justifyContent:'space-between',
    height:'100%',
    width:'100%',
    padding:20
  },
  bannerlogo: {
    marginBottom: 30,
    height: 300,
    justifyContent:'center',
    alignItems:'center'
  },
  btitlebox: {
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center'
  },
  bannertitle: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  reasons: {
    flexDirection: "row",
    justifyContent: "space-between",
  
  },
  reason: {
    color: "white",
    alignItems: "center",
    width: "30%",
  },
  rt: {
    color: "white",
    textAlign: "center",
  },
  ctitle: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    width: 250,
    marginBottom: 20,
  },
  certified: {
    alignItems: "center",
    marginBottom: 40,
  },
  ctitlebox: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  communitybanner: {
    height: 400,
    justifyContent: "center",
  },
  community: {
    padding: 40,
    height: "90%",
    justifyContent: "space-between",
  },
  communitytitle: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
  },
  communitybutton: {
    color: "white",
    backgroundColor: "#E84D84",
    padding: 10,
    textAlign: "center",
    width: "100%",
    borderRadius: 5,
    marginBottom: 10,
  },
  socialmedia: {
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
});
