import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: '100%',
        height: 65,
        backgroundColor: "#262626",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333333',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4EA8DE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkmark: {
        width: 16,
        height: 16,
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
    },

})