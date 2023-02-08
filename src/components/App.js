import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/react_bricks.css';
import BrickList from './BrickList';
import {Helmet} from "react-helmet";


function App() {
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>AMA Walk of Fame</title>
        <link rel="canonical" href="https://eloquent-kitten-8839bc.netlify.app/" />
        <meta name="description" content="AMA Walk of Fame Brick directory" />
            </Helmet>
      <main className="App__main">
        <BrickList />
      </main>
    </div>
  );
}

export default App;
