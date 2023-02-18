import * as esbuild from 'https://cdn.jsdelivr.net/npm/@netlify/esbuild-wasm/esm/browser.min.js';

async function compile(code) {
  await esbuild.initialize({
    wasmURL: 'https://cdn.jsdelivr.net/npm/@netlify/esbuild-wasm/esbuild.wasm',
  });

  const options = {
    loader: 'jsx'
  };

  try {
    const result = await esbuild.transform(code, options);
    return result.code;
  } catch (err) {
    console.log(err);
  }
}

const code = `
  import React from 'https://cdn.skypack.dev/react';
  import ReactDOM from 'https://cdn.skypack.dev/react-dom';

  import a from './sample';
  console.log(a);

  function App() {
    const [count, setCount] = React.useState(0);

    const clicked = () => {
      setCount(count + 1)
    }

    return (
      <div className='container'>
        <div>Testing</div>
        <button onClick={clicked}>Clicked me times {count}</button>
      </div>
    );
  }

  ReactDOM.render(<App />, document.body);
  `;

compile(code).then(compiled => {
  console.log(compiled);
  const script = document.createElement('script');
  script.type = 'module';
  script.innerHTML = compiled;

  document.head.appendChild(script);  
});