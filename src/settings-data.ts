import {Options} from './rules';
import {LintCommand} from './ui/linter-components/custom-command-option';
import {CustomReplace} from './ui/linter-components/custom-replace-option';
import {NestedKeyOf} from './utils/nested-keyof';
import {NormalArrayFormats, QuoteCharacter, SpecialArrayFormats, TagSpecificArrayFormats} from './utils/yaml';

// CommonStyles are settings that are used in multiple places and thus need to be external to rules themselves to help facilitate their use
export type CommonStyles = {
  aliasArrayStyle: NormalArrayFormats | SpecialArrayFormats;
  tagArrayStyle: TagSpecificArrayFormats | NormalArrayFormats | SpecialArrayFormats;
  minimumNumberOfDollarSignsToBeAMathBlock: number;
  escapeCharacter: QuoteCharacter;
  removeUnnecessaryEscapeCharsForMultiLineArrays: boolean;
}

export interface LinterSettings {
  ruleConfigs: {
    [ruleName: string]: Options;
  };
  lintOnSave: boolean;
  displayChanged: boolean;
  settingsConvertedToConfigKeyValues: boolean;
  recordLintOnSaveLogs: boolean;
  lintOnFileChange: boolean,
  displayLintOnFileChangeNotice: boolean,
  foldersToIgnore: string[];
  linterLocale: string;
  logLevel: string;
  lintCommands: LintCommand[];
  customRegexes: CustomReplace[];
  commonStyles: CommonStyles;
}

export type LinterSettingsKeys = NestedKeyOf<LinterSettings>

export const DEFAULT_SETTINGS: Partial<LinterSettings> = {
  ruleConfigs: {},
  lintOnSave: false,
  recordLintOnSaveLogs: false,
  displayChanged: true,
  lintOnFileChange: false,
  displayLintOnFileChangeNotice: false,
  settingsConvertedToConfigKeyValues: false,
  foldersToIgnore: [],
  linterLocale: 'system-default',
  logLevel: 'ERROR',
  lintCommands: [],
  customRegexes: [],
  commonStyles: {
    aliasArrayStyle: NormalArrayFormats.SingleLine,
    tagArrayStyle: NormalArrayFormats.SingleLine,
    minimumNumberOfDollarSignsToBeAMathBlock: 2,
    escapeCharacter: '"',
    removeUnnecessaryEscapeCharsForMultiLineArrays: false,
  },
};
