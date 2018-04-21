import React from 'react';
export const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        switch (fieldName) {
          case 'fNameValid':
            fieldName = 'Name';
            break;
          case 'emailValid':
            fieldName = 'Email';
            break;
          default:
            break;
        }
        return (
          <p key={i}>
            {fieldName} {formErrors[fieldName]}
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);
