import { StyleSheet } from 'react-native';

export default ({ typography, colors, layout }) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 200,
        height: 50,
        marginTop: layout.gutter,
        borderRadius: layout.gutter,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    buttonText: {
        ...typography.bold,
        color: colors.secondary,
    },
    text: {
        ...typography.regular,
        color: colors.primary,
    },
});