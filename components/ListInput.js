import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export default function ListInput({ addListItem, visible = true, toggleModal }) {
	const [inputText, setInputText] = useState("");

	const handleTextChange = (text) => {
		setInputText(text);
	};

	const handleSubmit = () => {
		addListItem({ id: Math.random().toString(), text: inputText });
		setInputText("");
		toggleModal(false);
	};

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.listContainer}>
				<TextInput
					placeholder="Enter Text"
					placeholderTextColor="#c1c1c1"
					style={styles.textInput}
					onChangeText={handleTextChange}
					value={inputText}
				/>

				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<Button title="add item" onPress={handleSubmit} />
					</View>
					<View style={styles.buttonContainer}>
						<Button title="cancel" onPress={toggleModal.bind(this, false)} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#1f1f1f",
	},

	textInput: {
		borderColor: "#c1c1c1",
		borderWidth: 1,
		paddingHorizontal: 8,
		paddingVertical: 4,
		width: "70%",
		borderRadius: 4,
		color: "#f1f1f1",
	},

	buttonsContainer: {
		flexDirection: "row",
		marginTop: 16,
	},

	buttonContainer: {
		marginHorizontal: 16,
	},
});
