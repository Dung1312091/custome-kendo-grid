import React from "react";
import ReactDOM from "react-dom";
import {
  Grid,
  GridColumn as Column,
  GridEvent,
} from "@progress/kendo-react-grid";
import CustomGrid from "../../components/Grid";
import products from "./products.json";

const availableProducts = products.slice();

function sleep() {
  return new Promise((resolve: () => void, reject: any) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
}

class App extends React.Component {
  state = {
    gridData: availableProducts.splice(0, 20),
    showLoadmore: false,
    backTotop: false,
  };

  scrollHandler = (event: GridEvent) => {
    const e = event.nativeEvent;
    if (
      e.target.scrollTop + 10 >=
      e.target.scrollHeight - e.target.clientHeight
    ) {
      const moreData = availableProducts.splice(0, 10);
      if (moreData.length > 0) {
        this.setState({
          showLoadmore: true,
        });

        sleep().then(() => {
          this.setState(
            {
              gridData: this.state.gridData.concat(moreData),
              showLoadmore: false,
            },
            () => {
              console.log(this.state.gridData.length);

              if (this.state.gridData.length === 57) {
                this.setState({
                  backTotop: true,
                });
              }
            }
          );
        });
      }
    }
  };

  render() {
    console.log(this.state.backTotop);
    const { showLoadmore, backTotop } = this.state;
    return (
      <div style={{ width: 800 }}>
        <CustomGrid
          style={{ height: "400px" }}
          data={this.state.gridData}
          onScroll={this.scrollHandler}
          showLoadmore={showLoadmore}
          backTotop={backTotop}
        >
          <Column field="ProductID" title="ID" width="40px" />
          <Column field="ProductName" title="Name" width="250px" />
          <Column field="Discontinued" width="250px" />
          <Column field="UnitPrice" width="250px" />
          <Column field="QuantityPerUnit" width="250px" />
          <Column field="Category.CategoryName" width="250px" />
        </CustomGrid>
        <br />
        showing: {this.state.gridData.length} items
      </div>
    );
  }
}
export default App;
