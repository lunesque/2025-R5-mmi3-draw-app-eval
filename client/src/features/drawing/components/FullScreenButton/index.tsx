import { useCallback } from "react";

export function FullScreenButton({ canvasRef }) {
  const onClickFullScreen = useCallback(() => {
    if (!canvasRef.current) return;
    canvasRef.current.requestFullscreen();
  }, []);
  return (
    <div>
      <button className="btn btn-secondary mx-3" onClick={onClickFullScreen}>Passer en plein écran</button>
    </div>
  )
}