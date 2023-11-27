import * as React from 'react';
import { useState } from 'react';
function useRenderTimes() {
  const renderRef = React.useRef(0);

  React.useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

  return renderRef.current;
}

export { useRenderTimes };