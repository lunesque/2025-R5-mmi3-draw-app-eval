import { useCallback } from "react";

export function DrawExportButton({ canvasRef }) {
  const onClickExport = useCallback(() => {
    if (!canvasRef.current) return;
    /** Convertir le canvas en image format png */
    const url = canvasRef.current.toDataURL("image/png");

    /** Créer un lien <a> qui contient l'url du fichier png qui a devenu téléchargeable avec l'attribut dowbload, et le déclencher immédiatement avec click() */
    const link = document.createElement("a");
    link.href = url;
    link.download = "dessin-export.png";
    link.click();
  }, [canvasRef]);
  return (
    <div>
      <button className="btn btn-secondary mx-3" onClick={onClickExport}>Exporter le dessin au format .png</button>
    </div>
  )
}