import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native"

const data = [
	{
		id: 1,
		name: "maroof",
		age: 21,
		about: "lorem ipsum hjfdbkgkjdbfgjkdbgjkbdkjbgjkbkjdbkjgbkjdbgd",
	},
]

export default function App() {
	const [persons, setPersons] = useState(data)
	const [person, setPerson] = useState(null)

	const addPerson = () => {
		let id = new Date()

		if (!person) {
			Alert.alert("please enter something")
			return
		}
		const newPersons = [...persons, { ...person, id }]
		setPersons(newPersons)
	}

	return (
		<View style={styles.container}>
			<View>
				<TextInput
					keyboardType="default"
					style={styles.textInput}
					placeholder="name"
					onChangeText={(name) => setPerson({ ...person, name })}
				/>
				<TextInput
					keyboardType="numeric"
					style={styles.textInput}
					placeholder="age"
					onChangeText={(age) => setPerson({ ...person, age })}
				/>
				<TextInput
					keyboardType="default"
					style={styles.textInput}
					placeholder="tell us something about yourself"
					onChangeText={(about) => setPerson({ ...person, about })}
				/>
				<View style={styles.btn}>
					<Button
						color="#cf1fa9"
						title="add person"
						onPress={() => addPerson()}
					/>
				</View>
			</View>
			<View style={styles.textContainer}>
				{persons.map((p) => {
					const { name, id, age, about } = p
					return (
						<View key={id} style={styles.text}>
							<Text>{name}</Text>
							<Text>{age}</Text>
							<Text>{about}</Text>
							<Button title="remove" />
						</View>
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
		// justifyContent: "center",
		paddingTop: 50,
	},
	textInput: {
		backgroundColor: "#ffa500",
		padding: 5,
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
