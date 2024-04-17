import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { styles } from "../config/styles";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [nome, setNome] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  // Nome, Email, Senha, Repetir Senha
  // Endereço: Logradouro, CEP, Cidade, Estado
  // O que é LOGRADOURO? É um termo que designa um terreno ou um espaço anexo a uma habitação, usado para serventia da casa, ou ainda qualquer espaço público comum que pode ser usufruído por toda a população e reconhecido pela administração de um município, como largos, praças, ruas, jardins, parques, entre outros.
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>Faça seu Registro</Text>
        <TextInput
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Repita sua senha"
          value={repetirSenha}
          onChangeText={setRepetirSenha}
          secureTextEntry
          style={styles.input}
        />
        <View
          style={{
            paddingVertical: 20,
          }}
        >
          <Text>Dados pessoais</Text>
          <TextInput
            placeholder="Digite seu CEP"
            value={cep}
            onChangeText={setCep}
          />
          <TextInput
            placeholder="Logradouro"
            value={logradouro}
            onChangeText={setLogradouro}
          />
          <TextInput
            placeholder="Cidade"
            value={cidade}
            onChangeText={setCidade}
          />
        </View>
        <Button onPress={() => navigation.navigate("LoginScreen")}>
          Voltar ao login
        </Button>
      </View>
    </View>
  );
}

















/* import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

 export default function RegisterScreen({ navigation }) {
    const [emailCad, email] = useState("");
    const [senhaCad, senha] = useState("");
    const [telefoneCad, telefone] = useState("");
    const [idadeCad, idade] = useState("");
    <View>
        <Text>Faça seu Registro</Text>

        <TextInput
        placeholder="Digite seu email"
        onChangeText={emailCad}
        value={email}   
        />

        <TextInput
        placeholder="Digite seu número de telefone"
        onChangeText={telefoneCad}
        value={telefone}   
        />

        <TextInput
        placeholder="Digite sua idade"
        onChangeText={idadeCad}
        value={idade}   
        />

        <TextInput
        placeholder="Digite sua senha"
        onChangeText={senhaCad}
        value={senha}
        secureTextEntry // faz com que o campo seja senha com *
        />

        <Button onPress={() => navigation.navigate("HomeScreen")}>
        Volte para o home
      </Button>
    </View>
 }

 */