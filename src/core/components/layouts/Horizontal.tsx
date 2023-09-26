// Horizontal.tsx
import React, { forwardRef } from "react";
import { Stack, StackProps } from "@mantine/core";
import useLayoutStyles, { LayoutStyleProps } from "./useLayoutStyles";

type HorizontalProps = React.ComponentPropsWithRef<"div"> & StackProps & LayoutStyleProps;

const Horizontal = forwardRef<HTMLDivElement, React.ComponentPropsWithRef<"div"> & HorizontalProps>(
  (props, ref) => {
    const className = useLayoutStyles(props);
    return (
      <Stack {...props} ref={ref} className={className}>
        {props.children}
      </Stack>
    );
  }
);

export default Horizontal;
