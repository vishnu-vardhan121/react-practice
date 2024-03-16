import { Component } from "react";
import React from "react";
import {DNA} from "react-loader-spinner"


class DnaSpinner extends Component {
   
    render(){
        return(
            <React.Fragment>
                <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
            </React.Fragment>
        )
    }
}

export default DnaSpinner