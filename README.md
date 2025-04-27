# Debug Print Helper

A VS Code extension that helps you add language-specific debug print statements quickly while coding.

## Features

This extension adds a keyboard shortcut (`Ctrl+Shift+D` or `Cmd+Shift+D` on Mac) that inserts a debug print statement below your selected variable or expression, automatically adapting to the programming language you're using.

### How it works:

1. Select a variable or expression in your code
2. Press `Ctrl+Shift+D` (or `Cmd+Shift+D` on Mac)
3. A language-appropriate print statement is automatically inserted on the next line

### Supported Languages:~

- Python: `print("variable => ", variable)`
- JavaScript/TypeScript: `console.log("variable =>", variable);`
- Java: `System.out.println("variable => " + variable);`
- C/C++: `printf("variable => %d\n", variable);`
- C#: `Console.WriteLine("variable => {0}", variable);`
- Go: `fmt.Printf("variable => %v\n", variable)`
- PHP: `echo "variable => " . variable;`
- Ruby: `puts "variable => #{variable}"`
- Rust: `println!("variable => {:?}", variable);`
- Swift: `print("variable => \(variable)")`
- PowerShell: `Write-Host "variable => " $variable`
- Shell/Bash: `echo "variable => $variable"`
- And more...

## Customizing the Keyboard Shortcut

The default shortcut for this extension is `Ctrl+Shift+D` (or `Cmd+Shift+D` on Mac). If you want to change it to a different shortcut:

1. Open VS Code
2. Go to File > Preferences > Keyboard Shortcuts (or press `Ctrl+K Ctrl+S`)
3. Search for "Add Debug Print Statement"
4. Click on the pencil icon to the left of the command
5. Press your desired key combination
6. Press Enter to save

![Sample Demonsatration in Python](https://github.com/TarunAanand/debugPrintHelper/blob/master/images/demo.gif)


## Requirements

No special requirements or dependencies.

## Known Issues

None at this time.

## Release Notes

### 0.1.0

Initial release of Debug Print Helper with multi-language support.

## About

Created to speed up debugging by quickly adding print statements to inspect variables in your preferred language.