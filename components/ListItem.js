import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ListItem({ removeListItem, item }) {
	return (
		<View style={styles.listItem}>
			<Pressable
				android_ripple={{ color: "#4e4e4e" }}
				style={({ pressed }) => pressed && styles.itemPressed}
				onPress={removeListItem.bind(this, item.id)}
			>
				<Text style={styles.itemText}>{item.text}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	listItem: {
		backgroundColor: "#3a3a3a",
		marginVertical: 8,
		borderRadius: 4,
		overflow: "hidden",
	},

	itemText: {
		paddingVertical: 12,
		paddingHorizontal: 20,
		color: "#f1f1f1",
		fontSize: 16,
	},

	itemPressed: {
		backgroundColor: "#4e4e4e",
	},
});
