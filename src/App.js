import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./Componentes/ComponenteMenu/ComponenteMenu";
import ComponentePeople from "./Componentes/ComponentePeople/ComponentePeople";



/*npm install react-router-dom@5.3.0*/

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" exact render={() => <Menu />} />
          <Route path="/people/:id" exact render={(routerProps) => <ComponentePeople {...routerProps}/>} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;

