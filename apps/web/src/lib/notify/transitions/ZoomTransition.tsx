/**
 * Credit to MUI team @ https://mui.com
 */
import * as React from 'react';
import { TransitionProps, TransitionStatus, Transition } from 'notistack';
import {
  useForkRef,
  reflow,
  getTransitionProps,
  createTransition,
} from './shared';

const styles: Partial<Record<TransitionStatus, React.CSSProperties>> = {
  entering: {
    transform: 'none',
  },
  entered: {
    transform: 'none',
  },
};

export const ZoomTransition = React.forwardRef<HTMLDivElement, TransitionProps>(
  (props, ref) => {
    const {
      children,
      in: inProp,
      style,
      timeout = 0,
      onEnter,
      onEntered,
      onExit,
      onExited,
      direction, // Take this out since this is a Slide-only prop
      ...other
    } = props;

    const nodeRef = React.useRef(null);
    const handleRefIntermediary = useForkRef((children as any).ref, ref);
    const handleRef = useForkRef(nodeRef, handleRefIntermediary);

    const handleEnter: TransitionProps['onEnter'] = (node, isAppearing) => {
      reflow(node);

      const transitionProps = getTransitionProps({
        style,
        timeout,
        mode: 'enter',
      });
      node.style.webkitTransition = createTransition(
        'transform',
        transitionProps
      );
      node.style.transition = createTransition('transform', transitionProps);

      if (onEnter) {
        onEnter(node, isAppearing);
      }
    };

    const handleExit: TransitionProps['onExit'] = node => {
      const transitionProps = getTransitionProps({
        style,
        timeout,
        mode: 'exit',
      });
      node.style.webkitTransition = createTransition(
        'transform',
        transitionProps
      );
      node.style.transition = createTransition('transform', transitionProps);

      if (onExit) {
        onExit(node);
      }
    };

    return (
      <Transition
        appear
        in={inProp}
        nodeRef={nodeRef}
        onEnter={handleEnter}
        onEntered={onEntered}
        onExit={handleExit}
        onExited={onExited}
        timeout={timeout}
        {...other}
      >
        {(state, childProps) =>
          React.cloneElement(children as any, {
            style: {
              transform: 'scale(0)',
              visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
              ...styles[state],
              ...style,
              ...(children as any).props.style,
            },
            ref: handleRef,
            ...childProps,
          })
        }
      </Transition>
    );
  }
);

ZoomTransition.displayName = 'ZoomTransition';
