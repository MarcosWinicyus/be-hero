import React from 'react';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import logoImg from '../../assets/logo.png' 
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'
import styles from './styles.js'

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá Apad, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha Atropelada" com o valor de R$ 120,00 ';

    function unavigateBack() {
        navigation.goBack()
    }
    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha Atropelada',
            recipients:['marcoswinicyusbl@gmail.com'],
            body: message,
        })
    }
    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5564992274632&text=${message}`);
    }

    return(
        <View
            style={styles.container}
        >
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={unavigateBack}>
                    <Feather
                        name="arrow-left"
                        size={28}
                        color="#E82041"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>120,00</Text>
            </View>
            
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia!</Text>
                <Text style={styles.heroTitle}>Seja o Herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em Contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity 
                        style={styles.action}
                        onPress={sendWhatsapp}
                    >
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.action}
                        onPress={sendMail}
                    >
                        <Text style={styles.actionText}>E-Mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}