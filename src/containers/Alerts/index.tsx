import React from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  resetCategoryAddAlert,
  resetTransactionAddAlert,
} from "../../state/actions";

const Alerts = () => {
  const dispatch = useDispatch();

  const showCategoryAddedSuccessAlert = useSelector(
    (state: any) => state.categories.showCategoryAddedSuccessAlert
  );
  const showTransactionAddedSuccessAlert = useSelector(
    (state: any) => state.transactions.showTransactionAddedSuccessAlert
  );

  return (
    <div>
      {showCategoryAddedSuccessAlert && (
        <Alert
          variant="success"
          onClose={() => dispatch(resetCategoryAddAlert())}
          dismissible
        >
          <Alert.Heading>Category added successfully</Alert.Heading>
        </Alert>
      )}
      {showTransactionAddedSuccessAlert && (
        <Alert
          variant="success"
          onClose={() => dispatch(resetTransactionAddAlert())}
          dismissible
        >
          <Alert.Heading>Transaction added successfully</Alert.Heading>
        </Alert>
      )}
    </div>
  );
};

export default Alerts;
