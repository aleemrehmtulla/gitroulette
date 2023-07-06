import * as vscode from 'vscode';
import { deploy } from '../lib/deploy';
import { addTimeout, clearAllTimeouts } from '../lib/timeouts';

export const registerStart = (): vscode.Disposable => {
	const disposable = vscode.commands.registerCommand('git-roulette.start', async () => {
		vscode.window.showInformationMessage('Git Roulette is now active!');

		const deploymentsPerHour = 4;

		clearAllTimeouts();

		for (let i = 0; i < deploymentsPerHour; i++) {
			const deployTime = Math.random() * (15 - 10) * 60 * 1000 + 10 * 60 * 1000;
			const timeout = setTimeout(async () => {
				await deploy();
			}, deployTime);
			addTimeout(timeout);
		}
	});

	return disposable;
};
