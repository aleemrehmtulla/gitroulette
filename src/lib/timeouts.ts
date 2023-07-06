let timeouts = [] as NodeJS.Timeout[];

export const getTimeouts = () => timeouts;

export const setTimeouts = (newTimeouts: NodeJS.Timeout[]) => {
	timeouts = newTimeouts;
};

export const addTimeout = (timeout: NodeJS.Timeout) => {
	timeouts.push(timeout);
};

export const clearAllTimeouts = () => {
	timeouts.forEach((timeout) => clearTimeout(timeout));
	timeouts = [];
};
