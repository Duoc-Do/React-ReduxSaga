import React from "react";
// import React, { useEffect } from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";
// import { firestore } from "../../firebase/firebase.utils";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  // useEffect(() => {
  //   console.log("I am subscribing");
  //   const unsubscribeFromCollections = firestore
  //     .collection("collection")
  //     .onSnapshot((snapshot) => console.log(snapshot));
  //   return () => {
  //     // when you Unmount. I mean componentWillUnmount
  //     console.log("I am unsubscribeFromCollections");
  //     unsubscribeFromCollections();
  //   };
  // }, []);

  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
