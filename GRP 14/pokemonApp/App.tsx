import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";
import axios from "axios";

export default function App() {
  const [cep, setCep] = useState("");
  const [activate, setActivate] = useState(false);
  const [dataCep, setDataCep] = useState<{
    bairro: string;
    logradouro: string;
    localidade: string;
    uf: string;
  } | null>();

  const [pokemonData, setPokemonData] = useState<{
    name: string | null;
    abilities: string[] | null;
    height: number | null;
    weight: number | null;
    sprites: { front_default: string };
  } | null>(null);

  const getRandomPokemonId = () => {
    return Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
  };

  const fetchData = async () => {
    try {
      if (activate && !dataCep) {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );
        setDataCep(response.data);
      }
  
      if (parseInt(cep) > 6) {
        const randomPokemonId = getRandomPokemonId();
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
        );
        setPokemonData(response.data);
      }
    } catch (error) {
      console.error("Erro na solicitação à API:", error);
    }
  };
  

  const handleButtonPress = () => {
    fetchData()
    if (!activate) {
      setActivate(true);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden />
      <Text>Insira Seu Cep</Text>
      <TextInput
        style={styles.cepInput}
        placeholder="CEP"
        value={cep}
        onChangeText={(text) => setCep(text)}
      />
      <Button title="Buscar por Pokemon" onPress={handleButtonPress} />
      {activate && dataCep && (
        <View>
          <Text>
            {dataCep.logradouro}, {dataCep.bairro} {dataCep.localidade} -{" "}
            {dataCep.uf}
          </Text>
        </View>
      )}
      {activate && pokemonData && (
        <View>
          <Image
            source={{ uri: pokemonData.sprites.front_default }}
            style={styles.pokemonImage}
          />
          <Text>{pokemonData.name}</Text>
          <Text>
            Number of Abilities:{" "}
            {pokemonData.abilities ? pokemonData.abilities.length : 0}
          </Text>
          <Text>
            Height:{" "}
            {pokemonData.height ? `${pokemonData.height / 10} m` : "N/A"}
          </Text>
          <Text>
            Weight:{" "}
            {pokemonData.weight ? `${pokemonData.weight / 10} kg` : "N/A"}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  cepInput: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingHorizontal: 30,
  },

  pokemonImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
