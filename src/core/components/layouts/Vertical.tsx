// Vertical.tsx
import React, { forwardRef } from "react";
import { Stack, StackProps } from "@mantine/core";
import useLayoutStyles, { LayoutStyleProps } from "./useLayoutStyles";
import { useSplitLayoutProps } from "./useSplitLayoutProps";

type VerticalProps = React.ComponentPropsWithRef<"div"> & StackProps & LayoutStyleProps;
const Vertical = forwardRef<HTMLDivElement, React.ComponentPropsWithRef<"div"> & VerticalProps>(
  (props, ref) => {
    const [layoutProps, restProps] = useSplitLayoutProps(props);
    const className = useLayoutStyles(layoutProps);

    return (
      <Stack {...restProps} ref={ref} className={className}>
        {props.children}
      </Stack>
    );
  }
);

export default Vertical;
