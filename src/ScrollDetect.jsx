// FUNC COMPONENT

export const ScrollDetect = (WrappedComponent) => function Component({...props}) {
  return <WrappedComponent {...props}/>;
};

// CLASS COMPONENT

// export function ScrollDetect(WrappedComponent) {
//   return class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {};
//     }

//     render() {
//       return (
//         <WrappedComponent
//           {...this.props}
//         />
//       );
//     }
//   };
// }
