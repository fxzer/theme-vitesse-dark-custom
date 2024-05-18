import { colors, opacity, pick } from './colors'

function toArray(mayBeArray) {
  return Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray]
}

export default function getTheme() {
  const foreground = pick('foreground')
  const activeForeground = pick('activeForeground')
  const background = pick('background')
  const hoverBackground = '#1e1e1d'
  const activeBackground = pick('activeBackground')

  const primary = pick('primary')
  const ignored = pick('ignored')
  const border = pick('border')
  const punctuation = pick('punctuation')
  const buttonHoverBackground = colors.green[3]
  const selectionBackground = opacity(colors.blue[4], 0.25)
  const selectionBackgroundInActive = opacity(colors.gray[5], 0.2)
  const listSelectionBackground = opacity(primary, 0.3)
  const inactiveForeground = opacity(foreground, 0.8)

  const theme = {
    name: 'Vitesse Dark Custom',
    base: 'vs-dark',
    colors: {
      'focusBorder': primary,
      foreground,
      'descriptionForeground': ignored,
      'errorForeground': pick('red'),
      'textLink.foreground': primary,
      'textLink.activeForeground': primary,
      'textBlockQuote.background': background,
      'textBlockQuote.border': border,
      'textCodeBlock.background': background,
      'textPreformat.foreground': inactiveForeground,
      'textSeparator.foreground': colors.gray[6],

      'button.background': primary,
      'button.foreground': background,
      'button.hoverBackground': buttonHoverBackground,

      'checkbox.background': background,
      'checkbox.border': colors.gray[7],

      'dropdown.background': background,
      'dropdown.border': border,
      'dropdown.foreground': foreground,
      'dropdown.listBackground': activeBackground,

      'input.background': activeBackground,
      'input.border': border,
      'input.foreground': foreground,
      'input.placeholderForeground': ignored,
      'inputOption.activeBackground': ignored,

      'badge.foreground': background,
      'badge.background': ignored,

      'progressBar.background': primary,

      'titleBar.activeForeground': activeForeground,
      'titleBar.activeBackground': background,
      'titleBar.inactiveForeground': inactiveForeground,
      'titleBar.inactiveBackground': background,
      'titleBar.border': activeBackground,

      'activityBar.foreground': foreground,
      'activityBar.inactiveForeground': ignored,
      'activityBar.background': background,
      'activityBarBadge.foreground': background,
      'activityBarBadge.background': activeForeground,
      'activityBar.activeBorder': primary,
      'activityBar.border': border,

      'sideBar.foreground': foreground,
      'sideBar.background': background,
      'sideBar.border': border,
      'sideBarTitle.foreground': foreground,
      'sideBarSectionHeader.foreground': foreground,
      'sideBarSectionHeader.background': background,
      'sideBarSectionHeader.border': border,

      'list.hoverForeground': foreground,
      'list.inactiveSelectionForeground': foreground,
      'list.activeSelectionBackground': listSelectionBackground, // 文件列表选中背景色
      'list.inactiveFocusBackground': background,
      'list.focusBackground': activeBackground,
      'list.highlightForeground': primary,
      // ------------ 修改 ------------
      'list.activeSelectionForeground': '#f5f5f5',
      'list.focusOutline': primary,
      'list.hoverBackground': hoverBackground,
      'list.inactiveSelectionBackground': opacity(pick('primary'), 0.2),
      'tree.indentGuidesStroke': colors.gray[8],

      'notificationCenterHeader.foreground': inactiveForeground,
      'notificationCenterHeader.background': background,
      'notifications.foreground': foreground,
      'notifications.background': background,
      'notifications.border': border,
      'notificationsErrorIcon.foreground': pick('red'),
      'notificationsWarningIcon.foreground': pick('orange'),
      'notificationsInfoIcon.foreground': pick('blue'),

      'pickerGroup.border': border,
      'pickerGroup.foreground': foreground,
      'quickInput.background': background,
      'quickInput.foreground': foreground,
      'quickInputList.focusBackground': listSelectionBackground,

      'statusBar.foreground': foreground,
      'statusBar.background': background,
      'statusBar.border': border,
      'statusBar.noFolderBackground': background,
      'statusBar.debuggingBackground': activeBackground,
      'statusBar.debuggingForeground': foreground,
      'statusBarItem.prominentBackground': activeBackground,
      // 新增
      'statusBarItem.remoteBackground': primary,
      'statusBarItem.remoteForeground': foreground,
      'statusBarItem.remoteHoverBackground': buttonHoverBackground,
      'statusBarItem.remoteHoverForeground': '#fff',

      'editorGroupHeader.tabsBackground': background,
      'editorGroupHeader.tabsBorder': border,
      'editorGroup.border': border,

      'tab.activeForeground': activeForeground,
      'tab.inactiveForeground': inactiveForeground,
      'tab.inactiveBackground': background,
      'tab.activeBackground': hoverBackground,
      'tab.hoverBackground': activeBackground,
      'tab.unfocusedHoverBackground': background,
      'tab.border': border,
      'tab.unfocusedActiveBorderTop': border,
      'tab.activeBorder': border,
      'tab.unfocusedActiveBorder': border,
      'tab.activeBorderTop': primary,

      'breadcrumb.foreground': inactiveForeground,
      'breadcrumb.focusForeground': foreground,
      'breadcrumb.background': activeBackground,
      'breadcrumb.activeSelectionForeground': colors.green[2], // 面包屑选中前景色
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

      'diffEditor.insertedTextBackground': '#4d937550',
      'diffEditor.removedTextBackground': '#ab595950',

      'scrollbar.shadow': '#000',
      'scrollbarSlider.background': pick('faded'),
      'scrollbarSlider.hoverBackground': ignored,
      'scrollbarSlider.activeBackground': ignored,
      'editorOverviewRuler.border': border,

      'panel.background': background,
      'panel.border': border, // 终端面板边框颜色
      'panelTitle.activeBorder': primary,
      'panelTitle.activeForeground': activeForeground,
      'panelTitle.inactiveForeground': inactiveForeground,
      'panelInput.border': border,

      'terminal.foreground': foreground,
      'terminal.selectionBackground': selectionBackground,
      'terminal.ansiBrightBlack': '#777777',
      'terminal.ansiBrightBlue': pick('blue'),
      'terminal.ansiBrightCyan': pick('cyan'),
      'terminal.ansiBrightGreen': pick('green'),
      'terminal.ansiBrightMagenta': pick('magenta'),
      'terminal.ansiBrightRed': pick('red'),
      'terminal.ansiBrightWhite': '#ffffff',
      'terminal.ansiBrightYellow': pick('yellow'),
      'terminal.ansiBlack': pick('foreground'),
      'terminal.ansiBlue': pick('blue'),
      'terminal.ansiCyan': pick('cyan'),
      'terminal.ansiGreen': pick('green'),
      'terminal.ansiMagenta': pick('magenta'),
      'terminal.ansiRed': pick('red'),
      'terminal.ansiWhite': pick('foreground'),
      'terminal.ansiYellow': pick('yellow'),

      'gitDecoration.addedResourceForeground': pick('green'),
      'gitDecoration.modifiedResourceForeground': pick('blue'),
      'gitDecoration.deletedResourceForeground': pick('red'),
      'gitDecoration.untrackedResourceForeground': pick('cyan'),
      'gitDecoration.ignoredResourceForeground': ignored,
      'gitDecoration.conflictingResourceForeground': pick('orange'),
      'gitDecoration.submoduleResourceForeground': ignored,

      'editorGutter.modifiedBackground': pick('blue'),
      'editorGutter.addedBackground': pick('green'),
      'editorGutter.deletedBackground': pick('red'),

      'editorBracketHighlight.foreground1': pick('cyan'),
      'editorBracketHighlight.foreground2': pick('green'),
      'editorBracketHighlight.foreground3': pick('orange'),
      'editorBracketHighlight.foreground4': pick('magenta'),
      'editorBracketHighlight.foreground5': pick('yellow'),
      'editorBracketHighlight.foreground6': pick('blue'),

      'debugToolBar.background': background,
      'editor.stackFrameHighlightBackground': '#a707',
      'editor.focusedStackFrameHighlightBackground': '#b808',

      'peekViewEditor.matchHighlightBackground': '#ffd33d33',
      'peekViewResult.matchHighlightBackground': '#ffd33d33',
      'peekViewEditor.background': background,
      'peekViewResult.background': background,

      'settings.headerForeground': foreground,
      'settings.modifiedItemIndicator': primary,
      'welcomePage.buttonBackground': primary,
      'welcomePage.buttonHoverBackground': colors.green[2],

      'problemsErrorIcon.foreground': pick('red'),
      'problemsWarningIcon.foreground': pick('orange'),
      'problemsInfoIcon.foreground': pick('blue'),

      'editorError.foreground': pick('red'),
      'editorWarning.foreground': pick('orange'),
      'editorInfo.foreground': pick('blue'),
      'editorHint.foreground': pick('green'),

      'editorGutter.commentRangeForeground': ignored, // 行内注释背景色
      'editorGutter.foldingControlForeground': ignored, // 折叠控件颜色

      'editorInlayHint.foreground': punctuation,
      'editorInlayHint.background': '#000',
      'editorStickyScroll.background': activeBackground,
      'editorStickyScrollHover.background': activeBackground,
      'menu.separatorBackground': border,
      // 新增
      'activityBar.activeBackground': activeBackground, // 活动栏背景色（最左侧）
      'inputOption.activeBorder': primary,
      'terminalCursor.foreground': colors.green[4],

    },
    semanticHighlighting: true,
    semanticTokenColors: {
      namespace: pick('namespace'),
      property: pick('property'),
      interface: pick('interface'),
      type: pick('interface'),
      class: pick('class'),
    },
    tokenColors: [

      {
        scope: [
          'comment',
          'punctuation.definition.comment',
          'string.comment',
        ],
        settings: {
          foreground: pick('comment'),
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
          foreground: pick('constant'),
        },
      },
      {
        scope: ['entity', 'entity.name'],
        settings: {
          foreground: pick('function'),
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
          foreground: pick('keyword'),
        },
      },
      {
        scope: 'entity.name.function',
        settings: {
          foreground: pick('function'),
        },
      },
      {
        scope: [
          'keyword',
          'storage.type.class.jsdoc',
        ],
        settings: {
          foreground: pick('keyword'),
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
          foreground: pick('builtin'),
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
          foreground: pick('string'),
        },
      },
      {
        scope: [
          'punctuation.definition.string',
          'punctuation.support.type.property-name',
        ],
        settings: {
          foreground: pick('string'),
        },
      },
      {
        scope: 'support',
        settings: {
          foreground: pick('property'),
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
          foreground: pick('property'),
        },
      },
      {
        scope: [
          'entity.other.attribute-name',
          'invalid.deprecated.entity.other.attribute-name.html',
        ],
        settings: {
          foreground: pick('variable'),
        },
      },
      {
        scope: [
          'variable',
          'identifier',
        ],
        settings: {
          foreground: pick('variable'),
        },
      },
      {
        scope: [
          'support.type.primitive',
          'entity.name.type',
        ],
        settings: {
          foreground: pick('type'),
        },
      },
      {
        scope: 'namespace',
        settings: {
          foreground: pick('namespace'),
        },
      },
      {
        scope: [
          'keyword.operator',
          'keyword.operator.assignment.compound',
          'meta.var.expr.ts',
        ],
        settings: {
          foreground: pick('operator'),
        },
      },
      {
        scope: 'invalid.broken',
        settings: {
          fontStyle: 'italic',
          foreground: colors.gray[2],
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'italic',
          foreground: colors.gray[2],
        },
      },
      {
        scope: 'invalid.illegal',
        settings: {
          fontStyle: 'italic',
          foreground: colors.gray[2],
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          fontStyle: 'italic',
          foreground: colors.gray[2],
        },
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          background: colors.gray[3],
          foreground: colors.gray[0],
          content: '^M',
        },
      },
      {
        scope: 'message.error',
        settings: {
          foreground: colors.gray[2],
        },
      },
      {
        scope: 'string variable',
        settings: {
          foreground: pick('string'),
        },
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
          foreground: pick('regex'),
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
          foreground: pick('string'),
        },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: {
          foreground: pick('yellow'),
        },
      },
      {
        scope: [
          'support.constant',
        ],
        settings: {
          foreground: pick('constant'),
        },
      },
      {
        scope: [
          'keyword.operator.quantifier.regexp',
          'constant.numeric',
          'number',
        ],
        settings: {
          foreground: pick('number'),
        },
      },
      {
        scope: [
          'keyword.other.unit',
        ],
        settings: {
          foreground: pick('builtin'),
        },
      },
      {
        scope: [
          'constant.language.boolean',
          'constant.language',
        ],
        settings: {
          foreground: pick('boolean'),
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
          foreground: pick('orange'),
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
          foreground: pick('interface'),
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
          background: colors.red[9],
          foreground: colors.gray[2],
        },
      },
      {
        scope: [
          'markup.inserted',
          'meta.diff.header.to-file',
          'punctuation.definition.inserted',
        ],
        settings: {
          background: colors.green[9],
          foreground: colors.green[3],
        },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          background: colors.orange[9],
          foreground: colors.orange[3],
        },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: colors.gray[8],
          background: colors.blue[3],
        },
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: colors.purple[3],
          fontStyle: 'bold',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: colors.blue[3],
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: colors.blue[3],
        },
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: colors.blue[3],
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
          foreground: colors.gray[3],
        },
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          foreground: colors.gray[2],
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
          foreground: pick('string'),
        },
      },
      {
        scope: [
          'markup.underline.link.markdown',
          'markup.underline.link.image.markdown',
        ],
        settings: {
          foreground: ignored,
          fontStyle: 'underline',
        },
      },
      {
        scope: [
          'type.identifier',
          'constant.other.character-class.regexp',
        ],
        settings: {
          foreground: pick('class'),
        },
      },
      {
        scope: [
          'entity.other.attribute-name.html.vue',
        ],
        settings: {
          foreground: pick('function'),
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
          'punctuation.terminator.rule.scss',
          'meta.property-list.scss',
          'meta.property-list.scss',
          'meta.property-list.scss',
          'source.css.scss',
        ],
        settings: {
          foreground: colors.gray[5],
        },
      },
      {
        name: 'CSS/SCSS/JS关键字',
        scope: [
          'keyword',
          'storage.type.function',
          'storage.type.function.ts',
          'storage.type.interface',
          'storage.type.enum',
          'variable.language.this',
          'keyword.control.at-rule',
        ],
        settings: {
          foreground: '#c686c0',
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
