export default function TailwindBasics() {
  return (
    <div>
      <div id="my-div" className="text-blue-500 text-2xl">
        This is tailwind basics Ping
        <div className="animate-ping">
        </div>
        <div className="animate-pulse">Pulse</div>
        <div className="animate-bounce">Bounce</div>

        <div className="motion-safe:animate-pulse">motion-safe pulse</div>
        Hello
      </div>
    </div>
  );
}
