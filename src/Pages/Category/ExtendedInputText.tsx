import { InputText } from "primereact/inputtext";
import React, { HTMLInputTypeAttribute } from "react";
import cx from "classnames";

interface ExtendedInputTextProps {
    value?: string | ReadonlyArray<string> | number | undefined;
    onChange?: (val: string) => void | undefined;
    type?: HTMLInputTypeAttribute | undefined;
    validation?: () => boolean;
    name?: string | null;
    required?: boolean;
    readOnly? : boolean;
    onValidStatusChanged?: (status: boolean) => void
}

export default class ExtendedInputText extends React.Component<ExtendedInputTextProps, {}> {
    render(): React.ReactNode {

        var error = '';
        if (this.props.required == true && String(this.props.value).length == 0) {
            error = `${this.props.name} is required.`;
        } else if (this.props.validation != null) {
            let isValid = this.props.validation();
            error = isValid == true ? '' : `${this.props.name} is not valid.`;
        }

        var isAnyError = error.length > 0;

        this.props.onValidStatusChanged != null && this.props.onValidStatusChanged(!isAnyError);

        return (
            <>
                <InputText
                    type={this.props.type}
                    value={this.props.value}
                    readOnly={this.props.readOnly}
                    className={cx("form-control", isAnyError ? "p-invalid block" : "")}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.onChange && this.props.onChange(e.target.value)}
                />
                {isAnyError && <small className="p-error block">{error}</small>}
            </>
        );
    }
}