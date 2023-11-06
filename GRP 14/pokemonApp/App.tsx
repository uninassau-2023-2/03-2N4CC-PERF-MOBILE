import React, { useState, useEffect } from "react";
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
  } | null>({ bairro: "", logradouro: "", localidade: "", uf: "" });

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

  useEffect(() => {
    const fetchData = async () => {
      if (activate && !dataCep) {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );
        setDataCep(response.data);
      }

      if (parseInt(cep) === 7) {
        const randomPokemonId = getRandomPokemonId();
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
        );
        setPokemonData(response.data);
      }
    };

    fetchData();
  }, [activate, dataCep, cep]);

  const handleButtonPress = () => {
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
          <Image source={{ uri: pokemonData.sprites.front_default }} />
          <Text>{pokemonData.name}</Text>
          <Text>Abilities: {pokemonData.abilities?.join(", ") || "N/A"}</Text>
          <Text>Height: {pokemonData.height || "N/A"}</Text>
          <Text>Weight: {pokemonData.weight || "N/A"}</Text>
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
});
