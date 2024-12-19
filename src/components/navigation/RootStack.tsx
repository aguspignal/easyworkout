import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../types/navigation/RootStack"
import CreateRoutine from "../../screens/CreateRoutine"
import CreateRoutineDay from "../../screens/CreateRoutineDay"
import ExercisesRepository from "../../screens/ExercisesRepository"
import Home from "../../screens/Home"
import NewWorkout from "../../screens/NewWorkout"
import Routine from "../../screens/Routine"
import RoutineHistory from "../../screens/RoutineHistory"
import Settings from "../../screens/Settings"
import WorkoutLog from "../../screens/WorkoutLog"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootStack() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Settings" component={Settings} />
			<Stack.Screen name="CreateRoutine" component={CreateRoutine} />
			<Stack.Screen name="Routine" component={Routine} />
			<Stack.Screen name="RoutineHistory" component={RoutineHistory} />
			<Stack.Screen name="CreateRoutineDay" component={CreateRoutineDay} />
			<Stack.Screen name="ExercisesRepository" component={ExercisesRepository} />
			<Stack.Screen name="NewWorkout" component={NewWorkout} />
			<Stack.Screen name="WorkoutLog" component={WorkoutLog} />
		</Stack.Navigator>
	)
}
