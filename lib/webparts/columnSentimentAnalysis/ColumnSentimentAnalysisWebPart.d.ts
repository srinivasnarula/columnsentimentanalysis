import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IColumnSentimentAnalysisWebPartProps {
    description: string;
}
export default class ColumnSentimentAnalysisWebPart extends BaseClientSideWebPart<IColumnSentimentAnalysisWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ColumnSentimentAnalysisWebPart.d.ts.map