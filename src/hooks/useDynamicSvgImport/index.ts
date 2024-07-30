/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment */
import { FC, SVGProps, useEffect, useRef, useState } from 'react';

interface DynamicSvgImportResult {
  error: unknown;
  loading: boolean;
  SvgIcon: FC<SVGProps<SVGElement>> | null;
}

export function useDynamicSvgImport(iconName: string): DynamicSvgImportResult {
  const importedIconRef = useRef<FC<SVGProps<SVGElement>> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    void (async () => {
      setLoading(true);
      try {
        const { ReactComponent } = await import(
          `../../assets/icons/${iconName}.svg?react`
        );
        console.log('ReactComponent:', ReactComponent);
        importedIconRef.current = ReactComponent;
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [iconName]);

  return { error, loading, SvgIcon: importedIconRef.current };
}
