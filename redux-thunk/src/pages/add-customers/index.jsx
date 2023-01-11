import React from "react";
import { useFormik } from "formik";
import "./index.scss";
import { useDispatch } from "react-redux";
import { addCustomerAction } from "../../redux/action/customers.actions";

const AddCustomer = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      companyName: "",
      contactTitle: "",
      address: {
        city: "",
        country: "",
      },
    },
    onSubmit: (values) => {
      dispatch(addCustomerAction(values));
      // console.log(values);
    },
  });
  return (
    <div className="container">
      <div className="formik">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="companyName">Company name</label> <br />
          <input
            id="companyName"
            name="companyName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.companyName}
          />
          <br />
          <label htmlFor="contactTitle">Contact title</label> <br />
          <input
            id="contactTitle"
            name="contactTitle"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.contactTitle}
          />
          <br />
          <label htmlFor="city">City</label> <br />
          <input
            id="address.city"
            name="address.city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address.city}
          />
          <br />
          <label htmlFor="country">Country</label> <br />
          <input
            id="address.country"
            name="address.country"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address.country}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
