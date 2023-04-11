import { Text, View, StyleSheet, Image, SafeAreaView, Button } from 'react-native';
//import { Card } from 'react-native-paper';
import React from 'react';

const Separator = () => {
    return <View style={styles.separator} />;
};

class TelaPrincipal extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/Vitin.png')} />

                <Text style={styles.paragraph}></Text>
                <SafeAreaView>
                    <Text style={styles.paragraph}>One click for your immersion...</Text>

                    <Button
                        onPress={() => this.props.navigation.navigate('Login')} //colocar aqui o endereço
                        title="START"
                        color="#8A2BE2"
                    //accessibilityLabel="Learn more about this purple button"
                    />

                    <Separator />

                    <Button
                        onPress={() => this.props.navigation.navigate('Login')} //colocar aqui o endereço
                        title="HELP"
                        color="#DC143C"
                    //accessibilityLabel="Learn more about this purple button"
                    />
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        padding: 8,
        justifyContent: 'center'
        //justifyContent: 'space-between',
    },

    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    logo: {
        alignSelf: 'center',
        //alignItems
        //justifyItems
        width: 300,
        height: 300,
    },

    separator: {
        marginVertical: 20,
        borderBottomColor: '#000000',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default TelaPrincipal;