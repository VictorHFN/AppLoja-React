import React, { useState, useEffect, useRef } from 'react';
import {
    View, Text, StyleSheet, Button,
    TouchableOpacity, Keyboard, FlatList, ActivityIndicator

} from 'react-native';

import { TextInput } from 'react-native-paper';
import firebase from '../../services/connectionFirebase';

/*

const Separator = () => {
    return <View style={styles.separator} />;
}

<Separator /> após cada TextInput

*/

export default function GerenciarPerfil() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cpf, setCpf] = useState('');
    const [genero, setGenero] = useState('');
    const [key, setKey] = useState('');

    //implementação dos métodos update ou insert 

    async function insertUpdate() {

        //editar dados 

        if (nome != '' &
            telefone != '' &
            endereco != '' &
            cpf != '' &
            genero != '' &
            key !== '') {

            firebase.database().ref('perfil').child(key).update({

                nome: nome,
                telefone: telefone,
                endereco: endereco,
                cpf: cpf,
                genero: genero

            })

            Keyboard.dismiss(); //para o teclado do celular

            alert('Produto Editado!');
            clearFields();
            setKey('');
            return;

        }

        //cadastrar dados 

        let perfil = await firebase.database().ref('perfil');

        let chave = perfil.push().key; //comando para salvar é o push 



        perfil.child(chave).set({

            nome: nome,
            telefone: telefone,
            endereco: endereco,
            cpf: cpf,
            genero: genero

        });

        Keyboard.dismiss();

        alert('Produto Cadastrado!');

        clearFields();

    }

    //Método para limpar os campos com valores
    function clearFields() {
        setNome('');
        setTelefone('');
        setEndereco('');
        setCpf('');
        setGenero('');
    }

    return (

        <View style={styles.container}>

            <TextInput

                placeholder='Nome'
                left={<TextInput.Icon icon="account" />}
                maxLength={40}
                style={styles.input}
                onChangeText={(texto) => setEtnia(texto)}
                value={nome}

            />

            <TextInput

                placeholder='Telefone'
                left={<TextInput.Icon icon="account-edit" />}
                maxLength={40}
                style={styles.input}
                onChangeText={(texto) => setNome(texto)}
                value={nome}

            />

            <TextInput

                placeholder='Endereco'
                left={<TextInput.Icon icon="calendar-range" />}
                maxLength={40}
                style={styles.input}
                onChangeText={(texto) => setDataNasc(texto)}
                value={dataNasc}

            />

            <TextInput

                placeholder='CPF'
                left={<TextInput.Icon icon="phone" />}
                maxLength={40}
                style={styles.input}
                onChangeText={(texto) => setTelefone(texto)}
                value={telefone}

            />

            <TextInput

                placeholder='Genero'
                left={<TextInput.Icon icon="home-edit" />}
                maxLength={40}
                style={styles.input}
                onChangeText={(texto) => setEndereco(texto)}
                value={endereco}

            />

            <View style={styles.button}>

                <Button
                    onPress={insertUpdate}
                    title="Salvar"
                    color="#DC143C"
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
        borderColor: '#A9A9A9',
        backgroundColor: '#FFFFFF',
        height: 40,
        fontSize: 13,
        borderRadius: 8,
        marginBottom: 10

    },

    separator: {

        marginVertical: 5,

    },

    button: {

        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#DC143C',
        borderWidth: 0.5,
        borderColor: '#DC143C',
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