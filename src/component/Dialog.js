import React, {Component} from "react";

class Dialog extends Component{


render(){

    let dialog=(

        <div className="dialog-box">
        <div>
        {this.props.children}
        </div>
        </div>
    )
      
    if(! this.props.isOpen){
        dialog=null;
    }
    return(
        <div>
        {dialog}
        </div>
    );
}


}

export default Dialog;