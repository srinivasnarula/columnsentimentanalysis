var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './ColumnSentimentAnalysis.module.scss';
var ColumnSentimentAnalysis = /** @class */ (function (_super) {
    __extends(ColumnSentimentAnalysis, _super);
    function ColumnSentimentAnalysis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnSentimentAnalysis.prototype.render = function () {
        return (React.createElement("div", { className: styles.columnSentimentAnalysis },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("span", { className: styles.title }, "Let's get started"),
                        React.createElement("p", { className: styles.subTitle }, "Step by step with Column Sentiment Analysis"))))));
    };
    return ColumnSentimentAnalysis;
}(React.Component));
export default ColumnSentimentAnalysis;
//# sourceMappingURL=ColumnSentimentAnalysis.js.map