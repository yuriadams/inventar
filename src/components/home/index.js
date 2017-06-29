import React from 'react';

class Home extends React.Component {
  // startscan = () => {
  //   window.location = "mochabarcode://CALLBACK=http://192.168.15.15:3000";
  // }
  //
  // load_from_url_callback = () => {
  //   alert(window.location.search.split('BARCODE=')[1])
  // }

  render() {
    return (
      // <div className="Home" onLoadStart={this.load_from_url_callback()}>
      //   <h3>Enter Barcode:</h3>
      //     <input id="barcodefieldresult" /><br />
      //
      //     <input onClick={this.startscan}
      //         type="button"
      //         value="Start camera barcode scanning field 1" />
      //
      // </div>
      <div className="Home">
        HOME!
      </div>
    );
  }
}

export default Home;
