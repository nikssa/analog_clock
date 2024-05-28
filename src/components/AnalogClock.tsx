import React, { useEffect, useRef, useState } from 'react';

const AnalogClock = ({ name = 'clock' }: { name?: string }) => {
  const ClockSVGRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { default: clock } = await import(
          `../assets/svg/${name}.svg?react`
        );

        ClockSVGRef.current = await clock;

        //   console.log(clock);
      } catch (error: any) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [name]);

  //   console.log(ClockSVGRef.current);

  if (!isLoading && !!ClockSVGRef.current) {
    const { current: ImportedSVG } = ClockSVGRef;
    // console.log(ImportedSVG);
    return <ImportedSVG width={200} style={{ padding: '4rem' }} />;
  }

  //   return (
  //     <div>
  //       <h1>AnalogClock</h1>
  //       {ClockSVGRef.current}
  //     </div>
  //   );
};

export default AnalogClock;
