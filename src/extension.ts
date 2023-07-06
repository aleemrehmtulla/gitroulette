import * as vscode from 'vscode';
import { registerStart } from './commands/start';
import { registerStop } from './commands/stop';

export const activate = async (context: vscode.ExtensionContext) => {
	const startCommand = registerStart();
	const stopCommand = registerStop();

	context.subscriptions.push(startCommand);
	context.subscriptions.push(stopCommand);

	console.log('Git Roulette is now active!');
};

export const deactivate = () => {};
