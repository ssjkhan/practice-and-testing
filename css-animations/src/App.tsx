function App() {
  return (
    <div className="App">
      <div id="my-div" className="text-blue-500 text-2xl">
        <div className="animate-ping">
          Ping
        </div>
        <div className="animate-pulse">Pulse</div>
        <div className="animate-bounce">Bounce</div>

        <div className="motion-safe:animate-pulse">motion-safe pulse</div>
        Hello
      </div>
    </div>
  );
}

export default App;
