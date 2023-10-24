import { toArray } from '@antfu/utils'

import { VitesseDarkThemes, colors } from './colors'

export default function getTheme({ name }) {
  // 根据亮暗取出对应值 Usage: `pick({ light: "lightblue", dark: "darkblue" })`

  const vitesse = (key: keyof typeof VitesseDarkThemes, op = '') => VitesseDarkThemes[key] + op

  const primer = colors

  const foreground = vitesse('foreground')
  const secondaryForeground = vitesse('secondaryForeground')
  const activeForeground = vitesse('activeForeground')
  const primary = vitesse('primary')

  const border = vitesse('border')
  const background = vitesse('background')
  const activeBackground = vitesse('activeBackground')
  const activePlusBackground = '#1e1e1d'
  const punctuation = vitesse('punctuation')

  const selectionBackgroundInActive = '#eeeeee15'
  const selectionBackground = '#2188ff38'
  const listSelectionBackground = '#3d886b5c'
  const theme = {
    name,
    base: 'vs-dark',
    colors: {
      'focusBorder': '#00000000',
      foreground,
      'descriptionForeground': secondaryForeground,
      'errorForeground': vitesse('red'),

      'textLink.foreground': primary,
      'textLink.activeForeground': primary,
      'textBlockQuote.background': background,
      'textBlockQuote.border': border,
      'textCodeBlock.background': background,
      'textPreformat.foreground': primer.gray[6],
      'textSeparator.foreground': primer.gray[3],

      'button.background': primary,
      'button.foreground': background,
      'button.hoverBackground': primary,

      'checkbox.background': activeBackground,
      'checkbox.border': primer.gray[1],

      'dropdown.background': background,
      'dropdown.border': border,
      'dropdown.foreground': foreground,
      'dropdown.listBackground': activeBackground,

      'input.background': activeBackground,
      'input.border': border,
      'input.foreground': foreground,
      'input.placeholderForeground': secondaryForeground,
      'inputOption.activeBackground': vitesse('ignored'),

      'badge.foreground': background,
      'badge.background': secondaryForeground,

      'progressBar.background': primary,

      'titleBar.activeForeground': activeForeground,
      'titleBar.activeBackground': background,
      'titleBar.inactiveForeground': primer.gray[5],
      'titleBar.inactiveBackground': background,
      'titleBar.border': activeBackground,

      'activityBar.foreground': foreground,
      'activityBar.inactiveForeground': vitesse('ignored'),
      'activityBar.background': background,
      'activityBarBadge.foreground': background,
      'activityBarBadge.background': activeForeground,
      'activityBar.activeBorder': primary,
      'activityBar.border': border,

      'sideBar.foreground': activeForeground,
      'sideBar.background': background,
      'sideBar.border': border,
      'sideBarTitle.foreground': foreground,
      'sideBarSectionHeader.foreground': foreground,
      'sideBarSectionHeader.background': background,
      'sideBarSectionHeader.border': border,

      'list.hoverForeground': foreground,
      'list.inactiveSelectionForeground': foreground,
      'list.activeSelectionForeground': foreground,
      'list.activeSelectionBackground': listSelectionBackground, // 文件列表选中背景色
      'list.inactiveFocusBackground': background,
      'list.focusBackground': activeBackground,
      'list.highlightForeground': primary,
      // ------------ 修改 ------------
      'list.focusOutline': listSelectionBackground,
      'list.hoverBackground': activePlusBackground,
      'list.inactiveSelectionBackground': activePlusBackground,

      'tree.indentGuidesStroke': primer.gray[1],

      'notificationCenterHeader.foreground': primer.gray[5],
      'notificationCenterHeader.background': background,
      'notifications.foreground': foreground,
      'notifications.background': background,
      'notifications.border': border,
      'notificationsErrorIcon.foreground': vitesse('red'),
      'notificationsWarningIcon.foreground': vitesse('orange'),
      'notificationsInfoIcon.foreground': vitesse('blue'),

      'pickerGroup.border': border,
      'pickerGroup.foreground': foreground,
      'quickInput.background': background,
      'quickInput.foreground': foreground,
      'quickInputList.focusBackground': listSelectionBackground,

      'statusBar.foreground': activeForeground,
      'statusBar.background': background,
      'statusBar.border': border,
      'statusBar.noFolderBackground': background,
      'statusBar.debuggingBackground': activeBackground,
      'statusBar.debuggingForeground': activeForeground,
      'statusBarItem.prominentBackground': activeBackground,

      'editorGroupHeader.tabsBackground': background,
      'editorGroupHeader.tabsBorder': border,
      'editorGroup.border': border,

      'tab.activeForeground': foreground,
      'tab.inactiveForeground': primer.gray[5],
      'tab.inactiveBackground': background,
      'tab.activeBackground': activePlusBackground,
      'tab.hoverBackground': activeBackground,
      'tab.unfocusedHoverBackground': background,
      'tab.border': border,
      'tab.unfocusedActiveBorderTop': border,
      'tab.activeBorder': border,
      'tab.unfocusedActiveBorder': border,
      'tab.activeBorderTop': primary,

      'breadcrumb.foreground': primer.gray[5],
      'breadcrumb.focusForeground': foreground,
      'breadcrumb.background': activeBackground,
      'breadcrumb.activeSelectionForeground': primer.blue[6], // 面包屑选中前景色
      'breadcrumbPicker.background': background,

      'editor.foreground': foreground,
      'editor.background': background,
      'editorWidget.background': background,
      'editor.foldBackground': '#eeeeee10',
      'editor.lineHighlightBackground': activeBackground,
      'editorLineNumber.foreground': '#dedcd51a',
      'editorLineNumber.activeForeground': activeForeground,
      'editorIndentGuide.background': '#ffffff15',
      'editorIndentGuide.activeBackground': '#ffffff30',
      'editorWhitespace.foreground': '#ffffff15',

      'editor.findMatchBackground': '#e6cc7722',
      'editor.findMatchHighlightBackground': '#e6cc7744',
      'editor.inactiveSelectionBackground': selectionBackgroundInActive, // 未激活的选中背景色
      'editor.selectionBackground': selectionBackground,
      'editor.selectionHighlightBackground': selectionBackgroundInActive, // 选中匹配项高亮背景色
      'editor.wordHighlightBackground': '#1c6b4805',
      'editor.wordHighlightStrongBackground': '#1c6b4810',
      'editorBracketMatch.background': '#4d937520',

      'diffEditor.insertedTextBackground': '#4d937522',
      'diffEditor.removedTextBackground': '#ab595922',

      'scrollbar.shadow': '#0000',
      'scrollbarSlider.background': vitesse('faded'),
      'scrollbarSlider.hoverBackground': vitesse('ignored'),
      'scrollbarSlider.activeBackground': vitesse('ignored'),
      'editorOverviewRuler.border': border,

      'panel.background': background,
      'panel.border': border, // 终端面板边框颜色
      'panelTitle.activeBorder': primary,
      'panelTitle.activeForeground': foreground,
      'panelTitle.inactiveForeground': primer.gray[5],
      'panelInput.border': primer.gray[1],

      'terminal.foreground': foreground,
      'terminal.selectionBackground': selectionBackground,
      'terminal.ansiBrightBlack': '#777777',
      'terminal.ansiBrightBlue': vitesse('blue'),
      'terminal.ansiBrightCyan': vitesse('cyan'),
      'terminal.ansiBrightGreen': vitesse('green'),
      'terminal.ansiBrightMagenta': vitesse('magenta'),
      'terminal.ansiBrightRed': vitesse('red'),
      'terminal.ansiBrightWhite': '#ffffff',
      'terminal.ansiBrightYellow': vitesse('yellow'),
      'terminal.ansiBlack': VitesseDarkThemes.foreground,
      'terminal.ansiBlue': vitesse('blue'),
      'terminal.ansiCyan': vitesse('cyan'),
      'terminal.ansiGreen': vitesse('green'),
      'terminal.ansiMagenta': vitesse('magenta'),
      'terminal.ansiRed': vitesse('red'),
      'terminal.ansiWhite': VitesseDarkThemes.foreground,
      'terminal.ansiYellow': vitesse('yellow'),

      'gitDecoration.addedResourceForeground': vitesse('green'),
      'gitDecoration.modifiedResourceForeground': vitesse('blue'),
      'gitDecoration.deletedResourceForeground': vitesse('red'),
      'gitDecoration.untrackedResourceForeground': vitesse('cyan'),
      'gitDecoration.ignoredResourceForeground': vitesse('ignored'),
      'gitDecoration.conflictingResourceForeground': vitesse('orange'),
      'gitDecoration.submoduleResourceForeground': vitesse('secondaryForeground'),

      'editorGutter.modifiedBackground': vitesse('blue'),
      'editorGutter.addedBackground': vitesse('green'),
      'editorGutter.deletedBackground': vitesse('red'),

      'editorBracketHighlight.foreground1': vitesse('cyan'),
      'editorBracketHighlight.foreground2': vitesse('green'),
      'editorBracketHighlight.foreground3': vitesse('orange'),
      'editorBracketHighlight.foreground4': vitesse('magenta'),
      'editorBracketHighlight.foreground5': vitesse('yellow'),
      'editorBracketHighlight.foreground6': vitesse('blue'),

      'debugToolBar.background': background,
      'editor.stackFrameHighlightBackground': '#a707',
      'editor.focusedStackFrameHighlightBackground': '#b808',

      'peekViewEditor.matchHighlightBackground': '#ffd33d33',
      'peekViewResult.matchHighlightBackground': '#ffd33d33',
      'peekViewEditor.background': background,
      'peekViewResult.background': background,

      'settings.headerForeground': foreground,
      'settings.modifiedItemIndicator': primary,
      'welcomePage.buttonBackground': primer.gray[1],
      'welcomePage.buttonHoverBackground': primer.gray[2],

      'problemsErrorIcon.foreground': vitesse('red'),
      'problemsWarningIcon.foreground': vitesse('orange'),
      'problemsInfoIcon.foreground': vitesse('blue'),

      'editorError.foreground': vitesse('red'),
      'editorWarning.foreground': vitesse('orange'),
      'editorInfo.foreground': vitesse('blue'),
      'editorHint.foreground': vitesse('green'),

      'editorGutter.commentRangeForeground': vitesse('ignored'),
      'editorGutter.foldingControlForeground': vitesse('secondaryForeground'),

      'editorInlayHint.foreground': punctuation,
      'editorInlayHint.background': '#00000000',
      'editorStickyScroll.background': activeBackground,
      'editorStickyScrollHover.background': activeBackground,
      'menu.separatorBackground': border,
      // 新增
      'activityBar.activeBackground': activeBackground, // 活动栏背景色（最左侧）
      'inputOption.activeBorder': primary,

    },
    semanticHighlighting: true,
    semanticTokenColors: {
      namespace: vitesse('namespace'),
      property: vitesse('property'),
      interface: vitesse('interface'),
      type: vitesse('interface'),
      class: vitesse('class'),
    },
    tokenColors: [
      {
        scope: [
          'comment',
          'punctuation.definition.comment',
          'string.comment',
        ],
        settings: {
          foreground: vitesse('comment'),
        },
      },
      {
        scope: [
          'delimiter.bracket',
          'delimiter',
          'invalid.illegal.character-not-allowed-here.html',
          'keyword.operator.rest',
          'keyword.operator.spread',
          'keyword.operator.type.annotation',
          'keyword.operator.relational',
          'keyword.operator.assignment',
          'meta.brace',
          'meta.tag.block.any.html',
          'meta.tag.inline.any.html',
          'meta.tag.structure.input.void.html',
          'meta.type.annotation',
          'meta.embedded.block.github-actions-expression',
          'storage.type.function.arrow',
          'keyword.operator.type',
          'meta.objectliteral.ts',
          'punctuation',
        ],
        settings: {
          foreground: punctuation,
        },
      },
      {
        scope: [
          'constant',
          'entity.name.constant',
          'variable.language',
          'meta.definition.variable',
        ],
        settings: {
          foreground: vitesse('constant'),
        },
      },
      {
        scope: ['entity', 'entity.name'],
        settings: {
          foreground: vitesse('function'),
        },
      },
      {
        scope: 'variable.parameter.function',
        settings: {
          foreground,
        },
      },
      {
        scope: [
          'entity.name.tag',
          'tag.html',
        ],
        settings: {
          foreground: vitesse('keyword'),
        },
      },
      {
        scope: 'entity.name.function',
        settings: {
          foreground: vitesse('function'),
        },
      },
      {
        scope: [
          'keyword',
          'storage.type.class.jsdoc',
        ],
        settings: {
          foreground: vitesse('keyword'),
        },
      },
      {
        scope: [
          'storage',
          'storage.type',
          'support.type.builtin',
          'constant.language.undefined',
          'constant.language.null',
        ],
        settings: {
          foreground: vitesse('builtin'),
        },
      },
      {
        scope: [
          'text.html.derivative',
          'storage.modifier.package',
          'storage.modifier.import',
          'storage.type.java',
        ],
        settings: {
          foreground,
        },
      },
      {
        scope: [
          'string',
          'string punctuation.section.embedded source',
          'attribute.value',
        ],
        settings: {
          foreground: vitesse('string'),
        },
      },
      {
        scope: [
          'punctuation.definition.string',
          'punctuation.support.type.property-name',
        ],
        settings: {
          foreground: vitesse('string', '99'),
        },
      },
      {
        scope: 'support',
        settings: {
          foreground: vitesse('property'),
        },
      },
      {
        scope: [
          'property',
          'meta.property-name',
          'meta.object-literal.key',
          'entity.name.tag.yaml',
          'attribute.name',
        ],
        settings: {
          foreground: vitesse('property'),
        },
      },
      {
        scope: [
          'entity.other.attribute-name',
          'invalid.deprecated.entity.other.attribute-name.html',
        ],
        settings: {
          foreground: vitesse('variable'),
        },
      },
      {
        scope: [
          'variable',
          'identifier',
        ],
        settings: {
          foreground: vitesse('variable'),
        },
      },
      {
        scope: [
          'support.type.primitive',
          'entity.name.type',
        ],
        settings: {
          foreground: vitesse('type'),
        },
      },
      {
        scope: 'namespace',
        settings: {
          foreground: vitesse('namespace'),
        },
      },
      {
        scope: [
          'keyword.operator',
          'keyword.operator.assignment.compound',
          'meta.var.expr.ts',
        ],
        settings: {
          foreground: vitesse('operator'),
        },
      },
      {
        scope: 'invalid.broken',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.illegal',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          background: primer.red[6],
          foreground: primer.gray[0],
          content: '^M',
        },
      },
      {
        scope: 'message.error',
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: 'string variable',
        settings: {
          foreground: vitesse('string'),
        },
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
          foreground: vitesse('regex'),
        },
      },
      {
        scope: [
          'string.regexp.character-class',
          'string.regexp constant.character.escape',
          'string.regexp source.ruby.embedded',
          'string.regexp string.regexp.arbitrary-repitition',
        ],
        settings: {
          foreground: vitesse('string'),
        },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: {
          foreground: vitesse('yellow'),
        },
      },
      {
        scope: [
          'support.constant',
        ],
        settings: {
          foreground: vitesse('constant'),
        },
      },
      {
        scope: [
          'constant.numeric',
          'number',
        ],
        settings: {
          foreground: vitesse('number'),
        },
      },
      {
        scope: [
          'keyword.other.unit',
        ],
        settings: {
          foreground: vitesse('builtin'),
        },
      },
      {
        scope: [
          'constant.language.boolean',
          'constant.language',
        ],
        settings: {
          foreground: vitesse('boolean'),
        },
      },
      {
        scope: 'meta.module-reference',
        settings: {
          foreground: primary,
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: vitesse('orange'),
        },
      },
      {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: primary,
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: vitesse('interface'),
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground,
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground,
        },
      },
      {
        scope: 'markup.raw',
        settings: {
          foreground: primary,
        },
      },
      {
        scope: [
          'markup.deleted',
          'meta.diff.header.from-file',
          'punctuation.definition.deleted',
        ],
        settings: {
          background: primer.red[0],
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          'markup.inserted',
          'meta.diff.header.to-file',
          'punctuation.definition.inserted',
        ],
        settings: {
          background: primer.green[0],
          foreground: primer.green[6],
        },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          background: primer.orange[1],
          foreground: primer.orange[6],
        },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: primer.gray[1],
          background: primer.blue[6],
        },
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: primer.purple[6],
          fontStyle: 'bold',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          'brackethighlighter.tag',
          'brackethighlighter.curly',
          'brackethighlighter.round',
          'brackethighlighter.square',
          'brackethighlighter.angle',
          'brackethighlighter.quote',
        ],
        settings: {
          foreground: primer.gray[6],
        },
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          'constant.other.reference.link',
          'string.other.link',
          'punctuation.definition.string.begin.markdown',
          'punctuation.definition.string.end.markdown',
        ],
        settings: {
          foreground: vitesse('string'),
        },
      },
      {
        scope: [
          'markup.underline.link.markdown',
          'markup.underline.link.image.markdown',
        ],
        settings: {
          foreground: secondaryForeground,
          fontStyle: 'underline',
        },
      },
      {
        scope: [
          'type.identifier',
        ],
        settings: {
          foreground: vitesse('class'),
        },
      },
      {
        scope: [
          'entity.other.attribute-name.html.vue',
        ],
        settings: {
          foreground: vitesse('function'),
        },
      },
      {
        scope: [
          'invalid.illegal.unrecognized-tag.html',
        ],
        settings: {
          fontStyle: 'normal',
        },
      },
      // ------------ 新增 ------------
      {
        name: '分号、逗号',
        scope: [
          'punctuation.separator.comma',
          'punctuation.terminator.expression',
          'punctuation.terminator.statement',
        ],
        settings: {
          foreground: primer.gray[5],
        },
      },
      {
        name: 'CSS/SCSS 关键字',
        scope: [
          'keyword.control.at-rule',
        ],
        settings: {
          foreground: primer.purple[3],
        },
      },
      {
        name: 'this 关键字',
        scope: [
          'variable.language.this',
        ],
        settings: {
          foreground: primer.pink[2],
        },
      },
      {
        name: '注释/函数参数 斜体',
        scope: [
          'comment',
          'entity.name.variable.parameter',
          'meta.at-rule.function variable',
          'meta.at-rule.mixin variable',
          'variable.parameter',
        ],
        settings: {
          fontStyle: 'italic',
        },
      },
    ],
    rules: [],
  }

  // monaco rules
  const rules: any[] = []

  theme.tokenColors.forEach(({ scope, settings }: any) => {
    for (const s of toArray(scope)) {
      rules.push({
        token: s,
        foreground: settings.foreground?.replace('#', ''),
      })
    }
  })

  theme.rules = rules

  return theme
}
