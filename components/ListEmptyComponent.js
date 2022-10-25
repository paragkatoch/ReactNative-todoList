import { StyleSheet, Text, View } from "react-native";

export default function ListEmptyComponent() {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 16, color: "#f1f1f1" }}>Nothing here</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
