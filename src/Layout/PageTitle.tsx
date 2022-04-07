import React, { Component } from "react";
import cx from "classnames";

interface PageTitleProps {
    heading: string,
    icon: string,
    subheading?: string | null,
}

class PageTitle extends Component<PageTitleProps, any> {

    render() {
        let {
            heading,
            icon,
            subheading,
        } = this.props;

        return (
            <div className="app-page-title mt-3">
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className={cx("page-title-icon")}>
                            <i className={icon} />
                        </div>
                        <div>
                            {heading}
                            <div className={cx("page-title-subheading")}>
                                {subheading}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageTitle;
