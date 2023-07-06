import * as vscode from 'vscode';
import { clearAllTimeouts } from '../lib/timeouts';

export const registerStop = (): vscode.Disposable => {
	const disposable = vscode.commands.registerCommand('git-roulette.stop', () => {
		clearAllTimeouts();
		vscode.window.showInformationMessage('Stopped Git Roulette', { modal: true });
		vscode.window.showInformationMessage('You should still ship it!');
	});

	return disposable;
};
