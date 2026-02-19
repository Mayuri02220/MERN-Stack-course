import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DetailsCards from './components/DetailsCards';


export const App = () => {

  return (
    <>

      <div className='container'>
        <div className="row my-2">

          <div className="col-md-3 my-2">
            <DetailsCards CardTitle='Nature' CardDiscription='Img'/>
          </div>

          <div className="col-md-3 my-2">
            <DetailsCards CardTitle='Nature' CardDiscription='Img'/>
          </div>

          <div className="col-md-3 my-2">
            <DetailsCards CardTitle='Nature' CardDiscription='Img'/>
          </div>

          <div className="col-md-3 my-2">
            <DetailsCards CardTitle='Nature' CardDiscription='Img'/>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;

