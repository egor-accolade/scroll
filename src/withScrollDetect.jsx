export const withScrollDetect = (WrappedComponent) => function Component({...props}) {
  // should pass a scrolled=true prop to WrappedComponent if user scrolled 400px from the top of the screen
  return <WrappedComponent {...props}/>;
};
