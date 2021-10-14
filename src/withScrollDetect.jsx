export const withScrollDetect = (WrappedComponent) => function Component({...props}) {
  return <WrappedComponent {...props}/>;
};
