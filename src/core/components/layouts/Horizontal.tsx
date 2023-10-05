// Horizontal.tsx
import React, { forwardRef } from "react";
import { Group, GroupProps } from "@mantine/core";
import useLayoutStyles, { LayoutStyleProps } from "./useLayoutStyles";
import { useSplitLayoutProps } from "./useSplitLayoutProps";

type HorizontalProps = React.ComponentPropsWithRef<"div"> & GroupProps & LayoutStyleProps;

const Horizontal = forwardRef<HTMLDivElement, React.ComponentPropsWithRef<"div"> & HorizontalProps>(
  (props, ref) => {
    const [layoutProps, restProps] = useSplitLayoutProps(props);
    const className = useLayoutStyles(layoutProps);
    return (
      <Group {...restProps} ref={ref} className={className}>
        {props.children}
      </Group>
    );
  }
);

export default Horizontal;
