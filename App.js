import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ListEmptyComponent from "./components/ListEmptyComponent";
import ListInput from "./components/ListInput";
import ListItem from "./components/ListItem";

export default function App() {
	const [listItems, setListItems] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);

	const addListItem = (item) => {
		setListItems((prev) => [item, ...prev]);
	};

	const removeListItem = (id) => {
		setTimeout(() => {
			setListItems((prev) => prev.filter((item) => item.id !== id));
		}, 100);
	};

	const toggleModal = (value) => {
		setModalVisible(value);
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.appContainer}>
				<StatusBar style="light" />
				<ListInput addListItem={addListItem} toggleModal={toggleModal} visible={modalVisible} />

				<Button title="Add Item" onPress={toggleModal.bind(this, true)} />

				<FlatList
					contentContainerStyle={{ flexGrow: 1 }}
					data={listItems}
					renderItem={(itemData) => (
						<ListItem item={itemData.item} removeListItem={removeListItem} />
					)}
					ListEmptyComponent={() => <ListEmptyComponent />}
					keyExtractor={(item) => item.id}
					style={{ marginTop: 32 }}
				/>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		justifyContent: "center",
		marginHorizontal: 16,
		marginVertical: 16,
	},
});
