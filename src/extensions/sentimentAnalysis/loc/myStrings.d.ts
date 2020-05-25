declare interface ISentimentAnalysisCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'SentimentAnalysisCommandSetStrings' {
  const strings: ISentimentAnalysisCommandSetStrings;
  export = strings;
}
