import { DrawExportButton } from "../DrawExportButton";
import { FullScreenButton } from "../FullScreenButton";

export function DrawToolbar({ canvasRef }) {
  return (
    <div className="flex">
      <DrawExportButton canvasRef={canvasRef} />
      <FullScreenButton canvasRef={canvasRef} />
    </div>
  )
}