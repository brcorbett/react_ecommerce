import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
	// Removes the default behavior that tries to autofill the form
	const handleFocus = (event) =>
		event.target.setAttribute("autocomplete", "off");
	return (
		<div className="group">
			<input
				className="form-input"
				onChange={handleChange}
				onFocus={handleFocus}
				{...otherProps}
			/>
			{label ? (
				<label
					className={`${
						otherProps.value.length ? "shrink" : ""
					} form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
