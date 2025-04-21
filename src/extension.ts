import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {

	console.log('extension "debug-print" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
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

		const formatted_txt = `print("${text} => ", ${text})`;
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
}


export function deactivate() { }
