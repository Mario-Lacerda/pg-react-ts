# **Desafio Dio - Criando a Página Com os Detalhes do Usuário Com React  (typescript node)**



# Parte 1

### Aqui estão as etapas para criar uma página de detalhes do usuário com React e TypeScript:

1. Crie um novo projeto React usando o Create React App.
2. Instale as dependências do React Router e do Material UI.
3. Crie uma página de detalhes do usuário usando o React Router.
4. Crie uma caixa de diálogo de edição do usuário usando o Material UI.
5. Vincule a caixa de diálogo de edição do usuário à página de detalhes do usuário.
6. Salve e execute o projeto para ver os resultados.

Aqui está um exemplo de código para uma página de detalhes do usuário com React e TypeScript:



```plaintext
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Card, TextField, Button } from "@material-ui/core";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetch("/api/users/1")
      .then((response) => response.json())
      .then((user) => setUser(user));
  }, []);

  const editUser = () => {
    setEditing(true);
  };

  const updateUser = () => {
    fetch("/api/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((user) => setUser(user));
  };

  const cancelEdit = () => {
    setEditing(false);
  };

  return (
    <div>
      <Card>
        <Card.Title>User Details</Card.Title>
        <TextField
          label="Name"
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />
        <TextField
          label="Email"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
      </Card>
      {editing && (
        <div>
          <Button onClick={editUser}>Edit</Button>
          <Button onClick={updateUser}>Update</Button>
          <Button onClick={cancelEdit}>Cancel</Button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

Este é apenas um exemplo de código, e você pode adaptá-lo para suas necessidades específicas.

 Criando a Página Com os Detalhes do Usuário Com React typescript node ;  costruindo um gerenciador de tarefas

# **Parte 2**



## Aqui estão as etapas para criar um gerenciador de tarefas com React e TypeScript:

1. Crie um novo projeto React usando o Create React App.
2. Instale as dependências necessárias, incluindo React, React Router, React Hooks e TypeScript.
3. Crie uma página inicial para o seu gerenciador de tarefas.
4. Crie um componente para cada tipo de tarefa, como Tarefa, Lista de Tarefas e Tarefas Concluídas.
5. Crie um serviço para gerenciar as tarefas, como adicionar, editar, excluir e concluir tarefas.
6. Vincule os componentes e o serviço para criar o seu gerenciador de tarefas.

Aqui está um exemplo de código para um gerenciador de tarefas com React e TypeScript:



```plaintext
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((response) => response.json())
      .then((tasks) => setTasks(tasks));
  }, []);

  const addTask = (task) => {
    fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((task) => setTasks([...tasks, task]));
  };

  const deleteTask = (id) => {
    fetch("/api/tasks/" + id, {
      method: "DELETE",
    })
      .then(() => setTasks(tasks.filter((task) => task.id !== id)));
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TasksList tasks={tasks} />
        </Route>
        <Route path="/add">
          <AddTask onAddTask={addTask} />
        </Route>
        <Route path="/delete/:id">
          <DeleteTask id={id} onDeleteTask={deleteTask} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

Este é apenas um exemplo básico de um gerenciador de tarefas com React e TypeScript. Você pode personalizar o código para atender às suas necessidades específicas.



<br />

<h1 align="center"> Gerenciador de Tarefas </h1>
<h4 align="center">Plataforma de Gerenciamento de Tarefas onde você pode fazer sua lista de tarefas do dia e ter auxilio de um cronometro para controlar o tempo de cada atividade</h4>
<br />

### Criar uma página para marcar lista de tarefas e controlar por um cronometro



##  Índice

* [Sobre o Projeto](#-sobre-o-projeto)
  * [UseStade e Props](#usestade-e-props)
  * [Linguagens Usadas](#-construido-com)
* [Instalação](#-instalação)
  * [Requisitos](#requisitos)
  * [Instalar a aplicação Web](#instalar-a-aplicação-web)
* [Como usar](%EF%B8%8F-como-usar)
* [Autor](#-autor)
* [Licença](#-licença)

<br /><br />

## Sobre o Projeto

plataforma de Gerenciamento de Tarefas onde você pode fazer sua lista de tarefas do dia e ter auxilio de um cronometro para controlar o tempo de cada atividade.

Com essa aplicação consegui por em prática os conhecimentos aprendidos, onde fui capaz de aprender como criar um projeto do zero com React e Typescript e como ele funciona por debaixo dos panos.

Também criei componentes com class-component e function component, como usar SCSS e o CSS-Modules que ajuda a não ter sobreposição de classes. Sem contar a comunicação entre componentes com props e como funciona o State para renderizar o componente para sempre atualizar de forma dinamica.

<br /><br />

### UseStade e Props

Como o React não é Reativo e sim Declarativo, foi utilizado a função UseStade para atualizar de forma dinamica a lista assim que é adicionado uma nova tarefa pelo formulário, e então é feita a comunicação de dados pelos componentes usando Props.

<br />
<div align="center" width="600px">
<img src="https://user-images.githubusercontent.com/81038899/159989735-ea53c548-58c0-474a-a05c-aa323e4c8ba0.gif" />
</div>
<br />

Pelo props foi possível montar a comunicação através do componente "pai" para que os outros componentes consigam receber e enviar dados, como por exemplo o cronometro. Assim que a tarefa é selecionada é enviado o tempo e convertido para segundos pelo componente, e quando o cronometro é zerado ele retorna para lista que a tarefa está completa, e a lista atualiza o componente novamente.  

Tudo isso de forma dinamica sem que o Javascript precise recarregar a página já que o React atualiza os componentes de forma individual e dinâmica.

<br />
<div align="center" width="600px">
<img src="https://user-images.githubusercontent.com/81038899/159991101-ed41fd06-0312-4c28-aafa-399c03a7df33.gif#vitrinedev" />
</div>
<br />




##  Instalação
#### É possível usar a aplicação através do link: https://gerenciador-de-tarefas-chi.vercel.app



### Requisitos

Para instalar essa aplicação na máquina é preciso ter instalado o Node.js

saiba mais em https://nodejs.org/en/download/



### Instalar a aplicação Web

1. Clone o repositório na sua Máquina

2. Navegue até a pasta clonada

3. Abra o painel de comandos dentro da pasta e rode a instalação de dependencias do Node com npm
```
npm install
```



4. Após a instalação das dependências, rode o comando abaixo para iniciar o servidor React

```
npm start
```




##  Como usar

 1. Para adicionar na lista de tarefas, preencha o formulário com a atividade e o tempo (no máximo 1:30:00)

 2. Depois selecione a tarefa que deseja iniciar o cronometro

 3. Clique em começar para iniciar a contagem

 4. Assim que o tempo é zerado automáticamente a aplicação marca como concluída

 5. Após a conclusão não pode selecionar a tarefa novamente, somente criando outra 




<p>Créditos: <strong>Franklin Campos</strong> 👋 </br>
</p>

