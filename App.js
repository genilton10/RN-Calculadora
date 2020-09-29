
import React, {useState} from 'react';
import styled from 'styled-components/native';

const Pagina = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 25px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;

const Cabecalho = styled.Text`
  margin-top: 10px;
  font-size: 30px;
`;
const CalcImcBnt = styled.Button`
  
`;
const CalcularView = styled.View`
  padding-top: 30px;
  margin-top: 10px;
`;

const Resultado = styled.Text`
  color: white;
  font-size: 18px;
`;

const AreaResult = styled.View`
  margin-top: 30px;
  background-color: ${(props) => props.cor};
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius:10px;
`;
const App = () => {
  const [altura, alteraAltura] = useState('');
  const [peso, alteraPeso] = useState('');
  const [imc, alteraIMC] = useState(0);
  const [categoria, alteraCategoria] = useState('Normal');
  const [cor, alteraCor] = useState('#4caf50');

  const calcular = () => {
    const indice = (
      parceFloat(peso.replace(',', '.')) /
      (parceFloat(altura.replace(',', '.')) *
        parceFloat(altura.replace(',', '.')))
    ).toFixed(2);
    alteraImc(indice);
    if(indice < 18.5) {
      alteraCategoria('Magreza');
      alteraCor('#2196f3');
    } else if (indice <= 24.9) {
      alteraCategoria('Normal');
      alteraCor('#4caf50');
    } else if (indice <= 29.9) {
      alteraCategoria('Sobrepeso');
      alteraCor('#2196f3');
    } else if (indice <= 39.9) {
      alteraCategoria('Obesidade');
      alteraCor('#ff9800');
    } else if (indice > 40) {
      alteraCategoria('Obesidade Grave');
      alteraCor('#f44336');
    }
  };

  return (
    <Pagina>
      <Cabecalho>IMC Fácil</Cabecalho>

      <Input placeholder="Peso"
      kyboardType="numeric"
      value={peso}
      onChangeType={(n) => alteraPeso(n)}
      />

      <Input placeholder="Altura"
      kyboardType="numeric"
      value={altura}
      onChangeType={(n) => alteraPeso(n)}
      />

      <CalcularView>
        <CalcImcBnt title="Calcular" onPress={calcular}/>
      </CalcularView>
      {imc > 0 && altura !== 0 && (
        <AreaResult cor= {cor} >
          <Resultado> {imc} </Resultado>
          <Resultado> {categoria} </Resultado>
        </AreaResult>
      )}
    </Pagina>
  );
};
export default App;