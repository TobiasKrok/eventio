import { LayoutStyleProps } from "./useLayoutStyles";

export const useSplitLayoutProps = (props: any): [LayoutStyleProps, any] => {
  const { className, center, fullWidth, fullHeight, debug, alignCenter, justifyCenter, ...rest } =
    props;

  const layoutProps: LayoutStyleProps = {
    className,
    center,
    fullWidth,
    fullHeight,
    debug,
    alignCenter,
    justifyCenter,
  };

  return [layoutProps, rest];
};
