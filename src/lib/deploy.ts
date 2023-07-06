import * as vscode from 'vscode';
const notifier = require('node-notifier');

export const deploy = async () => {
	// give the heads up 🚨
	notifier.notify({
		title: 'Git Roulette 🚢 🎲',
		message: 'You have 10 seconds before auto-saving and pushing to git!',
	});

	// wait for 10 seconds ⏰
	await new Promise((resolve) => setTimeout(resolve, 7000));

	// open new terminal 🧑‍💻
	vscode.commands.executeCommand('workbench.action.terminal.new');

	// wait for terminal to open 🕰
	await new Promise((resolve) => setTimeout(resolve, 3000));

	// save all files 😈
	vscode.commands.executeCommand('workbench.action.files.saveAll');

	// push to git 🚢
	vscode.commands.executeCommand('workbench.action.terminal.sendSequence', {
		text: 'git add .\n',
	});

	// commit with message 🫶
	vscode.commands.executeCommand('workbench.action.terminal.sendSequence', {
		text: `git commit -m "git-roulette"\n`,
	});

	// push changes 🤩
	vscode.commands.executeCommand('workbench.action.terminal.sendSequence', {
		text: 'git push\n',
	});
};
