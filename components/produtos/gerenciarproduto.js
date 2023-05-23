import React, { useState, useEffect, useRef } from 'react';
import {

    View, Text, StyleSheet, Button,
    TouchableOpacity, Keyboard, FlatList, ActivityIndicator
} from 'react-native';

import { TextInput } from 'react-native-paper';

export default function gerenciamentoprodutos() {

    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [preco, setPreco] = useState('');
    const [cor, setCor] = useState('');
    const [key, setKey] = useState('');

    return (

        <View style={styles.container}>

            <TextInput
                placeholder='Produto'
                left={<TextInput.Icon icon="car" />}
                maxLength={40}
                style={styles.input}
                onChangeText={(text) => setNome(text)}
                value={name}
            />

            <TextInput
                placeholder='Marca'
                left={<TextInput.Icon icon="sale" />}
                style={styles.input}
                onChangeText={(text) => setMarca(text)}
                value={marca}
            />

            <TextInput
                placeholder='Preço'
                left={<TextInput.Icon icon="sack" />}
                style={styles.input}
                onChangeText={(text) => setPreco(text)}
                value={preco}
            />

            <TextInput
                placeholder='Cor'
                left={<TextInput.Icon icon="color" />}
                style={styles.input}
                onChangeText={(text) => setCor(text)}
                value={cor}
            />
            <View style={styles.button}>
                <Button
                    onPress={''}
                    title="Adicionar"
                    color="#1E90FF"
                    accessibilityLabel=""
                />
            </View>
        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 10,
    },

    input: {
        borderWidth: 1,
        borderColor: '#121212',
        height: 40,
        fontSize: 13,
        borderRadius: 8,
        marginBottom: 20
    },

    separator: {
        marginVertical: 5,
    },

    button: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },

    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },

    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 100,
        fontSize: 20
    },

    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 20,
    },

    listar: {
        fontSize: 20,
        textAlign: 'center'
    }
}); 