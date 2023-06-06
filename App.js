import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native"

const data = [
	{ id: 1, name: "ritik" },
	{ id: 2, name: "maroof" },
]

export default function App() {
	const [persons, setPersons] = useState(data)
	const [person, setPerson] = useState(null)

	const addPerson = () => {
		let id = new Date()
		if (person == 0) {
			Alert.alert("please enter something")
			return
		}
		const newPersons = [...persons, { id, name: person }]
		setPersons(newPersons)
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				placeholder="type something here..."
				onChangeText={(newText) => setPerson(newText)}
			/>
			<View style={styles.btn}>
				<Button
					color="#cf1fa9"
					title="add person"
					onPress={() => addPerson()}
				/>
			</View>
			<View style={styles.textContainer}>
				{persons.map((p) => {
					const { name, id } = p
					return (
						<Text style={styles.text} key={id}>
							{name}
						</Text>
					)
				})}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#c3cdde",
		alignItems: "center",
		justifyContent: "center",
	},
	textInput: {
		backgroundColor: "#ffa500",
		padding: 10,
		borderWidth: 5,
		borderRadius: 10,
		borderColor: "#ffa500",
		margin: 0,
		alignItems: "center",
		marginBottom: 4,
	},
	btn: {
		borderWidth: 5,
		borderRadius: 10,
		borderColor: "#cf1fa9",
	},
	textContainer: {
		marginTop: 4,
	},
	text: {
		backgroundColor: "#fff",
		margin: 2,
		borderWidth: 5,
		borderRadius: 10,
		borderColor: "#fff",
		textAlign: "center",
	},
})
