
import React, { useState } from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';


const Pagina = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const Peso = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 10px;
  padding: 10px;
`;
const Altura = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;

const Cabecalho = styled.Text`
  margin-top: 10px;
  font-size: 24px;
`;
const CalcImcBnt = styled.Button`
  
`;
const AreaResult = styled.View`
  width:95%;
  margin-top: 10px;
  background-color: #eee;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  border-radius:10px;
`;
const TituloResult = styled.Text`
  font-size: 18px;
  font-weight: bold;

`;
const Magreza = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  margin-top:20px;
  color: #3ADF00;
`; 

const Normal = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  margin-top:20px;
  color: #0B610B;
`;
const Sobrepeso = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  margin-top:20px;
  color: #F4FA58;
`;
const Obsidade = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  margin-top:20px;
  color: #FFBF00;
`;

const ObsidadeGrave = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  margin-top:20px;
  color: #FF0000;
`;

export default () => {

  const [peso, alteraPeso] = useState('40');

  const [altura, alteraAltuta] = useState('1.60');
  


  return (
    <Pagina>
      <Cabecalho>IMC Fácil</Cabecalho>
      <Peso placeholder="Quanto você pesa ?" kyboardType="numeric" value={peso} onChangeType={(valorPeso) => alteraPeso(valorPeso)}/>
      <Altura placeholder="Qual sua altura ?" kyboardType="numeric" value={altura} onChangeType={(valorAltura) => alteraAltuta(valorAltura)}/>
      <CalcImcBnt title="Calcular IMC" color="green"/>
      { peso / (altura * altura) < 18.5 &&
         <AreaResult>
         <TituloResult> IMC   Classificação   Obsidade(Grau)</TituloResult>
         <Magreza > {parseFloat( peso / (altura * altura )).toFixed(2)}         Magreza              0 </Magreza>
       </AreaResult>
      }
      {(peso / (altura * altura)) > 18.5 && (peso / (altura * altura)) < 24.90 &&
         <AreaResult>
         <TituloResult> IMC   Classificação   Obsidade(Grau)</TituloResult>
         <Normal > {parseFloat( peso / (altura * altura )).toFixed(2)}         Normal             0 </Normal>
       </AreaResult>
      }
      {(peso / (altura * altura))> 25.0 && (peso / (altura * altura)) < 29.90 &&
         <AreaResult>
         <TituloResult> IMC   Classificação   Obsidade(Grau)</TituloResult>
         <Sobrepeso > {parseFloat( peso / (altura * altura )).toFixed(2)}       Sobrepeso             I </Sobrepeso>
       </AreaResult>
      }
      {(peso / (altura * altura))> 30.0 && (peso / (altura * altura)) < 39.90 &&
         <AreaResult>
         <TituloResult> IMC   Classificação   Obsidade(Grau)</TituloResult>
         <Obsidade > {parseFloat( peso / (altura * altura )).toFixed(2)}       Obsidade             II </Obsidade>
       </AreaResult>
      }
      { (peso / (altura * altura)) > 40.0 &&
         <AreaResult>
         <TituloResult> IMC   Classificação   Obsidade(Grau)</TituloResult>
         <ObsidadeGrave > {parseFloat( peso / (altura * altura )).toFixed(2)}      ObsidadeGrave      III </ObsidadeGrave>
       </AreaResult>
      }
  
    </Pagina>
  );
};