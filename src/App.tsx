import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shuttle from './content/shuttle/Shuttle';
import './App.css';
import About from './content/about/About';
import Solitaire from './content/solitaire/Solitaire';
import Klusters from './content/klusters/Klusters';
import ImgRefiner from './content/imgRefiner/ImgRefiner';
import Island from './content/island/Island';

const { Content, Sider } = Layout;

function App() {
  return (
    <Router>
      <Layout
        style={{
          height: '100vh',
          width: '100%',
          position: 'fixed',
          left: 0,
        }}>
        <Layout>
          <Sider
            className="site-layout-side"
            breakpoint="xl"
            collapsedWidth="1">
          </Sider>
          <Content
            className="site-layout-content"
            style={{
              overflow: 'auto',
              padding: 24,
              margin: 0
            }}
          >
            <div
              style={{
              }}>
              <Route exact path="/" component={About} />
              <Route path="/about" component={About} />
              <Route path="/projects/shuttle" component={Shuttle} />
              <Route path="/projects/solitaire" component={Solitaire} />
              <Route path="/projects/klusters" component={Klusters} />
              <Route path="/projects/imgrefiner" component={ImgRefiner} />
              <Route path="/projects/island" component={Island} />
            </div>
          </Content>
          <Sider breakpoint="xl"
            className="site-layout-side"
            collapsedWidth="1"></Sider>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
