
const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;

const AppComponent = () => {
    return <div>
        <ReactRouterDOM.HashRouter>
          <div className="container">
              <nav className ="nav-main">
                    <img src="img/logoBoldrillBlanco.png" alt="Logo Boldrill" className="brand" />
                    
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                    </ul>
              </nav>
          </div>

            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
        </ReactRouterDOM.HashRouter>

    </div>
   
};

        const Contact = () => <h1>Este es el Contacto</h1>

ReactDOM.render(<AppComponent/>, document.getElementById('root'));