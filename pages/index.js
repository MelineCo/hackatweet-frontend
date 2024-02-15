import Home from '../components/Home';
import LeftPanel from '../components/LeftPanel';
import Login from '../components/Login';


function Index() {
  return (
    <>
      <div className="threePanels">
        <LeftPanel />
        <Home />
      </div>
    </>
  );
}

export default Index;
