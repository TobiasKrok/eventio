// useLayoutStyles.ts
import { useMemo } from "react";
import classNames from "classnames";
import css from "./Layout.module.css";
export type LayoutStyleProps = {
  className?: string;
  center?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  debug?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
};

const useLayoutStyles = (props: LayoutStyleProps) => {
  const className = useMemo(() => {
    return classNames(props.className, {
      [css.fullWidth as string]: props.fullWidth,
      [css.fullHeight as string]: props.fullHeight,
      [css.center as string]: props.center,
      [css.alignCenter as string]: props.alignCenter,
      [css.justifyCenter as string]: props.justifyCenter,
      [css.debug as string]: props.debug,
    });
  }, [props]);

  return className;
};

export default useLayoutStyles;
