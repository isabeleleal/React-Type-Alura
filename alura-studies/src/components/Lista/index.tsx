/* import React, { useState } from "react"; */
import "./lista.css";
import Item from "./Item";
import { ITarefa } from "../types/tarefa";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className="listaTarefas">
      <h2> Estudo do dia </h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
