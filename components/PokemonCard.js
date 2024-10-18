import { View, Text, StyleSheet, Platform, Image } from "react-native";

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
        case "electric" :
            return { borderColor: '#FFD700', emoji: "⚡"};
        case "water":
            return { borderColor: '#6493EA', emoji: "💧" };
        case "fire": 
            return { borderColor: "#FF5733", emoji: '🔥' };
        case "grass":
            return { borderColor: "#66CC66", emoji: "🌿" };
        default:
            return { borderColor: "#A0A0A0", emoji:"❓" };
    }
}

export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weakness
}){

    const { borderColor, emoji } = getTypeDetails(type);

    return(
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤️{hp}</Text>
            </View>
            <Image source={image} style={styles.image} accessibilityLabbel={`${name} pokemon`} resizeMode="contain" />
            <View style={styles.typeContainer}>
                <View style={[styles.badge, {borderColor}]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View> 
            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Moves: {moves.join(",")}</Text>
            </View>
            <View style={styles.weaknessContainer}>
                <Text style={styles.weaknessText}>Weakness: {weakness.join(",")}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 5,
        ...Platform.select({
            ios: {
                shadowOffset: {width: 2, height: 2},
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 5
            }
        })
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom: 28
    },
    name: {
        fontSize: 30,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 22
    },
    image: {
        width: '100%',
        height:200,
        marginBottom:16,
    },
    typeContainer: {
        alignItems:"center",
        marginBottom: 25,
        paddingBottom: 2
    },
    badge: {
        flexDirection: "row",
        alignItems:'center',
        paddingHorizontal: 14,
        paddingHorizontal:6,
        borderRadius: 20,
        borderWidth: 4
    },
    typeEmoji: {
        fontSize:30,
        marginRight: 10,
        marginBottom:7
    },
    typeText: {
        fontSize: 22,
        fontWeight: "bold",
        marginRight: 5
    },
    movesContainer: {
        marginBottom: 16
    },
    movesText: {
        fontSize: 22,
        fontWeight: "bold"
    },
    weaknessContainer:{
        marginBottom:8,
    },
    weaknessText: {
        fontSize: 22,
        fontWeight: "bold"
    }
})