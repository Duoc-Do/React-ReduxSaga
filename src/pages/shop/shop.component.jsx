import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
// import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component";

// const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends Component {
  // state = {
  //   loading: true,
  // };

  // unsubscribeFromSnapshot = null;
  // componentDidMount() {
  //   const { updateCollections } = this.props;
  //   const collectionRef = firestore.collection("collections");
  //   // fetch(
  //   //   "https://firestore.googleapis.com/v1/projects/crwn-db-2676b/databases/(default)/documents/"
  //   // )
  //   //   .then((response) => response.json())
  //   //   .then((collections) => console.log(collections));
  //   collectionRef.get().then((snapshot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     updateCollections(collectionsMap);
  //     this.setState({ loading: false });
  //   });
  //   // this.unsubcribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
  //   //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   //   // console.log(collectionsMap);
  //   //   updateCollections(collectionsMap);
  //   //   this.setState({ loading: false });
  //   // });
  // }
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }
  render() {
    const { match } = this.props;
    // const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // updateCollections: (collectionsMap) =>
  //   dispatch(updateCollections(collectionsMap)),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
