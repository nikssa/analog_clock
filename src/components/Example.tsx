import React, { useState, useEffect, useRef } from 'react';

export const Icon = ({ name, size = 16 }: { name: string; size: number }) => {
  const ImportedIconRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const clockImport = await import(`../assets/svg/${name}.svg?react`);
        ImportedIconRef.current = await clockImport.default;
        // console.log('clockImport', clockImport);
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && !!ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    console.log('ImportedIcon', ImportedIcon);
    return <ImportedIcon width={size} style={{ padding: '4rem' }} />;
  }

  return null;
};
