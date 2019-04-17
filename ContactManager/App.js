import {createStackNavigator,createAppContainer} from "react-navigation";
import AddContactScreen from "./screens/AddContactScreen";
import EditContactScreen from "./screens/EditContactScreen";
import ViewContactScreen from "./screens/ViewContactScreen";
import HomeScreen from "./screens/HomeScreen";

const mainNavigator = createStackNavigator({
  Home:{screen:HomeScreen},

  Add:{screen:AddContactScreen},

  Edit:{screen:EditContactScreen},
  View:{screen:ViewContactScreen},
},{
  defaultNavigationOptions:{
    headerTitle:"ContactManager",
    headerTitleStyle:{
      color:"#FFF"

    },
    headerStyle:{
      backgroundColor:"#53E0BC",
    

    },
    headerTintColor:"#FFF"
  }
})

const App = createAppContainer(mainNavigator);
export default App;
