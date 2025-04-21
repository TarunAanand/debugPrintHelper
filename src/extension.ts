import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {

	console.log('extension "debug-print" is now active!');

	const disposable = vscode.commands.registerCommand('debug-print.insertDebugprint', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}
		const selection = editor.selection;
		const text = editor.document.getText(selection).trim();

		if (!text) {
			vscode.window.showInformationMessage('No text selected');
			return;
		}

		const languageId = editor.document.languageId;
		const formatted_txt = getFormattedText(languageId, text);
		const lineAfterSelection = selection.end.line;

		editor.edit(editBuilder => {
			const currentLine = editor.document.lineAt(selection.active.line);
			const indentationLength = currentLine.firstNonWhitespaceCharacterIndex;
			const indentation = currentLine.text.substring(0, indentationLength);

			const position = new vscode.Position(lineAfterSelection, currentLine.range.end.character);

			editBuilder.insert(position, `\n${indentation}${formatted_txt}`);

		});

	});

	context.subscriptions.push(disposable);

	function getFormattedText(languageId: string, text: string) {
		switch (languageId) {
			case 'python':
				return `print("${text} => ", ${text})`;
				case 'javascript':
					case 'typescript':
					case 'jsx':
					case 'tsx':
						return `console.log("${text} =>", ${text});`;
					
					case 'java':
						return `System.out.println("${text} => " + ${text});`;
					
					case 'c':
					case 'cpp':
						return `printf("${text} => %d\\n", ${text});`;
					
					case 'csharp':
						return `Console.WriteLine("${text} => {0}", ${text});`;
						
					case 'go':
						return `fmt.Printf("${text} => %v\\n", ${text})`;
						
					case 'php':
						return `echo "${text} => " . ${text};`;
						
					case 'ruby':
						return `puts "${text} => #{${text}}"`;
						
					case 'rust':
						return `println!("${text} => {:?}", ${text});`;
						
					case 'swift':
						return `print("${text} => \\(${text})")`;
						
					case 'powershell':
						return `Write-Host "${text} => " $${text}`;
						
					case 'shellscript':
					case 'bash':
						return `echo "${text} => $${text}"`;
						
					default:
						return `console.log("${text} =>", ${text});`;
		}
	}
}


export function deactivate() { }
