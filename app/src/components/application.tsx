import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export interface IApplicationProps { params: {}; route: {}; }

class Application extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="application-container">Go to `/hello/"your name"/` to see react router working</div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
  };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({}, dispatch);
}

export default connect<{}, {}, IApplicationProps> (mapStateToProps, mapDispatchToProps)(Application);