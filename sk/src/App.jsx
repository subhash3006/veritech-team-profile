import './App.css';
import Developmentteam from './Developmentteam';
import Leaderteam from './Leaderteam';
import Salesteam from './Salesteam';
function App() {
  return (
    <><div className="maincontainer">
      <h1 className='companyName'>VeriTech</h1>
     <div className='para'> Welcome to VeriTech, where a dedicated team of professionals works together to bring innovation, creativity and expertise to software industry,get to know the individuals who make our comapany thrive</div>
      <h1 id='intro'>Meet Our Team</h1>
      <Leaderteam />
      <Developmentteam />
      <Salesteam />
    </div>
    </>
  );
}

export default App;
