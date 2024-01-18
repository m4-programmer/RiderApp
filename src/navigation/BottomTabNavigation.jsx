import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/BottomTabs/HomeScreen";
import HistoryScreen from "../screens/BottomTabs/HistoryScreen";
import ChatScreen from "../screens/BottomTabs/ChatScreen";
import ProfileScreen from "../screens/BottomTabs/ProfileScreen";
import WalletScreen from "../screens/BottomTabs/WalletScreen";
import { BookOpenIcon, ChatBubbleBottomCenterIcon, HomeIcon,  WalletIcon } from "react-native-heroicons/solid";
import { UsersIcon} from "react-native-heroicons/outline";
import { COLORS } from "../../constants/theme";
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home" 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: COLORS.primary,
            tabBarLabelStyle: {
                fontSize: 12, // Set the font size as needed
                fontWeight: '600', // Set the font weight as needed
              },
              tabBarShowLabel: true,
              tabBarStyle: {
                backgroundColor: COLORS.inputColor,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0, 
                height: 90, 
                borderTopWidth: 0, 
                elevation: 5, 
                shadowColor: 'transparent',
                color: COLORS.mildLight,
                fontSize: 20,
                fontWeight: 'bold',
                paddingVertical: 10
            },
              }} 
        >
            <Tab.Screen name="Home" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({focused}) => <HomeIcon  color={ focused ? COLORS.primary : COLORS.mildLight} />,
            }}
             />
            <Tab.Screen name="History" component={HistoryScreen} 
            options={{
                tabBarIcon: ({focused}) => <BookOpenIcon focused={focused} color={ focused ? COLORS.primary : COLORS.mildLight} />, 
            }}
            />
            <Tab.Screen name="Chat" component={ChatScreen}
            options={{
                tabBarIcon: ({focused}) => <ChatBubbleBottomCenterIcon focused={focused} color={ focused ? COLORS.primary : COLORS.mildLight} />,
                headerShown: false,
            }}
             />
            <Tab.Screen name="Wallet" component={WalletScreen}
            options={{
                tabBarIcon: ({focused}) => <WalletIcon focused={focused} color={ focused ? COLORS.primary : COLORS.mildLight} />,
            }}
             />
            <Tab.Screen name="Profile" component={ProfileScreen}
            options={{
                tabBarIcon: ({focused}) => <UsersIcon focused={focused} color={ focused ? COLORS.primary : COLORS.mildLight} />,
                headerShown: false,
            }}
             />
        </Tab.Navigator>
    );
}

export default BottomTabNavigation