import Home from '../components/Home';
import LeftPanel from '../components/LeftPanel';

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
