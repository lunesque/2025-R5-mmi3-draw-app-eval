export function DrawToolbar() {
import { DrawExportButton } from "../DrawExportButton";

export function DrawToolbar({ canvasRef }) {
  return (
    <div className="flex">
      <DrawExportButton canvasRef={canvasRef} />
    </div>
  )
}