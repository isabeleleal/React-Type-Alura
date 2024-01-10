import "../Item/item.css";
import { ITarefa } from "../../types/tarefa";
interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}
export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: Props) {
  return (
    <li
      className={`${"item"} ${selecionado ? "itemSelecionado" : ""} ${
        completado ? "itemCompletado" : ""
      }`}
      onClick={() =>
        !completado &&
        selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && (
        <span className="concluido" arial-label="tarefa completada"></span>
      )}
    </li>
  );
}
