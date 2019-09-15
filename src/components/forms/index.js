import React from "react";
import { Formik } from "formik";

const Forms = () => (
  <div className="tc">
    <h2 data-cy="forms">Forms</h2>
    <div className="tl pv3">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form data-cy="form" onSubmit={handleSubmit}>
            <div className="pa2">
              <input
                data-cy="email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <span className="red">
                {errors.email && touched.email && errors.email}
              </span>
            </div>
            <div className="pa2">
              <input
                data-cy="password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <span className="red">
                {errors.password && touched.password && errors.password}
              </span>
            </div>
            <div className="ph2 pv3">
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  </div>
);

export default Forms;
