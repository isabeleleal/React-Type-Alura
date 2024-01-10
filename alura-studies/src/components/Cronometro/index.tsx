import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/date";
import Botao from "../Button";
import { ITarefa } from "../types/tarefa";
import Relogio from "./Relogio";
import "./cronometro.css";
interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}
export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className="cronometro">
      <p className="titulo">Escolhar um card e inicie o cronômetro</p>

      <div className="relogioWrapper">
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>Começar</Botao>
    </div>
  );
}
