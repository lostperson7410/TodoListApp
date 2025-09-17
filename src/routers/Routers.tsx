// this is the main router file for the app

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_PATH } from '../constant/routePath';
import Home from '../screens/Home';
import AddTodo from '../screens/AddTodo';

const Stack = createNativeStackNavigator();


const allRoutes = [
    {
        name: ROUTE_PATH.HOME,
        component: Home,
    },
    {
        name: ROUTE_PATH.ADD_TODO,
        component: AddTodo,
    },
]

const Routers = () => {
  return (
    <Stack.Navigator>
        {allRoutes.map((route) => ( 
            <Stack.Screen key={route.name} name={route.name} component={route.component} />
        ))}
    </Stack.Navigator>
  );
}

export default Routers;