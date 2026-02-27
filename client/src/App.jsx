import Header from './components/Header.jsx';
import AuthPanel from './components/AuthPanel.jsx';
import SOSPanel from './components/SOSPanel.jsx';
import MapPreview from './components/MapPreview.jsx';

export default function App() {
  return (
    <main className="app">
      <Header />
      <AuthPanel />
      <SOSPanel />
      <MapPreview />
    </main>
  );
}
