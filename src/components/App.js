import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
// using class component instead of functional component inorder to use state methods for data updations and life cycle methods

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  renderContent() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// const App = function () {
//   return (
//     <div className="ui container" style={{ marginTop: "10px" }}>
//       <SearchBar />
//     </div>
//   );
// };

export default App;
