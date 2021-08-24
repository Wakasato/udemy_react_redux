import React,{ Component } from "react";
import {connect} from 'react-redux';
import { readEvents } from '../actions'


class EVentsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }
  render(){
     const props = this.props

    return(
         <React.Fragment>
          value:{props.value}
            <button>+1</button>
            <button>-1</button>
       </React.Fragment>
      )
  }
}

const mapStateToProps = state =>({})

const mapDispatchToProps =({readEvents})

export default connect(mapStateToProps, mapDispatchToProps)(EVentsIndex)
