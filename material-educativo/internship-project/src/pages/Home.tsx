import reactLogo from '@/assets/react.svg';
import viteLogo from '/vite.svg';

import Title from '@/components/ui/Title';

function Home() {
  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title>Vite + React + TypeScript</Title>
      <p>
        Una aplicación moderna con navbar responsive y componentes escalables
      </p>
    </div>
  );
}

export default Home;
