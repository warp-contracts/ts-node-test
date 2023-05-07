'use strict';

import { defaultCacheOptions, WarpFactory } from 'warp-contracts';

const warp = WarpFactory.forMainnet({ ...defaultCacheOptions, inMemory: true })
const contract = warp.contract('D3R1YW4jp1aRCdPy0q3rbmLIuKI4eKi5BRQ0PLbv8pU');

async function read() {
	const result = await contract.readState();
	console.log(result.cachedValue);
}

read().finally(() => console.log('done'));
