<h1 align="center">Vitesse Theme Dark Custom for VS Code</h1>

## 安装
VSCode 扩展市场安装[Vitesse Dark Custom](https://marketplace.visualstudio.com/items?itemName=fxzer.theme-vitesse-dark-custom)

## 使用

```json
// .vscode/setting.json
{
  "workbench.colorTheme": "Vitesse Dark Custom"
}
```

## 预览

<p align="center"><img src="https://github.com/fxzer/theme-vitesse-dark-custom/blob/main/example.jpg"></p>

## 特性

根据自己使用习惯，基于 Vitesse Dark Theme 主题做了以下自定义修改。
- 自动根据基础色，生成 5 个更亮、更暗的颜色
- 边框线变明显
- 选中高亮变明显
- 非当前行号前景变淡
- 加深 Tab 激活背景色
- 新增输入框选项按钮边框色
- 逗号提亮（解决与 copilot 提示分不清问题）
- 突显CSS/SCSS 关键字、this 关键字
- 注释/函数参数 斜体
- 突显文件列表中当前激活、聚集的文件，顶部命令中心聚焦背景色

## 简化自己的VSCode全局配置
```json
// .vscode/setting.json
{
  "workbench.colorTheme": "Vitesse Dark Custom"
}
```


<details>
<summary>之前配置</summary>

```json
{
  /* 自定义工作台主题 */
  "workbench.colorCustomizations": {
    "[Vitesse Dark]": {
      // 文件 Tab 选项卡
      "tab.hoverBackground": "#1e1e1e",
      "tab.activeBorderTop": "#3D886B",
      // 选中的文本背景色
      "editor.selectionBackground": "#3d6baac7",
      "tab.activeBackground": "#333",
      "tab.inactiveBackground": "#090909",
      "editorLineNumber.foreground": "#333",
      "sideBar.border": "#222",
      "sideBarSectionHeader.background": "#222",
      "activityBar.activeBackground": "#222",
      "panel.border": "#222",
      "panel.background": "#101010",
      "sideBar.background": "#101010",
      "menu.selectionBackground": "#21252b",
      "menu.background": "#181a21",
      "list.activeSelectionBackground": "#3d886b5c",
      "list.focusOutline": "#3d886b5c",
      "list.hoverBackground": "#1e1e1d",
      "list.focusBackground": "#1e1e1d",
      "list.focusAndSelectionOutline": "#3d886b5c",
      "list.activeSelectionForeground": "#f5f5f5",
      "list.inactiveSelectionBackground": "#3d886b37",
      // 命令行中心弹出的列表 聚焦背景色
      "quickInputList.focusBackground": "#222",
      // 输入框里的选项被选中的边框颜色
      "inputOption.activeBorder": "#3D886B"
    }
  }
}
```

```json
// 编辑区自定义代码高亮
{
  "editor.tokenColorCustomizations": {
    "textMateRules": [
    // js,ts,vue文件分号
      {
        "name": "Semicolons",
        "scope": [
          "punctuation.terminator.expression",
          "punctuation.terminator.statement"
        ],
        "settings": {
          "foreground": "#8e8e8e"
        }
      },
      // 逗号
      {
        "name": "Commas",
        "scope": [
          "punctuation.separator.comma"
        ],
        "settings": {
          "foreground": "#8e8e8e"
        }
      },
      {
        "name": "Separators (key/value, namespace, inheritance, pointer, hash, slice, etc)",
        "scope": [
          "entity.other.attribute-name.placeholder punctuation",
          // 伪类、伪元素冒号
          "entity.other.attribute-name.pseudo-class punctuation",
          "entity.other.attribute-name.pseudo-element punctuation",
          "punctuation.definition.entity.other.inherited-class",
          "punctuation.separator.dictionary.key-value",
          "punctuation.separator.inheritance",
          "punctuation.separator.key-value",
          "punctuation.separator.namespace"
        ],
        "settings": {
          "foreground": "#aa7babcf"
        }
      },
      // css scss 关键字
      {
        "name": "CSS/SCSS keywords",
        "scope": [
          "keyword.control.at-rule"
        ],
        "settings": {
          "foreground": "#aa7bab"
        }
      },
      // this
      {
        "name": "this",
        "scope": [
          "variable.language.this"
        ],
        "settings": {
          "foreground": "#b86795"
        }
      },
      {
        "name": "Function parameters",
        "scope": [
          "entity.name.variable.parameter",
          "meta.at-rule.function variable",
          "meta.at-rule.mixin variable",
          "variable.parameter"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      },
      // 注释
      {
        "name": "Comments",
        "scope": [
          "comment"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      }
    ]
  }
}
```

</details>

## 注意

运行`vsce package`前需要删除 node_modules文件夹，否则会报错

## Links

[prism-theme-vars](https://github.com/antfu/prism-theme-vars) - where the theme born.

[Vitesse Dark Custom](https://github.com/fxzer/theme-vitesse-dark-custom) - what the theme was for.

## Thanks

This project is based on [Vitesse Dark Theme](https://marketplace.visualstudio.com/items?itemName=antfu.theme-vitesse).

## License

MIT - Copyright (c) 2023 fxzer

