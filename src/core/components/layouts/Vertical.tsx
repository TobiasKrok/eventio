// Vertical.tsx
import React, { forwardRef } from "react";
import { Stack, StackProps } from "@mantine/core";
import useLayoutStyles, { LayoutStyleProps } from "./useLayoutStyles";

type VerticalProps = React.ComponentPropsWithRef<"div"> & StackProps & LayoutStyleProps;
const Vertical = forwardRef<HTMLDivElement, React.ComponentPropsWithRef<"div"> & VerticalProps>(
  (props, ref) => {
    const className = useLayoutStyles(props);
    return (
      <Stack {...props} ref={ref} className={className}>
        {props.children}
      </Stack>
    );
  }
);

export default Vertical;
