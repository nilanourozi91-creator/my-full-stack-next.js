import React from "react";

function ProdectPrice({ price }: { price: string }) {
  const [int, float] = price.split(".");

  return (
    <div>
      <span className="text-xs align-super">Afg</span>
      {int}
      <span className="text-xs align-super">
        {float ? `.${float}` : ".00"}
      </span>
    </div>
  );
}

export default ProdectPrice;